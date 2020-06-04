class Component {
    name: string
    componentList: Component[] = []

    constructor(name: string) {
        this.name = name
    }

    add(component: Component): void {
        this.componentList.push(component)
    }

    remove(component: Component): void {
        this.componentList.filter(comp => comp !== component)
    }

    display(depth: number) {
        let prefix: string = ''
        for (let index = 0; index < depth; index++) {
            prefix+= '-'
        }
        console.log(prefix + this.name)

        for (const comp of this.componentList) {
            comp.display(depth + 2)
        }
    }

    command(command: string): void {
        for (let component of this.componentList) {
            component.command(command)
        }
        console.log(this.name + command)
    }
}

class Composite extends Component {
    constructor(name: string) {
        super(name)
    }
}

class Leaf extends Composite {
    constructor(name) {
        super(name)
    }

    add(component: Component): void {
        console.log('Leaf cant add component');
    }

    remove(component: Component): void {
        console.log('Leaf cant remove component');
    }

    display(depth: number): void {
        super.display(depth)
    }
}

const big: Component = new Component('大公司')
const mid1: Component = new Component('子公司1')
const mid2: Component = new Component('子公司2')
const small1: Component = new Leaf('部門1')
const small2: Component = new Leaf('部門2')
const small3: Component = new Leaf('部門3')
const small4: Component = new Leaf('部門4')
const small5: Component = new Leaf('部門5')

big.add(mid1)
big.add(mid2)

mid1.add(small1)
mid1.add(small2)

mid2.add(small3)
mid2.add(small4)

small1.add(small5)

console.log('------大公司------')
big.display(1)
big.command('開發請加速')
console.log('------子公司------')
mid2.display(1)
mid2.command('老闆說Q4要完成')
