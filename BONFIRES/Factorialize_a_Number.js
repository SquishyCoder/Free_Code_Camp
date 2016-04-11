//Bonfire: Factorialize a Number -- Return the factorial of the provided integer. If the integer is represented with the letter 'n', a factorial is the product of all positive integers less than or equal to 'n'. i.e. 5! = 1*2*3*4*5 = 120
//factorialize() should return a number.

function factorialize(num) {
    var n = 1;
       for(var i = 1; i <= num; i++) {
       n *= i; // n = n * i: continues to update the value of "n" as it cycles through the loop
    } return n;
}
factorialize(5); //factorialize(5) should return 120.
factorialize(10); //factorialize(10) should return 3628800.
factorialize(20); //factorialize(10) should return 3628800.
factorialize(0); //factorialize(0) should return 1.
