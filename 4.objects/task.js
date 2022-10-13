function Student(name, gender, age) {
  {
    name, gender, age;
  }
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }

  for (let mark of marks) {
    this.marks.push(mark);
  }
};

Student.prototype.getAverage = function () {
  return  this.marks.reduce(function(sum, elem) {
    return sum + elem;
  }, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
