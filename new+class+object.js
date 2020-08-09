class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const friendlyPerson = new Person("bill","gets",1000000000);
console.log(friendlyPerson);
const heroPerson = new Person("hero","balam",9500000);
console.log(heroPerson);
