const getTheTitles = function(books) {
    if (!books) {
        return [];
      }
      return books.map(book => book.title);
    };

// Do not edit below this line
module.exports = getTheTitles;
