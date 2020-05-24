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

class TurnOn extends Command {

    constructor(light: Light) {
        super(light)
    }

    execute(): void {
        this.light.turnOn()
    }

}

class TurnOff extends Command {

    constructor(light: Light) {
        super(light)
    }

    execute(): void {
        this.light.turnOff()
    }

}

class Brighter extends Command {

    constructor(light: Light) {
        super(light)
    }

    execute(): void {
        this.light.brighter()
    }
}

class Darker extends Command {

    constructor(light: Light) {
        super(light)
    }

    execute(): void {
        this.light.darker()
    }
}

class Invoker {
    commandList: Command[] = []

    addCommand(command: Command): void {
        this.commandList.push(command)
    }

    execute(): void {
        for (const command of this.commandList) {
            command.execute()
        }
    }
}


const light: Light = new Light()
const turnOn = new TurnOn(light)
const turnOff = new TurnOff(light)
const darker = new Darker(light)
const brighter = new Brighter(light)

const invoker = new Invoker()

invoker.addCommand(turnOn)
invoker.addCommand(turnOff)
invoker.addCommand(darker)
invoker.addCommand(brighter)

invoker.execute()
