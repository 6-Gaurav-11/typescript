function add(num1: number, num2: number): number {  //add(a,b): number -> number is return type
                                                    //num2?: number -> optional parameter
    return num1 + num2;
}

var sum: number = add(6,10);
console.log(sum);

//____________________________________________________________________________________________________

function fullName(person: {fname: string, lname: string}) {
    console.log(`${person.fname} ${person.lname}`);
}

let p = {
    fname: "POTUS",
    lname: "of USA"
};

fullName(p);

interface Person {
    fname: string;
    lname?: string;
}

function Name(person: Person) {
    console.log(`${person.fname} ${person.lname}`);
}

Name(p);

//________________________________________________________________________________

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee("Gaurav");
emp1.greet();

class Manager extends Employee {
    constructor(name: string) {
        super(name);
    }

    delegate() {
        console.log("Manager delegating tasks");
    }
}

let m1 = new Manager("Tree");
m1.delegate();
m1.greet();

//___________________________________________________________________

//access specifiers public, private, protected syntax 
//similar to java programming