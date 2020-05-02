interface IProduct {
    describe(): void
}

interface IFactory {
    getProduct(state): IProduct
}

class FrenchFries implements IProduct {
    state: string

    constructor(state: string = 'salt') {
        this.state = state
    }

    describe(): void {
        console.log(`I'm ${this.state} frenchFries`)
    } 
}

class FrenchFactory implements IFactory {
    getProduct(state = 'salt'): IProduct {
        return new FrenchFries(state)
    }
}

const fac = new FrenchFactory()
const fries = fac.getProduct()
const fries_without_salt = fac.getProduct('without salt')

fries.describe()
fries_without_salt.describe()

