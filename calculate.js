let number1= window.prompt("Enter your first Number")
let operator= window.prompt("Enter your Operator[× ÷ + – %]")
let number2= window.prompt("Enter your second Number")
number1= parseFloat(number1)
number2= parseFloat(number2)

if( isNaN(number1) || isNaN(number2)){
  alert("Testing my code...right😁...conditions taken care of😋")
}

 if (operator !== "+" && operator !== "*" && operator !== "/" && operator !== "-" && operator !== "%"){
  if( isNaN(number1) || isNaN(number2)){
    alert("First of all you did not provide a number🤣")
  }
  alert("We can't calculate this mathematics check your operator")
}



if(operator==="+"){
  if(isNaN(number1 + number2)){
    alert("Regardless of the + operator, either the first number or the second number is not a number 😁😂")
  }
  else{
    alert(`Your answer is ${number1 + number2}`)
  }
}


if(operator==="*"){
  if(isNaN(number1 *  number2)){
    alert("Regardless of the × operator, either the first number or the second number is not a number 😁😂")
  }
  else{
    alert(`Your answer is ${number1 * number2}`)
  }
}

if(operator==="/"){
  if(isNaN(number1 / number2)){
    alert("Regardless of the ÷ operator, either the first number or the second number is not a number 😁😂")
  }
  else{
    alert(`Your answer is ${number1 / number2}`)
  }
}


if(operator==="-"){
  if(isNaN(number1 -  number2)){
    alert("Regardless of the – operator, either the first number or the second number is not a number 😁😂")
  }
  else{
    alert(`Your answer is ${number1 - number2}`)
  }
}


if(operator==="%"){
  if(isNaN(number1 %  number2)){
    alert("Regardless of the % operator, either the first number or the second number is not a number 😁😂")
  }
  else{
    alert(`Your answer is ${number1 % number2}`)
  }
}