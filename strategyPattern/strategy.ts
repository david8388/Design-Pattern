interface IStrategy {
    calculate(a: number, b: number): number
}

class add implements IStrategy {
    calculate(a: number, b: number): number {
        return a + b
    }   
}

class subtract implements IStrategy {
    calculate(a: number, b: number): number {
        return a - b
    }
}

class multiply implements IStrategy {
    calculate(a: number, b: number): number {
        return a * b
    }
}

class divide implements IStrategy {
    calculate(a: number, b: number): number {
        return a / b
    }
}


enum DoType {
    ADD,
    MINUS,
    DIVIDE,
    MULTIPLY
}

class Calculator {
    now: number
    private strategy: IStrategy 
    
    execute(a: number, b: number): number {
        console.log(this.strategy.calculate(a, b))
        return this.strategy.calculate(a, b)
    }

    reset() {
        this.now = 0
    }

    setStrategy(type: DoType): void {
        switch (type) {
            case DoType.ADD:
               this.strategy =  new add()
                break;
            case DoType.DIVIDE:
                this.strategy = new divide()
                break;
            case DoType.MINUS:
                this.strategy = new subtract()
                break;
            case DoType.MULTIPLY:
                this.strategy = new multiply()
                break;
            default:
                break;
        }
    }
}

const b = new Calculator()
b.setStrategy(DoType.DIVIDE)
b.execute(20, 10)

b.setStrategy(DoType.MULTIPLY)
b.execute(20, 10)

b.setStrategy(DoType.ADD)
b.execute(20, 10)

b.setStrategy(DoType.MINUS)
b.execute(20, 10)