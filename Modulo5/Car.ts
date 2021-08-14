export class Car implements Vehicle{ 
    private static numberOfCars: number = 0; 
    private _make: string; 
    private _color: string; 
    private _doors: number; 

    constructor(make: string, color: string, doors: 4 | 2) {
        this._make = make; 
        this._color = color;
        this._doors = doors; 
        Car.numberOfCars++; 
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

    protected worker(): string { 
        return this._make;
    }

}