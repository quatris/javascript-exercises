const palindromes = function (str) {
 // Convert the string to lowercase and remove non-alphanumeric characters
 str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
 // Compare the string to its reverse
 return str === str.split('').reverse().join('');
};


// Do not edit below this line
module.exports = palindromes;
