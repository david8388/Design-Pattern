class Order {
    show(): void {

    }
}

class Item extends Order {
    protected order: Order

    decorate(order: Order) {
        this.order = order
    }

    show(): void {
        if (this.order !== null) {
            this.order.show()
        }
    }

}

class Drink extends Item {
    addDrink(): void {
        console.log('一份飲料')
    }

    show(): void {
        super.show()    
        this.addDrink()
    }

}


class MainMeal extends Item {
    addDrink(): void {
        console.log('一份主餐')
    }

    show(): void {
        super.show()
        this.addDrink()
    }

}

class Salad extends Item {
    addSalad(): void {
        console.log('一份沙拉');
    }

    show(): void {
        super.show()
        this.addSalad()
    }

}


class Soup extends Item {
    addSoup(): void {
        console.log('一份湯品')
    }

    show(): void {
        super.show()
        this.addSoup()
    }
}

const order: Order = new Order()
const drink: Drink = new Drink()
const mainMeal: MainMeal = new MainMeal()
const soup: Soup = new Soup()

drink.decorate(order)
mainMeal.decorate(drink)
soup.decorate(mainMeal)

soup.show()

class Meal extends Order {
    protected order: Order

    decorate(order: Order) {
        this.order = order
    }

    show(): void {
        if (this.order) {
            this.order.show()
        }
    }

}

class SimpleMeal extends Meal {
    protected order : Order

    private addMeal(): void {
        const salad: Salad = new Salad()
        const mainMeal: MainMeal = new MainMeal()
        const drink: Drink = new Drink()
        salad.decorate(order)
        mainMeal.decorate(salad)
        drink.decorate(mainMeal)
        this.order = drink
    }

    show(): void {
        this.addMeal()
        super.show()
    }

}
console.log('簡餐')

const simpleMeal: SimpleMeal = new SimpleMeal()
simpleMeal.show()

// 下方耦合性太高
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
