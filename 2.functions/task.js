function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  const avg = +(sum / arr.length).toFixed(2)



  return { min: min, max: max, avg: +avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  const evenArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }

  if (evenArr.length === 0) return 0;

  const sumEvenArr = summElementsWorker(...evenArr);
  const avgEvenArr = +(sumEvenArr / evenArr.length).toFixed(2);

  return avgEvenArr;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if ( result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
console.log(getArrayParams(-99,99,10))
console.log(summElementsWorker(-99,99,10))


