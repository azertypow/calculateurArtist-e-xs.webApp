class CalculatorSection{
    constructor(
        public index: number,
        public title?: string,
        public info?: string,
        public required = false,
    ) {
    }
}

export class OptionCalculatorSection extends CalculatorSection{
    constructor(public index: number,
                public title?: string,
                public info?: string,
                public required = false,
    ) {
        super(index, title, info, required);
    }
}

export class NumberCalculatorSection extends CalculatorSection{
    #subSections: NumberCalculatorSubsection[] = []

    #value: number = 0

    constructor(public index: number,
                public title?: string,
                public required = false,
                public info?: string,
                ) {
        super(index, title, info, required);
    }

    public addSubSection(subsection: NumberCalculatorSubsection): this {
        this.#subSections.push(subsection)
        return this
    }

    get subSections(): NumberCalculatorSubsection[] {
        return this.#subSections;
    }

    get value(): number {
        return this.#value
    }
}

export class NumberCalculatorSubsection {

    #multiplierValue?: number
    #multiplierText = ''

    #result = 0

    constructor(
        public text?: string,
        public value?: number,
        public validateValueCheck: (valueToCheck: number) => { testValue: boolean, msg: string } = () => {
            return {
                testValue: true,
                msg: 'Any test'
            }
        },
    ) {

    }

    public setAMultiplier(text = '', value?: number): this {
        this.#multiplierValue = value
        this.#multiplierText = text
        return this
    }

    public get status() {
        if(this.value === void(0)) return 'empty'
        if (this.value) return 'in progress'
        if(this.validateValueCheck(this.value)) return 'validate'
        return 'error'
    }

    public get result(): number {
        return this.#multiplierValue ? this.#multiplierValue * this.#result : this.#result
    }
}
