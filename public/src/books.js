function findAuthorById(authors, id) {
  return authors.find((authors) => authors.id === id)
}

function findBookById(books, id) {
  return books.find((books) => books.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const unAvail = books.filter(book => book.borrows[0].returned === false)
  const avail = books.filter(book => book.borrows[0].returned === true)
  
return [unAvail, avail]
}


function getBorrowersForBook(book, accounts) {
  const { borrows } = book
  const borrowers = borrows.map(({ id, returned })=> { 
    const account = accounts.find(account => 
      account.id === id) 
    return {
      ...account,
      returned,
    }
  }) 

  return borrowers.slice(0, 10); //limits the array to 10 objects or less.
}


 



 
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
