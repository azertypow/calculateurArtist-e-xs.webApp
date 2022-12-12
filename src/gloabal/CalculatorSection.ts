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
    private _subSections: NumberCalculatorSubsection[] = []

    private _value: number = 0

    constructor(public index: number,
                public title?: string,
                public required = false,
                public info?: string,
                ) {
        super(index, title, info, required);
    }

    public addSubSection(subsection: NumberCalculatorSubsection): this {
        this._subSections.push(subsection)
        return this
    }

    get subSections(): NumberCalculatorSubsection[] {
        return this._subSections;
    }

    get value(): number {
        return this._value
    }
}

export class NumberCalculatorSubsection {

    private _multiplierValue?: number
    private _multiplierText = ''

    private _result = 0

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
        this._multiplierValue = value
        this._multiplierText = text
        return this
    }

    public get status() {
        if(this.value === void(0)) return 'empty'
        if(this.validateValueCheck(this.value)) return 'validate'
        if (this.value) return 'in progress'
        return 'error'
    }

    public get result(): number {
        return this._multiplierValue ? this._multiplierValue * this._result : this._result
    }
}
