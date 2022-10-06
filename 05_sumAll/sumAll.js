const sumAll = function(num1, num2) {
    let sum = 0;
    let smallerNum = Math.min(num1, num2);
    let largerNum = Math.max(num1, num2);

    if (num1 < 0 || num2 < 0 || typeof num1 === 'string' || typeof num2 === 'string' || typeof num1 === 'object' || typeof num2 === 'object') {
        return("ERROR");
    }

    for (let i = smallerNum; i <= largerNum; i++) {
        sum = sum + i;
    }
    return sum;
};
sumAll();
console.log(sumAll(1,123));

// Do not edit below this line
module.exports = sumAll;
