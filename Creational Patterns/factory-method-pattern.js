class Person {
  constructor(fname, lname, age, job) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.job = job;
  }
}

class PersonFactory {
  createPerson(type) {
    switch (type) {
      case "developer":
        return new Person("Mohamed", "Ahmad", 30, "Developer");
      case "teacher":
        return new Person("Alaa El-Din", "Ahmad", 29, "Teacher");
    }
  }
}

const personFactory = new PersonFactory();

const developer = personFactory.createPerson("developer");

const teacher = personFactory.createPerson("teacher");

console.log(developer);

console.log(teacher);
