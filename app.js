/*Class Exercise
//Count down from 10 to 1.
console.log("Class Exercise 1");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
//Output odd numbers from 1 to 10.
console.log("Class Exercise 2");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
//Output even numbers from 1 to 10.
console.log("Class Exercise 3");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//Output multiples of 3, starting at 6 and ending at 60.
console.log("Class Exercise 4");
for (let i = 6; i <= 60; i = i + 3) {
  console.log(i);
}
//Output an increasing number of # symbols, from 1 to 7, as shown below.
console.log("Class Exercise 5");
for (let i = 1; i <= 7; i++) {
  switch (i) {
    case 1:
      console.log("#");
      break;
    case 2:
      console.log("##");
      break;
    case 3:
      console.log("###");
      break;
    case 4:
      console.log("####");
      break;
    case 5:
      console.log("#####");
      break;
    case 6:
      console.log("######");
      break;
    case 7:
      console.log("#######");
      break;

    default:
      break;
  }
}

//Now, write a for loop that iterates from 1 to 20. The loop should identify even, odd and primed numbers.
console.log("Class Exercise 6");
let ifPrime = true;
for (let i = 1; i <= 20; i++) {
  for (let y = 2; y <= i - 1; y++) {
    if (i % y == 0) {
      ifPrime = false;
    }
  }
  if (i >= 2) {
    if (i % 2 == 0) {
      console.log(
        "The Number " + i + " is even " + (ifPrime ? "and a Prime Number " : "")
      );
    } else {
      console.log(
        "The Number " + i + " is odd " + (ifPrime ? "and a Prime Number " : "")
      );
    }
  } else {
    console.log("The Number " + i + " is odd ");
  }
  ifPrime = true;
}
*/

//ALAB 308.3.1: Practical Loops
//Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
  let fizz = false;
  let buzz = false;
  if (i % 3 === 0) {
    fizz = true;
    console.log(i + " : Fizz");
  }
  if (i % 5 === 0) {
    buzz = true;
    console.log(i + " : Buzz");
  }
  if (fizz && buzz) {
    console.log(i + " : Fizz Buzz");
  }
  if (!(fizz || buzz)) {
    console.log(i);
  }
}
//Part 2: Prime Time
