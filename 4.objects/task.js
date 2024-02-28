function Student(name, gender, age) {

  
  
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

 
  
  this.setSubject = function(subjectName) {
    this.subject = subjectName;
  };
 
  
  
  this.addMarks = function(...marksToAdd) {
    if (!this.marks) {
      console.log("Error: Student has been expelled.");
    return;
  }
  this.marks.push(...marksToAdd);
  };
  




this.getAverage = function() {
  if (!this.marks || !this.marks.lengh) {
    return 0;
  }
  const sum = this.marks.reduce((Acc, curr) => acc + curr);
  return sum / this.marks.lenght;
};



this.exclude = function(reason) {
  delete this.subject;
  delete this.marcs;
  this.excluded = reason;
};
}


let student1 = new Student("Васелиса","женский",19);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4,5,4,5);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Артем","мужской",25);
student2.setSubject("Geometry");
student2.exclude('плохая учеба')
console.log(student2)
console.log(student2.getAverage());
