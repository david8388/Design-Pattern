class Restaurant {
    private minimumOrder(): void {
        console.log('一杯飲料')
    }

    order(): void {
        this.minimumOrder()
    }

}

class BusinessLunch extends Restaurant {
    private restaurant: Restaurant

    constructor(restaurant: Restaurant) {
        super()
        this.restaurant = restaurant
    }

    salad(): void {
        console.log('一盤沙拉')
    }

    mainMeal(): void {
        console.log('一盤主餐')
    }

    order() : void {
        super.order()
        this.salad()
        this.mainMeal()
    }

}

class SimpleCombo extends BusinessLunch {

    constructor(restaurant: Restaurant) {
        super(restaurant)
    }

    soup(): void {
        console.log('一份湯品');
    }

    order(): void {
        super.order()
        this.soup()
    }
}

class FullCombo extends SimpleCombo {
    constructor(restaurant: Restaurant) {
        super(restaurant)
    }

    sweet(): void {
        console.log('一份甜點')
    }

    order(): void {
        super.order()
        this.sweet()
    }

}

const restaurant : Restaurant = new Restaurant()

const simpleCombo: SimpleCombo = new SimpleCombo(restaurant)

const businessLaunch: BusinessLunch = new BusinessLunch(restaurant)

const fullCombo: FullCombo = new FullCombo(restaurant)

console.log('簡餐')
simpleCombo.order()

console.log('商業午餐')
businessLaunch.order()

console.log('全餐')
fullCombo.order()
