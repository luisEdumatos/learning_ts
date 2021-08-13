interface Employee2 { 
    readonly firstName: string; //A palavra readonly indica que a propriedade so pode ser alterada uma vez
    lastName: string; 
    age?: number; //O ? indica que a propriedade não é obrigatoria
    fullName(): string; 
}

let employee: Employee2 = { 
    firstName: 'Luis',
    lastName: 'Eduardo', 
    fullName(): string { 
        return this.firstName + " " + this.lastName; 
    }
}; 
//employee.firstName = 'Luis Edu';  -> Gera erro de compilação devido a palavra readonly
console.log(employee.fullName());

//Extender interface existente
interface Manager2 extends Employee2 { 
    tipo: 'Gerente' | 'Supervisor';
    codigo?: 123456;
}

let gerente: Manager2 = { 
    firstName: 'Luis Eduardo',
    lastName: ' de Matos',
    tipo: 'Gerente', 
    fullName(): string { 
        return this.firstName + this.lastName + " é um " + this.tipo; 
    }
}

console.log(gerente.fullName());