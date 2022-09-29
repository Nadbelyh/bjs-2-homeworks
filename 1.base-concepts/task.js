function solveEquation(a, b, c) {
  "use strict";
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d == 0) {
    let x1 = -b / (2 * a);
    arr.push(x1);
  }

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;
  if (isNaN(parseInt(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(parseInt(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(parseInt(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  let loanBody = amount - contribution;
  let term = getMonth(date);
  let p = percent / 100 / 12;
  let monthlyFee = loanBody * (p + p / (Math.pow(1 + p, term) - 1));
  let sum = monthlyFee * term;
  totalAmount = Number(sum.toFixed(2));
  return totalAmount;
}

function getMonth(date) {
  let dateNow = new Date(Date.now());
  let stopDate = new Date(date);

  var year1 = stopDate.getFullYear();
  var year2 = dateNow.getFullYear();

  var month1 = stopDate.getMonth();
  var month2 = dateNow.getMonth();
  return (year1 - year2) * 12 + (month1 - month2);
}
