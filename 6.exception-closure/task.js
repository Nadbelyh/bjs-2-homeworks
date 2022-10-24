function parseCount(value) {
  let result = Number.parseInt(value);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  } else {
    return result;
  }
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    let p = this.a + this.b + this.c;
    return p;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let object = {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },

      getArea() {
        return "Ошибка! Треугольник не существует";
      },
    };

    return object;
  }
}
