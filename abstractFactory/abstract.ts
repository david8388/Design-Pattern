abstract class Audi {
    private brand: string
    private type: string

    constructor() {
        this.brand = 'Audi'
    }

    setType(type: string): void {
        this.type = type
    }

    getBrand(): string {
        return this.brand
    }

    getType(): string {
        return this.type
    }
}

abstract class BMW {
    private brand: string
    private type: string

    constructor() {
        this.brand = 'BMW'
    }

    setType(type: string): void {
        this.type = type
    }

    getBrand(): string {
        return this.brand
    }

    getType(): string {
        return this.type
    }
}

class AudiSUV extends Audi {
    constructor() {
        super()
        this.setType('SUV')
    }
}

class AudiJeep extends Audi {
    constructor() {
        super()
        this.setType('Jeep')
    }
}

class BMWSUV extends BMW {
    constructor() {
        super()
        this.setType('SUV')
    }
}

class BMWJeep extends BMW {
    constructor() {
        super()
        this.setType('Jeep')
    }
}

abstract class AbstractFactory {
    abstract createAudi(): Audi
    abstract createBMW(): BMW
}

class JeepFactory extends AbstractFactory {
    createBMW(): BMW {
        return new BMWJeep()
    }
    createAudi(): Audi {
        return new AudiJeep()
    }
}

class SUVFactory extends AbstractFactory {
    createBMW(): BMW {
        return new BMWSUV()
    }
    createAudi(): Audi {
        return new AudiSUV()
    }
}

const suvFactory: AbstractFactory = new SUVFactory()
console.log('-----SUV Factory-----');
const suvAudi: Audi = suvFactory.createAudi()
const suvBMW: BMW = suvFactory.createBMW()
console.log(`${suvAudi.getBrand()}'s ${suvAudi.getType()}`)
console.log(`${suvBMW.getBrand()}'s ${suvBMW.getType()}`)

const jeepFactory: AbstractFactory = new JeepFactory()
console.log('-----SUV Factory-----');
const jeepAudi: Audi = jeepFactory.createAudi()
const jeepBMW: BMW = jeepFactory.createBMW()
console.log(`${jeepAudi.getBrand()}'s ${jeepAudi.getType()}`)
console.log(`${jeepBMW.getBrand()}'s ${jeepBMW.getType()}`)