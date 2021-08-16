class Car {
    make: string = 'Generic Car'; 
    doors: number = 4; 
}
class ElectricCar extends Car { 
    make = 'Electric Car';
    doors: number = 4; 
}
class Truck extends Car { 
    make = 'Truck'; 
    doors = 2; 
}

function accelerate<T extends Car> (car: T): T { 
    return car; 
}
let carEletric = new ElectricCar; 
accelerate<ElectricCar>(carEletric); 
let carTruck = new Truck; 
accelerate<Truck>(carTruck); 