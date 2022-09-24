var names = require('./namesfile.js'); 

var sortedNames = names.sort();


function getAlphabeticalValue(string) {
  return string.split('').reduce(function (memo, letter) {
    memo += letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    return memo;
  }, 0);
}


var totalNameScore = sortedNames.reduce(function sumNameScore(memo, name, index) {
  memo += getAlphabeticalValue(name) * (index + 1);
  return memo;
}, 0);

console.log('The answer is ' + totalNameScore); 