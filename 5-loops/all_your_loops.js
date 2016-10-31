// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for(var i=0; i<5; i++){
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var j = 0;
while (j<3){
  checkz -= 2;
  j++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

/* This for loop will run through the numbers array and add the value of each
index to the variable total. This will basically add together all the numbers
in the array. */
