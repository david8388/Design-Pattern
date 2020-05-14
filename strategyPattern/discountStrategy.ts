abstract class DiscountStrategy {
    discount: number

    constructor(discount: number) {
        this.discount = discount
    }

    abstract getValue(value: number): number

}

class MinusDiscount extends DiscountStrategy {

    constructor(discount: number) {
        super(discount)
    }

    getValue(value: number): number {
        return value - this.discount
    }

}

class MultiplyStrategy extends DiscountStrategy {
    constructor(discount: number) {
        super(discount)
    }

    getValue(value: number): number {
        return value * this.discount
    }
}

class NoneStrategy extends DiscountStrategy {

    constructor(discount: number) {
        super(discount)
    }

    getValue(value: number): number {
        return value
    }
    
}

abstract class Drink {
    discountStrategy: DiscountStrategy = new NoneStrategy(1)
    value: number

    constructor(value: number, discount: DiscountStrategy) {
        this.value = value
        this.discountStrategy = discount
    }

    getValue(): number {
        return this.discountStrategy.getValue(this.value)
    }
}

class MilkTea extends Drink {

    constructor(value: number, discount: DiscountStrategy) {
        super(value, discount)
    }

    getValue(): number {
        return super.getValue()
    }
}

class Coffee extends Drink {

    constructor(value: number, discount: DiscountStrategy) {
        super(value, discount)
    }

    getValue(): number {
        return super.getValue()
    }
    
}