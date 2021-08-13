"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(make, color, doors) {
        this._workstations = [];
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++;
    }
    get workstations() {
        return this._workstations;
    }
    addWorkstation(station) {
        this._workstations.push(station);
    }
    removeWorkstation(station) {
        let index = this._workstations.indexOf(station);
        if (index > -1) {
            this._workstations.splice(index, 1);
        }
        else {
            console.log(`Workstation ${station} not exists. `);
        }
    }
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system. `;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    worker() {
        return this._make;
    }
}
exports.Car = Car;
Car.numberOfCars = 0;
