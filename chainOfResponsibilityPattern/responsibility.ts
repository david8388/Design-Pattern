class Trouble {
    private name: string
    private size: number

    constructor(name: string, size: number) {
        this.name = name
        this.size = size
    }

    getSize(): number {
        return this.size
    }

    getName(): string {
        return this.name
    }
}

abstract class Handler {
    successor: Handler

    setSuccessor(successor: Handler): void {
        this.successor = successor
    }

    abstract handleRequest(trouble: Trouble): void
}

class Manager extends Handler {

    constructor() {
        super()
        this.setSuccessor(new CEO())
    }

    handleRequest(trouble: Trouble): void {
        if (trouble.getSize() > 1000) {
            this.successor.handleRequest(trouble)
        } else {
            console.log(`Manager: ${trouble.getName()}，是小問題不用擔心`);
        }
    }

}

class CEO extends Handler {

    handleRequest(trouble: Trouble): void {
        console.log(`CEO: ${trouble.getName()}，是誰搞的，叫他過來`);
    }

}

const manager: Manager = new Manager()
const smallTrouble: Trouble = new Trouble('想加薪500', 500)
manager.handleRequest(smallTrouble)

const bigTrouble: Trouble = new Trouble('搞壞50W的機器', 500000)
manager.handleRequest(bigTrouble)

