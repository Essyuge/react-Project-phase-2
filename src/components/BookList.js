import React from 'react'
import Books from "../Books"
import BookListItem from './BookListItem'
function BookList() {
    
  return (
    <section>
    <h1>All Books</h1>
<ul className="cards">
    <BookListItem Book={Books[0]}/>
    <BookListItem Book={Books[1]}/>
    <BookListItem Book={Books[2]}/>
    <BookListItem Book={Books[3]}/>
    <BookListItem Book={Books[4]}/>
    <BookListItem Book={Books[4]}/>
    <BookListItem Book={Books[6]}/>
    
</ul>
    </section>

  )
}

export default BookList