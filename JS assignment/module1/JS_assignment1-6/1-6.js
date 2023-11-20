'user strict'

const question = confirm("Should I calculate the square root?");
if(question === true){
    let user = prompt("Enter a number:");
      if (user<0){
          answer = "The square root of a negative number is not defined!";
      }else {
          answer = `The square root of ${user} is ${Math.sqrt(user)}!`;
      }
}else {
    answer = "The square root is not calculated!";
}
document.querySelector('#root').innerHTML = answer;



