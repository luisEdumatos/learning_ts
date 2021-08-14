"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EletricCar = void 0;
const Car_1 = require("./Car");
class EletricCar extends Car_1.Car {
    constructor(make, color, range, doors) {
        super(make, color, doors);
        this._range = range;
    }
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    charge() {
        console.log(this.worker() + " is charging.");
    }
    //Overrides
    brake() {
        return `${this.worker()} is braking with the regenerative braking system.`;
    }
}
exports.EletricCar = EletricCar;
