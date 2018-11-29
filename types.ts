let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// One way to declare arrays
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

// Another way to declare arrays
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = "Hello".slice(0, 3);
myNum = 5 + 5;
myBool = true;
myVar = true;

strArr = ["Hello", "World"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ["Hi", 5];

console.log(strNumTuple);
