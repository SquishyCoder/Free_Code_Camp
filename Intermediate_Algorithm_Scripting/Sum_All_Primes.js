// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

// The provided number may not be a prime.

function sumPrimes(num) {
  var primes = [2];

  primeLoop:
  for(p = 3; p <= num; p++) {
    for (i = 2; i < p; i++) {
      var mod = p % i;

      if (mod === 0) {
        continue primeLoop;
      } else if (mod !== 0 && i === (p-1)) {
        primes.push(p);
      }
    }
  }

  var sum = primes.reduce(function(a, b) {
    return a + b;
  }, 0);

  return sum;
}

sumPrimes(10); // should return 17
sumPrimes(977); // should return 73156
