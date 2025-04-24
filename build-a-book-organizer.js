const books = [
  { title: 'Mathematics Class 10', authorName: 'NCERT', releaseYear: 2006 },
  { title: 'Science Class 9', authorName: 'NCERT', releaseYear: 2005 },
  { title: 'Social Science Class 12', authorName: 'NCERT', releaseYear: 2013 },
  { title: 'English Class 11', authorName: 'NCERT', releaseYear: 2011 },
  { title: 'History Class 8', authorName: 'NCERT', releaseYear: 2008 }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 2010);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
