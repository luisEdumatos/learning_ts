"use strict";
let employee = {
    firstName: 'Luis',
    lastName: 'Eduardo',
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
//employee.firstName = 'Luis Edu';  -> Gera erro de compilação devido a palavra readonly
console.log(employee.fullName());
let gerente = {
    firstName: 'Luis Eduardo',
    lastName: ' de Matos',
    tipo: 'Gerente',
    fullName() {
        return this.firstName + this.lastName + " é um " + this.tipo;
    }
};
console.log(gerente.fullName());
