let instance = null;
class Person {
  constructor(fname, lname, age, job) {
    if (!instance) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.job = job;
      instance = this;
    } else {
      return instance;
    }
  }
}

const personOne = new Person("Mohamed", "Ahmad", 30, "Developer");
const personTwo = new Person("Ibrahim", "Hassan", 29, "Product manager");

console.log(personTwo);
