class Person {
  constructor(fname, lname, age, job) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.job = job;
  }
}

class Teacher extends Person {
  constructor(fname, lname, age, job, id) {
    super(fname, lname, age);
    this.job = job;
    this.id = id;
  }
}

const teacher = new Teacher("Ahmed", "Mohamed", "Math Teachr", 25, 1);

console.log(teacher);
