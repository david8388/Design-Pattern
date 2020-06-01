class SubClassOne {
    MethodOne(): void {
        console.log('1');
    }
}

class SubClassTwo {
    MethodTwo(): void {
        console.log('2');
    }
}

class SubClassThree {
    MethodThree(): void {
        console.log('3');
    }
}

class ClassOne {
    MethodFour(): void {
        console.log('4');
    }
}

class Facade {
    private one: SubClassOne
    private two: SubClassTwo
    private three: SubClassThree
    private four: ClassOne

    constructor() {
        this.one = new SubClassOne()
        this.two = new SubClassTwo()
        this.three = new SubClassThree()
        this.four = new ClassOne()
    }

    methodA() : void {
        this.four.MethodFour()
        this.one.MethodOne()
    }

    methodB() : void {
        this.two.MethodTwo()
        this.three.MethodThree()
    }

}

const facade: Facade = new Facade()
console.log('Method A')
facade.methodA()
console.log('Method B')
facade.methodB()