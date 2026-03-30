let num1 = parseInt(prompt("Enter an integer"));
// let num2 = parseInt(prompt("Enter an integer"));
let og = num1;
let rev = 0;
while(num1 > 0) {
    let lastDigit = num1 % 10;
    rev = (rev * 10) + lastDigit;
    num1 = Math.floor(num1 / 10);
}

if(og == rev) {
    console.log("Palindrome")
} else {
    console.log("Not a palindrome");
}