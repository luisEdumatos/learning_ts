import { Client } from './Client';
export class Workstation { 
    private static _id: number = 0;
    private _client: Client;  
    private _deviceTag: string; 

    constructor(client: Client, deviceTag: string) { 
        this._client = client; 
        this._deviceTag = deviceTag; 
    }

    
}