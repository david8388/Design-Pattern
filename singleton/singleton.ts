class Singleton {
    private static instance: Singleton

    // Changing the scope of a constructor to private removes our ability to use the new keyword.
    // https://khalilstemmler.com/blogs/typescript/when-to-use-a-private-constructor/
    private constructor() {
        
    }

    static getInstance(): Singleton {
        if (Singleton.instance) return Singleton.instance
        return Singleton.instance = new Singleton()
    } 
}


class Singleton2 {
    private static instance: Singleton2 = new Singleton2()
    
    private constructor() {
        
    }

    static getInstance(): Singleton2 {
        return this.instance
    }

}


const a = Singleton.getInstance()
const b = Singleton.getInstance()

const c = Singleton2.getInstance()
const d = Singleton2.getInstance()

console.log('a === b is ', a ===b)
console.log('c === d is ', c === d)