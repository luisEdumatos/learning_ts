"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(name, cnpj, address) {
        this._workstations = [];
        this._name = name;
        this._cnpj = cnpj;
        this._address = address;
        Client._id++;
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
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get cnpj() {
        return this._cnpj;
    }
    set cnpj(cnpj) {
        this._cnpj = cnpj;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
}
exports.Client = Client;
Client._id = 0;
