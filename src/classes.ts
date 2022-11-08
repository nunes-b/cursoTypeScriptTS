interface Iperson {
    id: number;
    sayMyName(): string;

}

class Person implements Iperson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName(): string{
        return this.name
    }
}

class Employee extends Person{
    constructor(  id: number, name: string, age: number){
        super(id, name, age);
    }
    whoAmI(){
        return this.name
    }
}

const romulo = new Person( 1, "Rômulo", 23)
romulo.name;



// shortcurt 

class PersonRefact{
      constructor(  
        readonly id: number,
        protected name: string,
        private age: number
    ){}
}