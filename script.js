class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
  
  class Manager extends Employee{
    constructor(name, salary, hireDate, descriptionOfJob) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(this.name + "is paid " + this.salary + ", and was hired on" + this.hireDate + ' ' + this.descriptionOfJob);
    }
  }
  let adam = new Manager("Adam ", 85000, " March 10th", "because he manages the entire store.");
  adam.jobDescription();

  class Designer extends Employee{
    constructor(name, salary, hireDate, experience) {
      super(name, salary, hireDate);
      this.experience = experience;
    }
    yearsExperience() {
        console.log(this.name + "makes " + this.salary + " , was hired on" + this.hireDate + ' ' + this.experience);
    }
  }
  let blake = new Designer("Blake ", 70000, " May 22nd", ", and has designed art for 10 years.");
  blake.yearsExperience();

  class SalesAssociate extends Employee{
    constructor(name, salary, hireDate, degrees) {
      super(name, salary, hireDate);
      this.degrees = degrees;
    }
    degreeCompleted(){
        console.log(this.name + " makes " + this.salary + " , was hired on" + this.hireDate + ", and" + this.degrees);
    }
  }
  let karl = new SalesAssociate("Karl ", 83000, " August 19th", " got his buisness degree at the University of Georgia.");
  karl.degreeCompleted();

 