export type CalculatorSectionType = 'option' | 'number'

export type OptionOrNumberCalculatorSection<T extends OptionCalculatorSection | NumberCalculatorSection> = T extends OptionCalculatorSection
    ? OptionCalculatorSection
    : NumberCalculatorSection;

export type OptionOrNumberCalculatorSubsection<T extends OptionCalculatorSubsection | NumberCalculatorSubsection> = T extends OptionCalculatorSubsection
  ? OptionCalculatorSubsection
  : NumberCalculatorSubsection;


interface ICalculatorSectionParams {
    index: number;
    title: string;
    required?: boolean;
    info?: string;
    help: string
}

class CalculatorSection {
    public type?: CalculatorSectionType

    public index: number;

    public title: string;

    public required = false;

    public info?: string;

    constructor(
        {index, title, required=false, info}: ICalculatorSectionParams,
    ) {
        this.info = info;
        this.required = required;
        this.title = title;
        this.index = index;
    }
}

interface IOptionCalculatorSectionParams {
    index: number
    title: string
    required?: boolean
    info?: string
    help?: string
}

export class OptionCalculatorSection extends CalculatorSection {

    private _subSections: OptionCalculatorSubsection[] = []

    _value?: OptionCalculatorSubsection

    public type: CalculatorSectionType = 'option'

    public index: number;

    public title: string;

    public required = false;

    public info?: string;

    public help: string;

    constructor({index, title, required=false, info, help}: IOptionCalculatorSectionParams,
    ) {
        super({index : index, title : title, required : required, info : info, help: help})
        this.info = info;
        this.required = required;
        this.title = title;
        this.index = index;
        this.help = help;
    }

    public set value(value: OptionCalculatorSubsection) {
        this._value = value
        this._onValueChange.forEach(callback => callback(this))
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

    addOnChangeListener( callback: (thisInstance: OptionCalculatorSection) => void ) {
        this._onValueChange.push(callback)
    }

    private _onValueChange: ((thisInstance: OptionCalculatorSection) => void)[] = []

}

interface INumberCalculatorSectionParams {
    index: number;
    title: string;
    required?: boolean;
    info?: string;
    help: string;
}

export class NumberCalculatorSection extends CalculatorSection {
    private _subSections: NumberCalculatorSubsection[] = []

    public type: CalculatorSectionType = 'number'

    public index: number;

    public title: string;

    public required = false;

    public info?: string;

    public help: string;

    constructor({index, title, required=false, info, help}: INumberCalculatorSectionParams,
    ) {
        super({index : index, title : title, required : required, info : info, help: help});
        this.info = info;
        this.required = required;
        this.title = title;
        this.index = index;
        this.help = help;
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

    public conseilValue: string | null = 'coucou'

    private _multiplier?: {
        value: number
        text: string
        status: 'info' | 'reg'
        unit?: 'CHF' | 'mois' | 'heures'
        isActiveIfValueGreaterThan:number
        isEditable: boolean
    }

    protected parent?: NumberCalculatorSection

    constructor(
        public text?: string,
        public value = 0,
        public unit?: 'CHF' | 'mois' | 'heures' | 'jours',
        public min = 0,
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

    public setAMultiplier({
                              value,
                              text = '',
                              isEditable = false,
                              status = 'reg',
                              unit,
                              isActiveIfValueGreaterThan = 0
                          }: {value: number | ConditionalValueFromSubsectionOption, isEditable?: boolean, text?: string, status?: "info" | "reg", unit?: "CHF" | "mois" | "heures", isActiveIfValueGreaterThan?: number }): this {
        this._multiplier = {
            text,
            value: typeof value === 'number' ? value : value.defaultValue,
            status,
            unit,
            isEditable,
            isActiveIfValueGreaterThan,
        }
        if(typeof value !== 'number') {
            value.onChange = () => {
                console.log('change from NumberCalculatorSubsection')

                this._multiplier = {
                    text,
                    value: value.calculateValueOnChange(),
                    status,
                    unit,
                    isActiveIfValueGreaterThan,
                    isEditable,
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

        return this._multiplier ? this._multiplier.value * (this.value - this._multiplier.isActiveIfValueGreaterThan) : this.value
    }

    onValueMultiplierChange = () => {}
}


export class OptionCalculatorSubsection {

    private _parent?: OptionCalculatorSection

    public uniqueID: string;  //todo: generate e real uid in backend
    public titre: string;
    public subtitle?: string;
    private readonly _subsectionOptionChangeListener?: ConditionalValueFromSubsectionOption;
    private _result = 0;

    constructor(params: {
        numberValue?: number,
        subsectionOptionChangeListener?: ConditionalValueFromSubsectionOption,
        subtitle?: string,
        titre: string,
        uniqueID: string,
        subForm?: SubForm
    }) {
        if(params.numberValue) this._result     = params.numberValue
        this._subsectionOptionChangeListener    = params.subsectionOptionChangeListener
        this.subtitle                           = params.subtitle
        this.titre                              = params.titre
        this.uniqueID                           = params.uniqueID

        this._initSubsectionOptionChangeListener()
    }

    private _initSubsectionOptionChangeListener() {
        if(!this._subsectionOptionChangeListener) return
        this._result = this._subsectionOptionChangeListener.defaultValue
        this._subsectionOptionChangeListener.onChange = () => {

            console.log('change from OptionCalculatorSubsection')

            if(!this._subsectionOptionChangeListener) return
            this._result = this._subsectionOptionChangeListener.calculateValueOnChange()
            this.onResultChange()
        }
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

    /**
     * use only for see the value
     */
    public get resultInfo() {
        return this._result
    }

    /**
     * use to calculate de value
     */
    public get result(): number {
        if( this.isActive ) return this._result
        return 0
    }

    public onResultChange = () => {}

}

export class ConditionalValueFromSubsectionOption {

    constructor(
        private _arrayOfSubsectionOptionToCheck: OptionCalculatorSection[],
        public calculateValueOnChange: ()=> number,
        public defaultValue = 0,
    ) {
        _arrayOfSubsectionOptionToCheck.forEach(subsectionOptionToCheck => {
            subsectionOptionToCheck.addOnChangeListener(() => {
                console.log('change from ConditionalValueFromSubsectionOption')
                this.onChange()
            })
        })
        return this
    }

    // get value(): number {
    //
    //     console.log( this._arrayOfSubsectionOptionToCheck._value?.uniqueID )
    //
    //     for(const key in this._conditionKeyValue) {
    //         const value = this._conditionKeyValue[key]
    //         if(key === this._arrayOfSubsectionOptionToCheck._value?.uniqueID) return  value
    //     }
    //     return NaN
    // }

    onChange() {}
}


interface ConstructorParams {
    percentValueOf__AVS: ISubFormPercentCalculation
    percentValueOf__LPP: ISubFormPercentCalculation
    percentValueOf__LAA: ISubFormPercentCalculation
    percentValueOf__AMPG: ISubFormPercentCalculation
    percentValueOf__impot_a_la_source: ISubFormPercentCalculation
}

export class SubForm {
    constructor({
                    percentValueOf__AVS,
                    percentValueOf__LPP,
                    percentValueOf__LAA,
                    percentValueOf__AMPG,
                    percentValueOf__impot_a_la_source
                }: ConstructorParams,) {

    }
}

// AVSPercent:             6,438 %			    8,870 %
// LPP					    7 % 				8 %
// LAA					    1,12 %				0,8 %
// AMPG					1,04 %				1,04 %
// Impôt à la source		0 %				    –

export interface ISubFormPercentCalculation {
    bossPercent: number,
    workerPercent: number,
}

// export class SubFormLine {
//     constructor(name: string, public employeePercent: number, public employerPercent: number) {
//         if(employeePercent < 0 || employeePercent > 100) new Error('employeePercent must be percent value 0 < value < 100')
//         if(employerPercent < 0 || employerPercent > 100) new Error('employerPercent must be percent value 0 < value < 100')
//     }
// }
