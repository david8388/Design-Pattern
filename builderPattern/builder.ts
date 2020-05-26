class Processor {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

class Memory {
    size: number;
    constructor(size: number) {
        this.size = size
    }
}

class Graphics {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

class Capacity {
    size: number;
    constructor(size: number) {
        this.size = size
    }
}

class Keyboard {
    language: string;
    constructor(language: string;) {
        this.language = language
    }
}


class MBP {
    private processor: Processor
    private memory: Memory
    private capacity: Capacity
    private graphics: Graphics
    private keyboard: Keyboard

    constructor() {}

    setProcessor(processor: Processor): void {
        this.processor = processor
    }

    setMemory(memory: Memory): void {
        this.memory = memory
    }

    setCapacity(capacity: Capacity): void {
        this.capacity = capacity
    }

    setGraphics(graphics: Graphics): void {
        this.graphics = graphics    
    }

    setKeyboard(keyboard: Keyboard): void {
        this.keyboard = keyboard
    }

    getProcessor(): Processor {
        return this.processor
    }

    getMemory(): Memory {
        return this.memory
    }

    getCapacity(): Capacity {
        return this.capacity
    }

    getGraphics(): Graphics {
        return this.graphics
    }

    getKeyboard(): Keyboard {
        return this.keyboard
    }

    toString(): string {
        return `MBP 
                Processor${this.getProcessor().name}
                Memory${this.getMemory().size}
                Graphics${this.getGraphics().name}
                Capacity${this.getCapacity().size}
                Keyboard Language${this.getKeyboard().language}
                `
    }
}

abstract class MBPBuilder {
    protected mbp: MBP

    constructor() {
        this.mbp = new MBP()
    }

    abstract buildCPU(processor): MBPBuilder
    abstract buildMemory(memory): MBPBuilder
    abstract buildGraphics(graphics): MBPBuilder
    abstract buildCapacity(capacity): MBPBuilder
    abstract buildKeyboard(keyboard): MBPBuilder

    build(): MBP {
        return this.mbp
    }
}