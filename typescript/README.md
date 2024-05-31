- Lenguaje de programación de código abierto desarrollado por Microsoft para extender JS
- Tipado estáticamente
- Permite colocar tipos de datos a las variables, funciones y otros elementos del codigo
- Creado para desarrollar aplicaciones en Js de forma robusta y solida
- Minimiza los errores

## Instalaciones

- Navegador
- Editor de codigo (VSCode)
- Node
- Typescript https://www.typescriptlang.org/

## Modo Observador

- Para compilar y verificar constantemente los cambios de un archivo JS

```bash
tsc <filename.ts> -w
```

- Inicializar un proyecto con TS

```bash
tsc -init
```

- Este observando todo el proyecto de TS, primeramente debe hacerse el init

```bash
tsc -w
```

## Tipos de datos

### Primitivos

- String
- Number
- Boolean
- Undefined
- Null

### Compuestos estructurados

- Object
- Array
- Enum
- Function

### Definidos por usuario

- Class
- Interface
- Type

## Sintaxis

- Arrays

```ts
// ARRAYS

// Arreglo de números:
const numeros: number[] = [1, 2, 3, 4, 5];

// Arreglo de cadenas de texto:
const nombres: string[] = ['Juan', 'María', 'Pedro'];

// Arreglo de booleanos:
const valoresBool: boolean[] = [true, false, true];

// Arreglo vacio
const arregloVacio: number[] = [];

// Arreglo con union de tipos
const arrayUnion: (string | boolean)[] = ['apple', true, 'orange', false];
```

- Enum

```ts
// ENUM

// Definición de un enum para días de la semana
enum DiasSemana {
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo,
}

//   Enum con valores de cadena (String Enums):
enum Colores {
  Rojo = 'rojo',
  Verde = 'verde',
  Azul = 'azul',
}
```

- Objects

```ts
let car: { brand: string; year: number } = { brand: 'Toyota', year: 2020 };
car.brand = 'Ford';
//car.color = 'red';
```

- Functions

```ts
// FUNCIONES

// Declaración de función con tipado explícito:
function sumar(a: number, b: number): number {
  return a + b;
}

// Funciones flecha con retorno implícito (inferido por TypeScript):
const dividir = (a: number, b: number) => a / b;

// Funciones con parámetros opcionales:
function saludar(nombre: string, edad?: number): string {
  if (edad !== undefined) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
  } else {
    return `Hola, mi nombre es ${nombre}.`;
  }
}

// Funciones con parámetros por defecto:
function saludar2(nombre: string, edad: number = 30): string {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}

//Funciones con parametros de multiples tipos
function processInput(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

//Funciones de objetos como parametros de entrada y salida
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 === 0,
  };
}
//alternative like payload
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
```

- Alias

```ts
export type User {id: number, name: string, isActive: boolean}
type StringOrNumber: string | number

// Use Case 1 with array
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

//Use Case 2 - Unin types
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

//Use Case 3 - Computed props
const propName = 'name';
type Person = {
  id: number;
  [propName]: string;
};
let alicea: Person = { id: 1, [propName]: 'Alice' };
```

- Interfaces

```ts
// INTERFACES

// Interface básica:
interface Persona {
  nombre: string;
  edad: number;
}

// Interface con propiedades opcionales:
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

// Interface para funciones:
interface Comparador {
  (a: number, b: number): boolean;
}

// Interface para clases (class interfaces):
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}
//merging, extend and typeguard
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person {
  age: number;
}

// Usage
const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

// Interface multiple inheritance
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};
```

<aside>
💡 Evitar siempre usar el any

</aside>

- Classes

```ts
class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
}
```

- Clases con genéricos (se pueden setear desde afuera)

```ts
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
```

- Strings con valores predefinidos

```ts
let requestStatus: 'success' | 'error' = 'success';
```

### Type vs. Interface

- Se pueden usar los dos y el resultado es el mismo
- Las interfaces son más dinamicas y se pueden abrir y cerrar en cualquier momento, se pueden agregar nuevas propiedades más abajo
- Las interfaces pueden ser implementadas en clases, mientras que los types no
- Las propiedades computadas solo estan disponibles en types, no en interfaces
