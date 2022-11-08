// Type

type Order = {
    productId: string;
    price: number
}

// Type w/

type User = {
    firstName: string 
    age?: number
    email: string
    password: string
    orders: Order[]
    register(): string

}

const user: User = {
    firstName: ' Jane',
    age: 20,
    email: 'Jane@doe.com.br',
    password: '123456',
    orders: [{productId:'1', price: 200}],
    register(){
        return "a";
    }
}

//
const printLog = (message: string) => {}

printLog(user.password!)

// Unions 

type Author ={
    books: string[]

}

const author: Author & User = {
    age: 2,
    books: ['1'],
    email:'author@gmail.com.br',
    firstName: 'Author',
    orders:[],
    register(){
        return "a";
    }
}


// ex de type func
type Grade = number | string;
const grade: Grade = 1;

// Interfaces

interface UserInterface{
    readonly firstName: string;
    email: string;
    login(): string;
}

const emailUser: UserInterface ={
    email: 'romulo@gmail.com',
    firstName: 'rômulo',
    login(){
        return "a";
    },
} 


