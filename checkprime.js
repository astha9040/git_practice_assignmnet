function checkprime(num){
  for(let i=0;i<=num;i++){
    if(num%i==0){
      return true;
    }else{
      return false;
    }

  }

}
checkprime(13);