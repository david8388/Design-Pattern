class Light {
    turnOn(): void {
        console.log('打開燈')
    }

    turnOff(): void {
        console.log('關燈')
    }

    brighter(): void {
        console.log('亮度提高')
    }

    darker(): void {
        console.log('亮度降低')
    }

}

abstract class Command {
    light: Light = new Light()

    constructor(light: Light) {
        this.light = light
    }

    abstract execute(): void

}