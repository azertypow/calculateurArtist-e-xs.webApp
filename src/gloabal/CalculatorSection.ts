export class CalculatorSection{
    constructor(
        public index: number,
        public title?: string,
        public info?: string,
        public required = false,
    ) {
    }
}

export class NumberCalculatorSection extends CalculatorSection{
    #subSections: NumberCalculatorSubsection[] = []

    #value: number = 0

    constructor(public index: number,
                public title?: string,
                public info?: string,
                public required = false,
                ) {
        super(index, title, info, required);
    }

     public addSubSection(subsection: NumberCalculatorSubsection) {
         this.#subSections.push( subsection )
     }
    get subSections(): NumberCalculatorSubsection[] {
        return this.#subSections;
    }

     get value() {
        return this.#value
     }
}

export class NumberCalculatorSubsection {
    constructor() {

    }
}
