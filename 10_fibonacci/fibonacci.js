const fibonacci = function(str) {
    const n = parseInt(str);
  
    if (isNaN(n) || n < 0) {
      return "OOPS";
    }
    
    if (n <= 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

// Do not edit below this line
module.exports = fibonacci;
