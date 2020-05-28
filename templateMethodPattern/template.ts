abstract class BossMethod {

    private bossThink(): string {
        return '我覺得這個產品應該這樣'
    }

    private bossRedo(): string {
        return '你們這個跟我想的不一樣，請重做'
    }

    abstract UI_Desing(): string

    abstract systemAnalysis(): string

    abstract systemDesing(): string

    abstract programming(): string

    abstract test(): string

    completeSoftware(): void {
        console.log(this.bossThink() + this.UI_Desing() + '\n' +this.bossThink() + this.systemAnalysis() + '\n' +
                    this.bossThink() + this.systemDesing() + '\n' + this.bossThink() + this.programming() + '\n' +
                    this.bossThink() + this.test())
    }

    redoSoftware(): void {
        console.log(this.bossRedo());
        this.completeSoftware()
    }

}

class SoftwareManager extends BossMethod {

    UI_Desing(): string {
        console.log('找UI Design 做')
        return 'UI 成果'
    }

    systemAnalysis(): string {
        console.log('找軟體分析師做')
        return '軟體分析成果'
    }

    systemDesing(): string {
        console.log('找系統設計師做')
        return '系統設計成果'
    }

    programming(): string {
        console.log('找軟體工程師做')
        return '程式結果'
    }

    test(): string {
        console.log('找測試工程師做')
        return '測試成果'
    }

}

const softwareManager: SoftwareManager = new SoftwareManager()
softwareManager.completeSoftware()
softwareManager.redoSoftware()