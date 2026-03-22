// calculate function 
 const amount = 2000
function calculateTax(amount){
    let tax = (0.1 * amount)
    return tax
}
console.log(`the tax is  ${calculateTax(amount)}`);

// uppercase function 

function convertToUpperCase(text){
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));

// Find maximum

function findMaximum(num1, num2){
    if(num1 > num2){
        return num1;
    } else{
        return num2;
    }
}
const num1 = 45;
const num2 = 72;
console.log(findMaximum(num1, num2));

// palidmore words

function isPalindrome(word){
    const reverse = word.split('').reverse().join('');
    return word === reverse;
}
console.log(isPalindrome("hell0"));

// calaculatediscountprice

function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discount = originalPrice * (discountPercentage/100);
    return originalPrice - discount;
}

console.log(calculateDiscountedPrice(100, 20));

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};