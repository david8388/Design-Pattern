interface Visit {
    visitAirQuality(airQuality: AirQuality): void
    visitTemperature(temtemperature: Temperature): void
}

abstract class Weather {

    temperature: number

    airQuality: number

    constructor() {
        this.temperature = Math.random() * 30
        this.airQuality = Math.random() * 300
    }
    
    abstract accept(visit: Visit): void
}

class Temperature extends Weather {

    constructor() {
        super()
    }

    getTempGraph(): string {
        return '溫度趨勢圖'
    }

    accept(visit: Visit): void {
        visit.visitTemperature(this)
    }
}

class AirQuality extends Weather {
    
    constructor() {
        super()
    }

    getAirGraph(): string {
        return '空氣趨勢圖'
    }

    accept(visit: Visit) : void {
        visit.visitAirQuality(this)
    }
}

class Man implements Visit {

    visitAirQuality(airQuality: AirQuality): void {
        console.log('稍微看一下空氣品質:' + airQuality.airQuality);
    }

    visitTemperature(temperature: Temperature): void {
        console.log('關心一下:' + temperature.temperature);
    }
}

class Woman implements Visit {

    visitTemperature(temperature: Temperature): void {
        console.log('稍微看一下溫度:' + temperature.temperature);
    }
    
    visitAirQuality(airQuality: AirQuality): void {
        console.log('關心空氣品質:' + airQuality.airQuality);
    }

}

const temp: Temperature = new Temperature()
const airQuality: AirQuality = new AirQuality()
const man: Visit = new Man()
const woman: Visit = new Woman()

console.log('-----男生-----')
man.visitAirQuality(airQuality)
man.visitTemperature(temp)

console.log('-----女生-----')
woman.visitAirQuality(airQuality)
woman.visitTemperature(temp)