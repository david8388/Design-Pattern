class BlackMan {
    
    name: string

    constructor(name: string) {
        this.name = name
    }

    helloEnglish(): void {
        console.log(`Yo! What's up`)
    }

    selfIntroEnglish(): void {
        console.log(`hello i live in taichung. my name is ${this.name}`)
    }

}

abstract class People {
    
    name: string

    constructor(name: string) {
        this.name = name
    }

    abstract hello(): void

    abstract selfIntro(): void 

    getName(): string {
        return this.name
    }

}

class BlackManTranslator extends People {

    constructor(name: string) {
        super(name)
    }

    hello(): void {
        console.log(this.getName() + '哩賈霸沒～真的假的')
    }

    selfIntro(): void {
        console.log(`大家好我是${this.getName()}, 現在再台中工作`)
    }

}

class TaiwanMan {

    private people: People

    constructor(people: People) {
        this.people = people
    }

    hello(): void {
        this.people.hello()
    }

    selfIntro(): void {
        this.people.selfIntro()
    }

}

const blackMan: BlackMan = new BlackMan('black')
blackMan.helloEnglish()
blackMan.selfIntroEnglish()

const taiwanMan: TaiwanMan = new TaiwanMan(new BlackManTranslator(blackMan.name))
taiwanMan.hello()
taiwanMan.selfIntro()