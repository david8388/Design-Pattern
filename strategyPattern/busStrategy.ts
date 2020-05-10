interface IStrategy {
    calculate(km: number): number
}

class BusStrategy implements IStrategy {
    calculate(km: number): number {
        let count: number = 0
        if (km <= 10) {
            count = 1
        } else {
            count = 2
        }
        return count * 15
    }
}

class MRTStrategy implements IStrategy {
    calculate(km: number): number {
        let result = 0
        if (km <= 0) {
            return result
        }
        if (km <= 10) {
            result = 20
        }
        if (km > 10) {
            const count = Math.ceil((km - 10) / 5)
            result = 20 + 5 * count
        }
        return result 
    }
}

class PriceCalculator {
    private strategy: IStrategy

    constructor(strategy: IStrategy = null) {
        this.strategy = strategy
    }

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy
    }

    calculate(km: number) {
        return this.strategy.calculate(km)
    }
}

const busCalculator = new PriceCalculator(new BusStrategy)
console.log(busCalculator.calculate(5))

const mrtCalculator = new PriceCalculator()
mrtCalculator.setStrategy(new MRTStrategy)
console.log(mrtCalculator.calculate(26))