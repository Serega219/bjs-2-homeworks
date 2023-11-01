"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b * b - 4 * a * c;
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d) )/(2*a); 
    const x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    const x = -b/(2*a);
    arr.push(x);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number"||
    typeof contribution !== "number"||
    typeof amount !== "number"||
    typeof countMonths !== "number"
  ) {
    return "Ошибка ввода данных";
  }
  if (percent < 0 || percent > 100) {
    return "не правильная процентная ставка";
  }
  const percentPerMonth = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) **countMonths) - 1));
  const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));
  return totalAmount;
}
 
console.log(calculateTotalMortgage(10, 0, 50000, 12));