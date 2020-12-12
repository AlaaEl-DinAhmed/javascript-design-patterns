class Person {
  constructor(fname, lname, age, job) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.job = job;
  }
}

const personMixin = {
  getFullInfo() {
    return `My name is ${this.fname} ${this.lname}.`;
  },
};

Object.assign(Person.prototype, personMixin);

const personOne = new Person("Mohamed", "Ahmad", 30, "Developer");

console.log(personOne.getFullInfo());
