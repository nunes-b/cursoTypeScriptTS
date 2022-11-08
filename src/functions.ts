//  --------

interface MathFunc {
    (x: number, y: number): number;
    
}

const sum: MathFunc = (x: number, y: number): Number => {
return x +  y;
};

const sub: MathFunc = (x: number, y: number) =>{
    return x-y;
};

const value = sum(2, 3);



//void
const log = (message: string) =>{
    console.log(message)

}



