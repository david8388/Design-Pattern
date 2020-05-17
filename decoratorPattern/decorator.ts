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