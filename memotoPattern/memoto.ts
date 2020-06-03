class ComputerMemoto {
    system: string
    hardisk: string
    userDoc: string
    userApp: string

    constructor(system: string, hardisk: string, userDoc: string, userApp: string) {
        this.system = system
        this.hardisk = hardisk
        this.userDoc = userDoc
        this.userApp = userApp
    }

    getSystem(): string {
        return this.system
    }

    setSystem(system: string): void {
        this.system = system
    }

    getHardisk(): string {
        return this.hardisk
    }

    setHardisk(hardisk: string): void {
        this.hardisk = hardisk
    }

    getUserDoc(): string {
        return this.userDoc
    }

    setUserDoc(userDoc: string): void {
        this.userDoc = userDoc
    }

    getUserApp(): string {
        return this.userApp
    }

    setUserApp(userApp: string): void {
        this.userApp = userApp
    }

}

class ComputerOriginator {
    private system: string = 'macos'
    private hardisk: string = 'ssd'
    private userDoc: string = 'desk'
    private userApp: string = 'pages, numbers'

    save(): ComputerMemoto {
        return new ComputerMemoto(this.system, this.hardisk, this.userDoc, this.userApp)
    }

    restore(memoto: ComputerMemoto): void {
        this.hardisk = memoto.getHardisk()
        this.system = memoto.getSystem()
        this.userDoc = memoto.getUserDoc()
        this.userApp = memoto.getUserApp()
    }

    getSystem(): string {
        return this.system
    }

    setSystem(system: string): void {
        this.system = system
    }

    getHardisk(): string {
        return this.hardisk
    }

    setHardisk(hardisk: string): void {
        this.hardisk = hardisk
    }

    getUserDoc(): string {
        return this.userDoc
    }

    setUserDoc(userDoc: string): void {
        this.userDoc = userDoc
    }

    getUserApp(): string {
        return this.userApp
    }

    setUserApp(userApp: string): void {
        this.userApp = userApp
    }

}

class ComputerCareTaker {
    private static MAX = 15
    saves: ComputerMemoto[] = []

    getSave(index): ComputerMemoto {
        if (index > this.saves.length - 1) {
            index = this.saves.length - 1
        }
        return this.saves[index]
    }

    saveMemoto(memo: ComputerMemoto): void {
        if (this.saves.length > ComputerCareTaker.MAX) {
            this.saves = this.saves.slice(1)
        }
        this.saves.push(memo)
    }

}

const careTaker: ComputerCareTaker = new ComputerCareTaker()
const originator: ComputerOriginator = new ComputerOriginator()
careTaker.saveMemoto(originator.save())
console.log(careTaker.getSave(0).getSystem())
originator.setSystem('windows')
careTaker.saveMemoto(originator.save())
console.log(careTaker.getSave(1).getSystem())
