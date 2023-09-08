class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(someFood) {
        if (this.stomach.length < 10) {
            this.stomach.push(someFood);
        }
    }

    poop() {
        this.stomach = [];
    }

    toString() {
        return `${this.name}, ${this.age}`
    }
}

const person1 = new Person('Mary', 50);
person1.eat('Burger');
person1.eat('Sharwma');
person1.stomach;
person1.toString();
