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