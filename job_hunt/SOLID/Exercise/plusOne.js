/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let reminder = 1;
    for (let i=digits.length-1; i>=0; i--) {
        if(digits[i]+reminder>9){
            digits[i] = 0;
        }
        else{
            digits[i]= digits[i]+reminder;
            reminder=0;
        }
        if (reminder == 0){
            break
        }
       
    }
    if (reminder==1){
        digits.splice(0,0,1);
    }
    return digits;
};


var plusOnev2 = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};




console.log(plusOne([9,9,9]));
console.log(plusOne([5,0]));
console.log(plusOne([5,5]));
console.log(plusOne([0]));