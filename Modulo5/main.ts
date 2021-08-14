import { Car } from "./Car";
import { EletricCar } from "./EletricCar";

let myCar1 = new Car('Cool Car Company', 'blue', 4); 
console.log(myCar1); 

let myCarEletric = new EletricCar('Spark Motors', 'silver', 124, 2); 
console.log(myCarEletric); 
myCarEletric.charge(); 
console.log(myCarEletric.brake());