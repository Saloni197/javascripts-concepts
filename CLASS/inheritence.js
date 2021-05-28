class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inherit parent class
class Student extends Person {

}

let student1 = new Student('Kavita');
student1.greet();