// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4

function return4(){
  return 4;
}

// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments

function mult(a, b){
  return a*b;
}

// 3 - Write a function expression
// that takes one argument and
// console logs that value.

var value = function(num){
  console.log(num);
}

// 4 - Write a function that calls the
// function from #2 above. The first argument
// should be provided by calling the
// function from #1 and the second argument
// by passing in a number of your choice.
// This new function should console log the
// results of calling function #2.

function call(a, b){
  var answer = mult(a, b);
  console.log(answer);
}
