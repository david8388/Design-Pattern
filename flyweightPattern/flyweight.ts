class Monitor {
    private monitoring: string = 'Retina Display'

    getMonitor(): string {
        return this.monitoring
    }
}

class CustomSetting {
    static low: CustomSetting = new CustomSetting('LOW')
    static High: CustomSetting = new CustomSetting('HIGH')
    cpu: string
    memory: number
    storage: number

    constructor(set = null) {
        switch (set) {
            case "LOW":
                this.cpu = 'i5'
                this.memory = 8
                this.storage = 256
                break;
            case "HIGH":
                this.cpu = 'i7'
                this.memory = 16
                this.storage = 512
                break;
            default:
                break;
        }
        
    }

    getCPU(): string {
        return this.cpu
    }

    setCPU(cpu: string): void {
        this.cpu = cpu
    }

    getMemory(): number {
        return this.memory
    }

    setMemory(memory: number): void {
        this.memory = memory
    }

    getStorage(): number {
        return this.storage
    }

    setStorage(storage: number): void {
        this.storage = storage
    }

    toString() {
        return `Custom Setting = 
            cpu = ${this.getCPU()}
            memory = ${this.getMemory()}
            storage = ${this.getStorage()}
        `
    }
}


class Macbook extends Monitor {
    private customSetting: CustomSetting

    constructor(customSetting: CustomSetting) {
        super()
        this.customSetting = customSetting
    }
    
    setCustomSetting(customSetting: CustomSetting): void {
        this.customSetting = customSetting
    }

    toString() {
        return `Custom Setting = 
            cpu = ${this.customSetting.getCPU()}
            memory = ${this.customSetting.getMemory()}
            storage = ${this.customSetting.getStorage()}
            monitoring = ${super.getMonitor()}
        `
    }
}

class MacbookFactory {
    private cache: Map<CustomSetting, Macbook>

    getCustomMacbook(key: CustomSetting): Macbook {
        if (this.cache.has(key)) {
            return this.cache.get(key)
        }
        const macbook = new Macbook(key)
        this.cache.set(key, macbook)
        return macbook
    }
}
const factory: MacbookFactory = new MacbookFactory()

const superSetting: CustomSetting = new CustomSetting()
superSetting.setCPU('i9')
superSetting.setMemory(32)
superSetting.setStorage(1024)

const superMacBook: Macbook = factory.getCustomMacbook(superSetting)
console.log(superMacBook.toString())
