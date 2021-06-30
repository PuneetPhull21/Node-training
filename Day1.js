//let print the table in the
function table(table) {
  for (var i = 0; i <= 10; i++) {
    console.log(table, "*", i, "=", table * i);
  }
}
table(4);

//even odd check the value

function even(number) {
  if (number % 2 == 0) {
    return console.log("this number is even");
  } else {
    return console.log("this number is not even");
  }
}
even(4);
//Sum of the two number
function Sum(number, number2) {
  var Sum = number + number2;
  return console.log(Sum);
}

Sum(4, 8);

//Divide the two number
function Divide(number, number2) {
  if (number2 === 0) {
    return console.log("Not possible");
  } else {
    var result = number / number2;
    return console.log(result);
  }
}
Divide(1, 0);
Divide(4,2);

//Multiplication

function Multiplication(number, number2) {
  var result = number * number2;
  return console.log(result);
}

Multiplication(2, 8);
