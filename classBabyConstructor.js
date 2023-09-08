class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
  
class Baby extends Person {
    constructor(name, age, favoriteToy) {
        super(name, age);
        this.favoriteToy = favoriteToy;
    }

    play() {
        return `Playing with ${this.favoriteToy}`;
    }
}
  
const person = new Person('John', 30);
const baby = new Baby('David', 1, 'Teddy bear');
