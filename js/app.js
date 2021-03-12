class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getName() {
        const name = this.firstName + this.lastName;
        return name
    }
    sayHi() {
        const name = this.getName();
        const text = name + ":" + this.age;
        return text;
    }

}
const person = new Person("三", "张", 18);
const fuck = person.sayHi();
// console.log(fuck);
alert(fuck);
