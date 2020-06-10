class BrowserContext {
    private text: string
    private browserText: string
    
    getText(): string {
        return this.text
    }

    setText(text: string): void {
        this.text = text
    }
}

abstract class AbstractExpression {
    abstract interpret(context: BrowserContext): void
}

class TerminalExpression extends AbstractExpression {
    interpret(context: BrowserContext): void {
        console.log('終端的解釋器');
    }
}

class NonterminalExpression extends AbstractExpression {
    interpret(context: BrowserContext): void {
        console.log('非終端的解釋器')
    }
}

const context: BrowserContext = new BrowserContext()

const nonterminal: NonterminalExpression = new NonterminalExpression()
const terminal: TerminalExpression = new TerminalExpression()

terminal.interpret(context)
nonterminal.interpret(context)