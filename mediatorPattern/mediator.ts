interface Company {
    addMembers(coWorker: CoWorker): void

    introduce(coWorker: CoWorker): void

    workHard(): void

    giveWork(coWorker: CoWorker): void
}

abstract class CoWorker {

    name: string

    boss: Boss

    constructor(name: string) {
        this.name = name
    }

    abstract work(): void
}   

class Boss implements Company {

    coWorkers: CoWorker[] = []

    constructor() {
        this.coWorkers = []
    }

    addMembers(coWorker: CoWorker): void {
        this.coWorkers.push(coWorker)
        coWorker.boss = this
    }

    introduce(coWorker: CoWorker): void {
        console.log('Boss: 跟大家介紹這位是' + coWorker.name)
    }

    workHard(): void {
        for (const worker of this.coWorkers) {
            console.log('Boss:' + worker.name + '認真做')
        }
    }

    giveWork(coWorker: CoWorker): void {
        console.log('Boss:' + coWorker.name + '這個幫忙一下')
    }

}

class PM extends CoWorker {

    constructor(name: string) {
        super(name)
    }

    work(): void {
        console.log(this.name + '做PM工作')
    }

    bossHelp(coWorker: CoWorker): void {
        this.boss.giveWork(coWorker)
    }
}

class Programmer extends CoWorker {

    constructor(name: string) {
        super(name)
    }

    work(): void {
        console.log(this.name + '寫程式')
    }
}

const boss: Boss = new Boss()
const wei: PM = new PM('Wei')
const bad: Programmer = new Programmer('Baddy')
const good: Programmer = new Programmer('Jen')

boss.addMembers(wei)
boss.addMembers(bad)
boss.addMembers(good)

boss.introduce(bad)

good.work()

boss.workHard()

wei.bossHelp(bad)