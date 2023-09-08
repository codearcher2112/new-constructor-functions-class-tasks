class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(anotherPerson) {
        if (this.age > anotherPerson.age) {
            return `${anotherPerson.name} is younger than me.`;
        } else if (this.age < anotherPerson.age) {
            return `${anotherPerson.name} is older then me.`;
        } else {
            return `${anotherPerson.name} is the same age as me.`
        }
    }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);
