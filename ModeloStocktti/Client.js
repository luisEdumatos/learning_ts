"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(name, cnpj, address) {
        this._name = name;
        this._cnpj = cnpj;
        this._address = address;
        Client._id++;
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
