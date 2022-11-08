const returnValue = <T>(value: T) => value

const message = returnValue<string>("Hello Word")

const count = returnValue(5)


function getFirstValueFromArray<Type>(array: Type[]){
    return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);


// Promises
const returnPromise = async (): Promise<number> =>{
    return 5;
};

// classes 
class GenericNumber<T>{
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T){
        this.zeroValue= zeroValue;
        this.sum = sum;
    }
}
