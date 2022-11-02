export{} //to treat the block of code as module instead of script
var message = "Hello World";
console.log(message);

// tsc main --watch  -> watches file changes

let x = 10; //can work without initialization
const y = 20; //has to be initialized

//specify data type for variables
let isBeginner: boolean = true;
let total: number = 5;
let name: string = "Gaurav";

let sentence: string = `My name is ${name}
I am a beginner in typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;  //we can assign null or undefined to any data type (number,string)

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ["solo",202]; //tuple -> fixed value with different types

enum Color {red, green, blue, yellow};
let c: Color = Color.green;
console.log(c);

let multiType: number | boolean; //multiple type declaration
multiType = 50;
multiType = false;