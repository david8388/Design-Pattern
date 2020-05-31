interface ICloneable {
    clone()
}

abstract class Prototype implements ICloneable {

    clone(): Prototype {
        return Object.create(this)
    }

}

class Sensor extends Prototype {

    private ID: number
    private name: string
    private nickname: string
    private version: string
    private wifiID: string
    private wifiPass: string
    private data: string

    getData(): string {
        return this.data
    }

    setData(data): void {
        this.data = data
    }

    getID(): number {
        return this.ID
    }

    setID(id: number): void {
        this.ID = id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getNickname(): string {
        return this.nickname
    }

    setNickname(nickname: string): void {
        this.nickname = nickname
    }

    getVersion(): string {
        return this.version
    }

    setVersion(version: string): void {
        this.version = version
    }

    getWifiID(): string {
        return this.wifiID
    }

    setWifiID(wifiID: string): void {
        this.wifiID = wifiID
    }

    getWifiPass(): string {
        return this.wifiPass
    }

    setWifiPass(wifiPass: string): void {
        this.wifiPass = wifiPass
    }

    clone(): Prototype {
        return super.clone()
    }

}

const sensors: Array<Sensor> = [] 

sensors[0] = new Sensor()
sensors[0].setID(1)
sensors[0].setName('Sensor v1')
sensors[0].setNickname('我的空氣探測器')
sensors[0].setVersion('1.0')
sensors[0].setWifiID('Wifi1')
sensors[0].setWifiPass('pass1')
sensors[0].setData('none')

for (let i = 1; i < 10; i++) {
    sensors[i] = sensors[0].clone() as Sensor
    sensors[i].setID(i+1)
}

for (let index = 0; index < 10; index++) {
    console.log(index + 1 === sensors[index].getID())
}