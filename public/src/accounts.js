function findAccountById(accounts, id) {
  return accounts.find((accounts)=> accounts.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acctA, acctB)=>
  acctA.name.last.toLowerCase() > acctB.name.last.toLowerCase() ? 1: -1)
}

function getTotalNumberOfBorrows(accounts, books) {
  let bookTot = 0
  let reader = accounts.id
  books.forEach(book => 
    book.borrows.forEach(borrow => reader === borrow.id && bookTot ++))
  return bookTot
}

function getBooksPossessedByAccount(account, books, authors) {
 let outBooks = []
  //find books checked out by acct
books.forEach(book => {
  if (book.borrows.find(borrow=> borrow.id === account.id && borrow.returned === false)){
    outBooks.push(book)
  }
})
  //find author id in outBooks arr
  outBooks.forEach(book => {
    let scribe = authors.find(author =>
       author.id === book.authorId)//find author from id 
    book.author = scribe //combine author and book arrays
  })
return outBooks
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
