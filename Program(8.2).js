


function isPrimeNumber(x) {
  if (x <= 1) return false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

/*This function uses a loop to check whether the number is 
divisible by any integer from 2 to x - 1. If it is divisible 
by any of these numbers it returns false indicating that 
the number is not prime. Otherwise it returns true indicating
 that the number is prime.*/

/*To find the next prime number after a given number x, */


function nextPrimeNumber(x) {
  while (true) {
    x++;
    if (isPrimeNumber(x)) return x;
  }
}
/*
This function uses a loop to continuously increment 
the number x by 1 and check whether it is prime
 using the isPrime function defined above. When 
it finds a prime number it returns it.
*/

/*
To find the difference between the 
next prime number after x and x we
 can simply subtract x from the result of the nextPrime function.*/


let x = 5;
let difference = nextPrimeNumber(x) - x;
console.log(difference);//2

/*This will output the difference between the
 next prime number after x and x. 
 In this case, the next prime number after x is 7, so the difference would be 2.*/