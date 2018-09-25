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

module.exports = sort
