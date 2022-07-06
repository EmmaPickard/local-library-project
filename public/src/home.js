function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const bookOut = books.filter(book => book.borrows[0].returned === false)
  return bookOut.length
}

function _sortAndSlice(arr) {
  let result = arr.sort((inputA, inputB) =>
  inputB.count - inputA.count).slice(0, 5)
  return result
}

function getMostCommonGenres(books) {
  let genres = [] //create a genres array
books.forEach(book => {
  const match = genres.find(genre =>
    genre.name === book.genre) //for each book in the `books` array, find the book `genre` that matches the `name` key in `genres` array
    if (match) { //if the book `genre` matches an existing genre `name` in the `genres` array...
      match.count++ //increment the matching `count` value by 1.
    } else {
      const name = book.genre
      genres.push({name, count: 1})
    }//if there is no matching genre `name`, push a new object into the `genres` array containing the new `name` and `count` of 1 info
})
genres = _sortAndSlice(genres) //helper function
return genres}
  



function getMostPopularBooks(books) { 
  let titleAndCount = [];
  books.forEach((book) => {
    const popularBooksArray = { name: book.title, count: book.borrows.length }
    titleAndCount.push(popularBooksArray) //pushes objects with titles and amount of borrows into the `titleAndCount` array
  })
  titleAndCount = _sortAndSlice(titleAndCount) //helper function
  return titleAndCount}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = books.map((book) => {
  const author = authors.find((author) => author.id === book.authorId)
  return {
    name: `${author.name.first} ${author.name.last}`,
    count: book.borrows.length
  }
})
popularAuthors = _sortAndSlice(popularAuthors) // helper function
return popularAuthors}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
