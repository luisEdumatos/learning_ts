import { Car } from "./Car";

export class EletricCar extends Car { 
    private _range: number; 
 
    constructor(make: string, color: string, range: number, doors: 4 | 2) { 
        super(make, color, doors); 
        this._range = range; 
    }

    get range() { 
        return this._range; 
    }

    set range(range: number) { 
        this._range = range; 
    }

    public charge() { 
        console.log(this.worker() + " is charging.");
    }

    //Overrides
    public brake(): string { 
        return `${this.worker()} is braking with the regenerative braking system.`
    }
}