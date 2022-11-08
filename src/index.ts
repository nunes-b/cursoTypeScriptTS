// tipos básicos
let age: number = 5;
const firstname: string = 'Rômulo';
const isValid: boolean = true;
let idk: any = 5;

idk = '12'
idk = true

// em listas

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ['Rômulo', 'Gabriela']

// Tupla

const person: [number, string] = [23, 'Rômulo']

// Lista de Tuplas

const people: [number, string][]=[
    [1, 'Jane'],
    [2, 'Doe'],
];

// Intersections 
const productId: string | number | boolean = '1'

// Enum

enum Direction { 
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
    Right = 'Direita'
}

const direction = Direction.Up

// Type Assertions - tratando variaveis de um tipo diferente

const productName: any = 'Boné'

//let itemId = productName as string;
let itemId = <string>productName

