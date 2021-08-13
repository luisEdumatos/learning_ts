export class Client { 
    private static _id: number = 0; 
    private _name: string; 
    private _cnpj: string; 
    private _address: string; 

    constructor(name: string, cnpj: string, address: string) { 
        this._name = name; 
        this._cnpj = cnpj; 
        this._address = address; 
        Client._id++; 
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