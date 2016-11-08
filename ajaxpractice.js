function squared (num, callback) {
  setTimeout(function() {
    callback (num * num);
  }, 2000);
}

// squared(5, function(square) {
//   console.log("The square is",square);
// });

function squareRoot (num, callback) {
  setTimeout(function() {
    callback (Math.sqrt(num));
  }, 2000);
}

// squareRoot(25, function(num) {
//   console.log("The answer is", num);
// });

function times2 (num, callback) {
  callback (num * 2);
}

function result (num) {
  squared(num, function(square) {
    times2(square, function(final) {
      console.log("The answer is", final);
    });
  });
}

result(5);

// function sum (a, b, callback) {
//   callback (b + b);
// }

function answerMachine(x, y, callback) {
  squared(x, function(one) {
    squared(y, function(two) {
      squareRoot((one + two), function(final) {
        console.log("The answer is", final);
      });
    });
  });
}



answerMachine(3, 4);
