interface Iteratar {
    first(): object
    next(): object
    isDone(): boolean
    currentItem(): object
}

interface Aggregate {
    createIterator()
}

class Employee {
    name: string
    title: string
    constructor(name: string, title: string) {
        this.name = name
        this.title = title
    }
}

class CompanyA implements Aggregate {
    employees: Employee[] = []
    constructor() {
        this.employees.push(new Employee('Alice', 'Sales'))
        this.employees.push(new Employee('Bob', 'Programmer'))
        this.employees.push(new Employee('Chris', 'Project Manger'))
        this.employees.push(new Employee('Danile', 'Driver'))
    }
    createIterator() {
        return new CompanyAIterator(this)
    }
}

class CompanyAIterator implements Iteratar {
    private companyA: CompanyA
    private current: number = 0

    constructor(companyA: CompanyA) {
        this.companyA  = companyA
    }

    first(): object {
        return this.companyA.employees[this.current]
    }

    next(): object {
        let ret = null
        this.current++
        if (this.current < this.companyA.employees.length) {
            ret = this.companyA.employees[this.current]
        }
        return ret
    }

    isDone(): boolean {
        return this.current >= this.companyA.employees.length
    }

    currentItem(): object {
        return this.companyA.employees[this.current]
    }
}

const companyA: CompanyA = new CompanyA()
const iteratar: Iteratar = companyA.createIterator()
while(!iteratar.isDone()) {
    const current = iteratar.currentItem() as Employee
    console.log(`${current.name}:${current.title} 發薪水囉`)
    iteratar.next()
}