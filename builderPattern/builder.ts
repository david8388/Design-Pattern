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
    constructor(language: string) {
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

class MBP_2018 extends MBPBuilder {

    constructor() {
        super()
    }

    build(): MBP {
        return super.build()
    }

    buildCPU(processor: any): MBPBuilder {
        this.mbp.setProcessor(processor)
        return this
    }

    buildMemory(memory: any): MBPBuilder {
        this.mbp.setMemory(memory)
        return this
    }

    buildGraphics(graphics: any): MBPBuilder {
        this.mbp.setGraphics(graphics)
        return this
    }

    buildCapacity(capacity: any): MBPBuilder {
        this.mbp.setCapacity(capacity)
        return this
    }
    buildKeyboard(keyboard: any): MBPBuilder {
        this.mbp.setKeyboard(keyboard)
        return this
    }
    
}

class MBPSeller {

    private mbpBuilder: MBPBuilder

    constructor(mbpBuilder: MBPBuilder) {
        this.mbpBuilder = mbpBuilder
    }

    lowSpec() {
        return this.mbpBuilder
            .buildCPU(new Processor('2.2GHz 6 核心第八代 Intel Core i7 處理器'))
            .buildMemory(new Memory(16))
            .buildGraphics(new Graphics('Radeon Pro 555X 配備 4GB GDDR5 記憶體'))
            .buildCapacity(new Capacity(256))
            .buildKeyboard(new Keyboard('中文鍵盤'))
            .build()
    }

    highSpec() {
        return this.mbpBuilder
            .buildCPU(new Processor('2.6GHz 6 核心第八代 Intel Core i7 處理器'))
            .buildMemory(new Memory(16))
            .buildGraphics(new Graphics('Radeon Pro 560X 配備 4GB GDDR5 記憶體'))
            .buildCapacity(new Capacity(512))
            .buildKeyboard(new Keyboard('中文鍵盤'))
            .build()
    }

}

const mbp_2018: MBP_2018 = new MBP_2018()
const mbpSeller: MBPSeller = new MBPSeller(mbp_2018)
const myMBP: MBP = mbpSeller.lowSpec()

const dreamMBP: MBP = 
    mbp_2018
    .buildCPU(new Processor('2.9GHz 6 核心第八代 Intel Core i9 處理器'))
    .buildMemory(new Memory(32))
    .buildGraphics(new Graphics('Radeon Pro 560X 配備 4GB GDDR5 記憶體'))
    .buildCapacity(new Capacity(4096))
    .buildKeyboard(new Keyboard('英文鍵盤'))
    .build()
    
console.log(myMBP, dreamMBP)