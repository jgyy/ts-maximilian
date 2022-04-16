type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type CombineStrNum = string | number;
type Numeric = number | boolean;
type Universal = CombineStrNum & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
/**
 * @param {CombineStrNum} a
 * @param {CombineStrNum} b
 * @return {CombineStrNum}
 */
function add(a: CombineStrNum, b: CombineStrNum): CombineStrNum {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Max ', 'Schwarz');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'My own company'},
};

console.log(fetchedUserData?.job?.title);
const userInputs = undefined;
const storedData = userInputs ?? 'DEFAULT';
console.log(storedData);

type UnknownEmployee = Employee | Admin
/** @param {UnknownEmployee} emp */
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

/** car class */
class Car {
  /** drive method */
  drive() {
    console.log('Driving...');
  }
}

/** truck class */
class Truck {
  /** drive method */
  drive() {
    console.log('Driving a truck...');
  }

  /** @param {number} amount */
  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

/** @param {Vehicle} vehicle */
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

/** @param {Animal} animal */
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
