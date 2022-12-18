export type CalculatorSectionType = 'option' | 'number'

export type OptionOrNumberCalculatorSection<T extends OptionCalculatorSection | NumberCalculatorSection> = T extends OptionCalculatorSection
    ? OptionCalculatorSection
    : NumberCalculatorSection;

class CalculatorSection {
    public type?: CalculatorSectionType

    constructor(
        public index: number,
        public title: string,
        public required = false,
        public info?: string,
    ) {
    }
}

export class OptionCalculatorSection extends CalculatorSection {

    private _subSections: OptionCalculatorSubsection[] = []

    _value?: OptionCalculatorSubsection

    public type: CalculatorSectionType = 'option'

    constructor(public index: number,
                public title: string,
                public required = false,
                public info?: string,
    ) {
        super(index, title, required, info)
    }

    public set value(value: OptionCalculatorSubsection) {
        this.onValueChange()
        this._value = value
    }

    public addSubSection(...subsectionsToAdd: OptionCalculatorSubsection[]): this {
        subsectionsToAdd.forEach(subsection => this._subSections.push(subsection.setParent(this)))
        return this
    }

    get subSections(): OptionCalculatorSubsection[] {
        return this._subSections
    }

    public get status(): 'empty' | 'validate' | 'error' {
        if(this._value === void(0)) return 'empty'
        return 'validate'
    }

    onValueChange() {}

}

export class NumberCalculatorSection extends CalculatorSection {
    private _subSections: NumberCalculatorSubsection[] = []

    public type: CalculatorSectionType = 'number'

    constructor(public index: number,
                public title: string,
                public required = false,
                public info?: string,
    ) {
        super(index, title, required, info);
    }

    public addSubSection(subsection: NumberCalculatorSubsection): this {
        this._subSections.push(subsection)
        return this
    }

    get subSections(): NumberCalculatorSubsection[] {
        return this._subSections;
    }

    get value(): number {
        return this.subSections.reduce((sumOfPreviousSubsections, currentSubsection) => {
            if (currentSubsection.status !== 'validate') return sumOfPreviousSubsections
            return sumOfPreviousSubsections + currentSubsection.value
        }, 0)
    }

    public get status(): 'empty' | 'validate' | 'error' {
        if(this.value === 0) return 'empty'
        return 'validate'
    }
}

export class NumberCalculatorSubsection {

    private _multiplier?: {
        value: number
        text: string
    }

    protected parent?: NumberCalculatorSection

    constructor(
        public text?: string,
        public value = 0,
        public validateValueCheck: (valueToCheck: number) => { testValue: boolean, msg: string } = () => {
            return {
                testValue: true,
                msg: 'Any test'
            }
        },
    ) {

    }

    public get hasMultiplier(): boolean {
        return this._multiplier !== undefined
    }

    public setAMultiplier(value: number|ConditionalValueFromSubsectionOption, text = ''): this {
        this._multiplier = {
            text,
            value: typeof value === 'number' ? value : value.value,
        }
        if(typeof value !== 'number') {
            value.onChange = () => {
                console.log('change from NumberCalculatorSubsection')
                this._multiplier = {
                    text,
                    value: value.value,
                }
                this.onValueMultiplierChange()
            }
        }
        return this
    }

    get multiplier() {
        return this._multiplier
    }

    public get status(): 'empty' | 'validate' | 'error' {
        if (this.value === 0) return 'empty'
        if (this.validateValueCheck(this.value)) return 'validate'
        return 'error'
    }

    public get result(): number {
        return this._multiplier ? this._multiplier.value * this.value : this.value
    }

    onValueMultiplierChange = () => {}
}


export class OptionCalculatorSubsection {

    private _parent?: OptionCalculatorSection

    constructor(
        public uniqueID: string,
        public titre: string,
        public subtitle?: string
    ) {
    }

    setParent(parent: OptionCalculatorSection) {
        this._parent = parent
        return this
    }

    get parent(): OptionCalculatorSection | undefined {
        return this._parent
    }

    get isActive(): boolean {
        if(this._parent === undefined) return  false
        return this._parent._value?.uniqueID === this.uniqueID
    }

}

export class ConditionalValueFromSubsectionOption {

    constructor(
        private _conditionKeyValue: {[key: string]: number},
        private _subsectionOptionToCheck: OptionCalculatorSection,
    ) {
        _subsectionOptionToCheck.onValueChange = () => {
            console.log('change from ConditionalValueFromSubsectionOption')
            this.onChange()
        }
        return this
    }

    get value(): number {

        console.log( this._subsectionOptionToCheck._value?.uniqueID )

        for(const key in this._conditionKeyValue) {
            const value = this._conditionKeyValue[key]
            if(key === this._subsectionOptionToCheck._value?.uniqueID) return  value
        }
        return NaN
    }

    onChange() {}
}