interface IObserver {
    update(): void
}

interface IObservable {
    add(observer: IObserver): void
    remove(observer: IObserver): void
    notify(): void
}

class PodcastA implements IObservable {
    name: string = '英文廣播'

    list: IObserver[] = []

    add(observer: IObserver): void {
        this.list.push(observer)
    }

    remove(observer: IObserver): void {
        const index = this.list.indexOf(observer)
        if (index > -1) {
            this.list.splice(index, 1)
        }
    }
    
    notify(): void {
        for (const observer of this.list) {
            observer.update()
        }
    }

    getName() {
        return this.name
    }

}

class Student implements IObserver {
    observable: IObservable

    constructor(observable: IObservable) {
        this.observable = observable
    }

    update(): void {
        console.log(`聽了${(this.observable as PodcastA).getName()}`)
    }
}

const podCast: IObservable = new PodcastA()
const student: IObserver = new Student(podCast)
podCast.add(student)
podCast.notify()