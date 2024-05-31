class Sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }
  public gambling() {
    return `Para el sorteo ${this.nombre} el ticket ganador es: ${this.ticket}`;
  }
}

const sorteo = new Sorteo<number>('Loteria');
sorteo.setTicket(1234);
console.log(sorteo.gambling());

let requestStatus: 'success' | 'error' = 'success';
requestStatus = 'error';

let car: { brand: string; year: number } = { brand: 'Toyota', year: 2020 };
car.brand = 'Ford';
//car.color = 'red';

function processInput(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 === 0,
  };
}
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome ${student.name} with id: ${student.id}`);
}
const newStudent = {
  id: 1,
  name: 'Juan',
  email: 'juan@gg.com',
};

createStudent(newStudent); // si se lo come
createStudent({ id: 2, name: 'Pedro', email: 'tod@gg.com' }); // no se lo come

type Theme = 'dark' | 'light';
type User = {
  name: string;
  theme: Theme;
};

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  console.log(staff.name);
  if ('department' in staff) {
    console.log(staff.department);
  }
  if ('employees' in staff) {
    console.log(staff.employees);
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Engineering' };
const bob: Employee = { id: 2, name: 'Bob', department: 'Engineering' };

const steve: Manager = { id: 2, name: 'Steve', employees: [alice, bob] };
//

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = { id: 1, name: 'Book1', price: 10 };
const book2: Book = { id: 2, name: 'Book2', price: 20 };
const discountedBook: DiscountedBook = {
  id: 3,
  name: 'Book3',
  price: 30,
  discount: 0.15,
};

const propName = 'name';
type Person = {
  id: number;
  [propName]: string;
};
let alicea: Person = { id: 1, [propName]: 'Alice' };

interface BookInterface {
  readonly id: number; //cannot edit this prop
  name: string;
  price: number;
  genre?: string;
  printName(): void;
  printPrice(message: string): string;
}

const deepWork: BookInterface = {
  id: 1,
  name: 'Deep Work',
  price: 20,
  genre: 'Self-help',
  printName() {
    console.log(this.name);
  },
  printPrice(message: string) {
    return `${message} ${this.price}`;
  },
};
