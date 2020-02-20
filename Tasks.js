function oddNumber(num) {
  let changeNumToString = num.toString().length;
  console.log(changeNumToString);
  let numbersLengthTwo = [];
  for (var i = 0; i < num; i++) {
    if (changeNumToString === 2) {
      numbersLengthTwo.push(i);
      console.log("this is numbers mo " + numbersLengthTwo);
    }
  }
}

oddNumber(55);
