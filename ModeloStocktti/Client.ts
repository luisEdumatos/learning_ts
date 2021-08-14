import { Workstation } from "./Workstation";

export class Client { 
    private static _id: number = 0; 
    private _name: string; 
    private _cnpj: string; 
    private _address: string; 
    private _workstations: Array<Workstation> = []; 

    constructor(name: string, cnpj: string, address: string) { 
        this._name = name; 
        this._cnpj = cnpj; 
        this._address = address; 
        Client._id++; 
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

    get name() { 
        return this._name; 
    }

    set name(name: string) { 
        this._name = name; 
    }

    get cnpj() { 
        return this._cnpj; 
    }

    set cnpj(cnpj: string) { 
        this._cnpj = cnpj; 
    }

    get address() { 
        return this._address; 
    }

    set address(address: string) { 
        this._address = address;
    }
}