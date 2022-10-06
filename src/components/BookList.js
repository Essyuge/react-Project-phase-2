import {useState} from 'react'
import Books from "../Books"
import BookListItem from './BookListItem'
function BookList() {
const [searchQuery, setSearchQuery]=useState("");

const handleSearch = (e)=>{
   setSearchQuery(e.target.value);
  }
const searchResults=Books.filter(Book => {
  // return true if books should be included and false if not
  return Book.title.toLowerCase().includes(searchQuery.toLowerCase())||
         Book.author.toLowerCase().includes(searchQuery.toLowerCase())
//  console.log(searchResults)
})
   const renderedBooks=searchResults.map(Book => {
    return <BookListItem key={Books.id} Book={Book}/>
   })
   console.log("render")
  return (
    <section>
    <h2>Books</h2>
    <div className='filter'>
<button>Non-Fiction</button>
<button>Comic</button>
<button>Thriller</button>
<button>Romance</button>
<button>Fiction</button>
<button>Textbook</button>
</div>

<input type="text" placeholder="Search..." 
onChange={handleSearch}
 value={searchQuery}/>

<ul className="cards">{renderedBooks}</ul>
    </section>

  )
}

export default BookList;