const normalPerson = {
    firstName: 'alom',
    lastName: "karim",
    salary: 950000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeSalary: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// console.log(normalPerson);
normalPerson.chargeSalary(150);
console.log(normalPerson.salary);