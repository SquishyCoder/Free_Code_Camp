// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

// As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

function sumFibs(num) {
    var fibonacci = [];

    while (true) {
        var length = fibonacci.length;
        var last = length - 1;
        var before = length - 2;

        if (length === 0) {
            fibonacci.push(1);
        } else if (length > 0) {
            if (length === 1 && num > 1) {
                fibonacci.push(1);
            } else {
                var n = fibonacci[last] + fibonacci[before];

                if (n <= num) {
                    fibonacci.push(n);
                } else {
                    break;
                }
            }
        }
    }

    var odd = fibonacci.filter(function(val) {
        if (val % 2 > 0) {
            return val;
        }
    });

    var sum = odd.reduce(function(a, b) {
        return a + b;
    }, 0);

    return sum;

}

sumFibs(4); // should return 5
sumFibs(1); // should return a number
sumFibs(1000); // should return 1785
sumFibs(4000000); // should return 4613732
sumFibs(75024); // should return 60696
sumFibs(75025); // should return 135721
