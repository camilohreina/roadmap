# TypeScript

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

//etc (ya los veremos)
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
