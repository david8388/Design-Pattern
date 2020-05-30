interface IBuyHouse {

    findHouse(): void

    priceTooHight(): void

    defendPrice(): void

    finish(): void

}

class LittleEngineer implements IBuyHouse {

    findHouse(): void {
        console.log('民生機能好，當然找那邊的房子');
    }
    priceTooHight(): void {
        console.log('台灣薪水低，屋主開那麼高賣不掉');
    }
    defendPrice(): void {
        console.log('未來人口少，我們也是自住！打我五折吧');
    }
    finish(): void {
        console.log('辛苦還房貸10年');
    }

}

class EstateAgent implements IBuyHouse {

    private iBuyHouse: IBuyHouse

    constructor(iBuyHouse: IBuyHouse) {
        this.iBuyHouse = iBuyHouse
    }

    findHouse(): void {
        this.iBuyHouse.findHouse()
        console.log('房仲幫忙找房子')
    }

    priceTooHight(): void {
        this.iBuyHouse.priceTooHight()
        console.log('房仲幫忙喬價錢');
    }

    defendPrice(): void {
        this.iBuyHouse.defendPrice()
        console.log('房仲用力喬價錢');
    }

    finish(): void {
         console.log('成交得話，房仲幫忙付訂、簽約、用印、完稅、交屋');
         this.iBuyHouse.finish()
    }

}

const litterEngineer: IBuyHouse = new LittleEngineer()
const estateAgent: IBuyHouse = new EstateAgent(litterEngineer) 

estateAgent.findHouse()
estateAgent.priceTooHight()
estateAgent.defendPrice()
estateAgent.finish()