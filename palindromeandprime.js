//check a number is prime or not.........

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}



//check palindrome...........

function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}
