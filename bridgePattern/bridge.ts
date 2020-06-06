interface Resources {
    photo(): void

    snippet(): void

    describe(): void
}

abstract class View {
    resources: Resources

    setResource(resources: Resources) {
        this.resources = resources
    }
    
    abstract show(): void
}

class Book implements Resources {
    photo(): void {
        console.log('書本照片')
    }

    snippet(): void {
        console.log('書本簡短說明')
    }

    describe(): void {
        console.log('書本詳細說明')
    }

}

class Bag implements Resources {
    photo(): void {
        console.log('包包的照片')
    }

    snippet(): void {
        console.log('包包的簡短說明')
    }

    describe(): void {
        console.log('包包的詳細說明')
    }

}

class FewView extends View {
    show(): void {
        this.resources.photo()
        this.resources.snippet()
    }
}

class FullView extends View {
    show(): void {
        this.resources.photo()
        this.resources.describe()
    }
}

const fewView: FewView = new FewView()
const fullView: FullView = new FullView()
console.log('簡單包包說明')
fewView.setResource(new Bag())
fewView.show()
console.log('簡單書本說明')
fewView.setResource(new Book())
fewView.show()
console.log('詳細包包說明')
fullView.setResource(new Bag())
fullView.show()
console.log('詳細書本說明')
fullView.setResource(new Book())
fullView.show()