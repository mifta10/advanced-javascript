const bonus = 20;

function sum(first,second){
  const result = first + second + bonus;
  if(result > 9){
    const mood = "happy";
    console.log(mood);
  }
  //console.log(mood);---error
  return result;
}

const output = sum(3,7);
console.log(output);