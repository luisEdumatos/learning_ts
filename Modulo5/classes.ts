import { Workstation } from './../ModeloStocktti/Workstation';
export class Car { 
    private static numberOfCars: number = 0; 
    private _make: string; 
    private _color: string; 
    private _doors: number; 
    private _workstations: Array<Workstation> = []; 

    constructor(make: string, color: string, doors: 4 | 2) {
        this._make = make; 
        this._color = color;
        this._doors = doors; 
        Car.numberOfCars++; 
    }

    public get workstations(){ 
        return this._workstations; 
    }

    public addWorkstation(station: Workstation) { 
        this._workstations.push(station); 
    }
    
    public removeWorkstation(station: Workstation) { 
        let index = this._workstations.indexOf(station); 
        if (index > -1) { 
            this._workstations.splice(index, 1);
        } else {
            console.log(`Workstation ${station} not exists. `); 
        }
    }

    public get make() { 
        return this._make;
    }

    public set make(make: string) { 
        this._make = make; 
    }

    public get color() { 
        return 'The color of the car is' + this._color;
    }

    public set color(color: string) { 
        this._color = color; 
    }

    public get doors() {
        return this._doors; 
    }

    public static getNumberOfCars(): number { 
        return Car.numberOfCars; 
    }

    public accelerate(speed: number): string { 
        return `${this.worker()} is accelerating to ${speed} MPH`; 
    }

    public brake(): string { 
        return `${this.worker()} is braking with the standard braking system. `;
    }

    public turn(direction: 'left' | 'right'): string { 
        return `${this.worker()} is turning ${direction}`;
    } 

    private worker(): string { 
        return this._make;
    }

}