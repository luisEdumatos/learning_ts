"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workstation = void 0;
class Workstation {
    constructor(client, deviceTag) {
        this._client = client;
        this._deviceTag = deviceTag;
    }
}
exports.Workstation = Workstation;
Workstation._id = 0;
