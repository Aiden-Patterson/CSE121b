let currentDateAndTime = Date();

console.log("It is now " + currentDateAndTime);

let theTotal = total(5, 10, 15, 20, 25, 30);

console.log("The total is " + theTotal);

function total(...theNumbers) {
  let sum = 0;
  for (let aNumber in theNumbers) {
    sum += aNumber; //Want to know why aNumber is multiplied by 1? Remove it and find out. :)
  }
  return sum;
}
