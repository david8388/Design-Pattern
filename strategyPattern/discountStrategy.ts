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

class DrinkOrder {
    drinks: Array<Drink>

    addDrink(drink: Drink): void {
        this.drinks.push(drink)
    }

    removeDrink(drink: Drink): void {
        const index = this.drinks.indexOf(drink)
        if (index > -1) {
            this.drinks.splice(index, 1)
        }
    }

    private totalPrice(): number {
        let totalPrice: number = 0

        for (const drink of this.drinks) {
            totalPrice += drink.getValue()
        }
        return totalPrice
    }

    getTotalPrice(discountStrategy: DiscountStrategy): number {
        const totalPrice : number = this.totalPrice()
        return discountStrategy.getValue(totalPrice)
    }

}