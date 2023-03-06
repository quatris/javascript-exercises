const sumAll = function(num1, num2) {
let sum = 0;
min = Math.min(num1, num2);
max = Math.max(num1, num2);

if (num1 < 0 || num2 < 0 || Number(num1) !== num1 || Number(num2) !== num2) {
    return "ERROR"
 } else {
for (let i = min; i <= max; i++) {
    sum += i;
}
return sum;
}
}


// Do not edit below this line
module.exports = sumAll;
