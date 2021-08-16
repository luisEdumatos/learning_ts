//Interface Generica para variaveis
interface Identity<T, U> { 
    value: T; 
    message: U; 
}

let returnNumber: Identity<number, string> = { 
    value: 25, 
    message: 'Hello!'
}

let returnString: Identity<string, number> = { 
    value: 'Hello!', 
    message: 25
}

//Interface Generica para funcao
interface ProcessIdentity<T, U> { 
    (value: T, message: U): T; 
}

function processIdentity<T, U> (value: T, message: U): T {
    return value; 
}

let processor: ProcessIdentity<number, string> = processIdentity; 
let returnNumber1 = processor(100, 'Hello!'); 
//let returnString1 = processor('Hello!', 100);  -> Type check error

//interface Generica para classe
interface ProIdentity<T, U> { 
    value: T; 
    message: U;
    process(): T; 
}

class proIdentity<X, Y> implements ProIdentity<X, Y> {
    value: X; 
    message: Y; 
    constructor(val: X, msg: Y) {
        this.value = val; 
        this.message = msg; 
    }
    process(): X { 
        return this.value; 
    }
}

let proc = new proIdentity<number, string>(100, 'Hello!');

//Classe Generica sem interface
class proId<T, U> { 
    private _value: T; 
    private _message: U; 
    constructor(v: T, m: U) { 
        this._value = v; 
        this._message = m; 
    }
    getIdentity(): T {
        return this._value;
    }
}
let pro = new proId<number, string>(100, 'Hello!'); 

