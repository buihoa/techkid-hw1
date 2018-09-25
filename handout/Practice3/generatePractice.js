'use strict'
function sort(input) {
  for(var i = 1; i < input.length; i++) {
    var temp = input[i];
    var j = i -1;

    while(j >= 0 && input[j] > temp) {
      input[j+1] = input[j];
      j = j-1;
    }
    input[j+1] = temp;
  } 
  return input;
}

function search(input, target) {
  let result = -1;
  if(input.length == 0) {
    return -1;
  }

  for(var i = 0; i < input.length; i++) {
    if(input[i] == target) {
      result = i;
      break;
    }
    if(input[i] > target) {
      break;
    }
  }
  
  return result;
}

function generate(testLengthArray){
  var result = []

  for(var i = 0; i < testLengthArray.length; i++) {
    var input = []
    var count = testLengthArray[i];

    while(count > 0) {
      var randomIn = Math.floor(Math.random() * 20000) - 10000;
      if(search(input, randomIn) == -1) {
        input.push(randomIn);
       count--;
      }
    }

    input = sort(input);

    let randomTarget = 0;
    if(testLengthArray.length > 3) {
      if(i == 0) {
        randomTarget = input[0];
      }
      else if(i == 1) {
        randomTarget = input[testLengthArray[i] -1];
      }
      else if(i == 2) {
        randomTarget = input[2];
      }
      else if(i == 3){
        var temp = Math.floor(Math.random() * 20000) - 10000;
        while(search(input, temp) != -1) {
          temp = Math.floor(Math.random() * 20000) - 10000;
        }
        randomTarget = temp;
      }
      else {
        randomTarget = Math.floor(Math.random() * 20000) - 10000;
      }
    }
    else {
      randomTarget = Math.floor(Math.random() * 20000) - 10000;
    }
    
    var output = search(input, randomTarget);

    var forPush = {"input": input, "target": randomTarget, "output": output};
    result.push(forPush);
  }

  return result;
}

module.exports = generate
