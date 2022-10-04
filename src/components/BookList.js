import React from 'react'
import Books from "../Books"
import BookListItem from './BookListItem'
function BookList() {

   const renderedBooks=Books.map(BookObj => {
    return <BookListItem Book={BookObj}/>
   })
  return (
    <section>
    <h1>All Books</h1>
<ul className="cards">
    {renderedBooks}
</ul>
    </section>

  )
}

export default BookList