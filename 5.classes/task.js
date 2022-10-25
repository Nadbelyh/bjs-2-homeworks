class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    this._state = newState;
    if (newState < 0) {
      this._state = 0;
    }
    if (newState > 100) {
      this._state = 100;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const book = this.books.find((b) => b[type] === value);
    if (book === undefined) {
      return null;
    }
    return book;
  }

  giveBookByName(bookName) {
    const book = this.books.find((b) => b.name === bookName);
    const index = this.books.findIndex((b) => b.name === bookName);
    if (index == -1) {
      return null;
    } else {
      this.books.splice(index, 1);
      return book;
    }
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }

  addMark(mark, subject) {
    if (!(1 <= mark && mark <= 5)) {
      return "ошибка";
    }
    const findSubject = this.marks.find((s) => s.name === subject);
    if (findSubject == undefined) {
      const newSubject = new Subject(subject);
      newSubject.marks.push(mark);
      this.marks.push(newSubject);
    } else {
      findSubject.marks.push(mark);
    }
  }

  getAverageBySubject(subject) {
    const findSubject = this.marks.find((s) => s.name === subject);
    if (findSubject == undefined) {
      return "ошибка";
    }
    return (
      findSubject.marks.reduce(function (sum, elem) {
        return sum + elem;
      }, 0) / findSubject.marks.length
    );
  }

  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum = sum + this.getAverageBySubject(this.marks[i].name);
    }
    return sum / this.marks.length;
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}

class Subject {
  constructor(name) {
    this.marks = [];
    this.name = name;
  }
}
