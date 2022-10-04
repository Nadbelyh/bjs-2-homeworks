// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = arr.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  min = arr[0];
  max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  }
  return Math.abs(max - min);
}
