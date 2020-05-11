enum SugarType {
    Regular,
    Less,
    Half,
    Quarter,
    Free
}

enum IceType {
    Regular,
    Easy,
    Free,
    Hot
}

abstract class Drink {
    sugar: SugarType
    ice: IceType

    constructor(sugar: SugarType, ice: IceType ) {
        this.sugar = sugar
        this.ice = ice
    }

    getSugar() {
        return this.sugar
    }

    setSugar(sugar: SugarType) {
        this.sugar = sugar
    }

    getIce() {
        return this.ice
    }

    setIce(ice: IceType) {
        this.ice = ice
    }
}

enum TeaType {
    Lemon,
    Oolong,
    Ginger,
    Honey
}

class Tea extends Drink {
    teaType: TeaType

    constructor(sugar: SugarType, ice: IceType) {
        super(sugar, ice)
    }

    setTeaType(teaType: TeaType) {
        this.teaType = teaType
    }

    getTeaType() {
        return this.teaType
    }
}

enum CoffeeType {
    Latte,
    Mocha,
    White,
    Blue_Mountain,
    Americano,
    Espresso
}

class Coffee extends Drink {
    coffeeType: CoffeeType

    constructor(sugar: SugarType, ice: IceType) {
        super(sugar, ice)
    }

    setCoffeeType(coffeeType: CoffeeType) {
        this.coffeeType = coffeeType
    }

    getCoffeeType() {
        return this.coffeeType
    }
}