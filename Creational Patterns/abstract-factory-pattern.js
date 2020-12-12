class Teacher {
  constructor(fname, lname, age, job, grade) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.job = job;
    this.grade = grade;
  }
}
class ArabicTeacher extends Teacher {
  constructor(fname, lname, age, job, grade) {
    super(fname, lname, age, job, grade);
  }
}

class ArabicTeacherFactory {
  createArabicTeacherFactory(type) {
    switch (type) {
      case "grade one":
        return new ArabicTeacher(
          "Mohamed",
          "Ahmad",
          30,
          "Math teacher",
          "Grade one"
        );
      case "grade two":
        return new ArabicTeacher(
          "Alaa El-Din",
          "Ahmad",
          29,
          "Arabic teacher",
          "Grade two"
        );
    }
  }
}

class MathTeacher extends Teacher {
  constructor(fname, lname, age, job, grade) {
    super(fname, lname, age, job, grade);
  }
}

class MathTeacherFactory {
  createMathTeacherFactory(type) {
    switch (type) {
      case "grade one":
        return new MathTeacher(
          "Mohamed",
          "Ahmad",
          30,
          "Math teacher",
          "Grade one"
        );
      case "grade four":
        return new PeMathTeacherrson(
          "Alaa El-Din",
          "Ahmad",
          29,
          "Arabic teacher",
          "Grade two"
        );
    }
  }
}

const arabicTeacherFactory = new ArabicTeacherFactory();
const mathTeacherFactory = new MathTeacherFactory();

const teacherMainFactory = (type, grade) => {
  switch (type) {
    case "arabic":
      return arabicTeacherFactory.createArabicTeacherFactory(grade);
    case "math":
      return mathTeacherFactory.createMathTeacherFactory(grade);
  }
};

const arabicTeacher = teacherMainFactory("arabic", "grade two");

const mathTeacher = teacherMainFactory("math", "grade one");

console.log(arabicTeacher);
console.log(mathTeacher);
