class Tetris {

    constructor() {}

    turnLeft(): void {
        console.log('向左轉')
    }

    turnRight(): void {
        console.log('向右轉')
    }

    straightDown() : void {
        console.log('直接下降')
    }
}

abstract class ICommandTetris {
    
    protected tetris: Tetris

    constructor(tetris: Tetris) {
        this.tetris = tetris
    }

    abstract execute(): void
}

class TurnLeft extends ICommandTetris {

    constructor(tetris: Tetris) {
        super(tetris)
    }

    execute(): void {
        this.tetris.turnLeft()
    }
}

class TurnRight extends ICommandTetris {

    constructor(tetris: Tetris) {
        super(tetris)
    }

    execute(): void {
        this.tetris.turnRight()
    }
}

class StraightDown extends ICommandTetris {

    constructor(tetris: Tetris) {
        super(tetris)
    }

    execute(): void {
        this.tetris.straightDown()
    }
}

class Invoker {
    command: ICommandTetris

    constructor(command: ICommandTetris) {
        this.command = command
    }

    setCommand(command: ICommandTetris) {
        this.command = command
    }

    invoke(): void {
        this.command.execute()
    }
}

const tetris: Tetris = new Tetris
const commandLeft: ICommandTetris = new TurnLeft(tetris)
const commandRight: ICommandTetris = new TurnRight(tetris)
const commandStraightDown: ICommandTetris = new StraightDown(tetris)

const invoker: Invoker = new Invoker(commandLeft)
invoker.invoke()
invoker.setCommand(commandRight)
invoker.invoke()
invoker.setCommand(commandStraightDown)
invoker.invoke()
