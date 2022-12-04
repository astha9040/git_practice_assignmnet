//check a number is prime or not.........

function checkprime(num){
    for(let i=0; i<=num; i++){
        if(num%i==0){
           return true;
        }
        else{
           return false;
    }
}
checkprime(13);

//check palindrome...........

function palindrome(str){
   let bag=""
   for(let i=str.length-1;i>=0;i--){
       bag+=str[i]
   }
      return bag;
}
let rev=reverse('naman')
if(str==rev){
   console.log('palindrome')
}
else{
  console.log('NA')
}
}