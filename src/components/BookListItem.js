import React from 'react'

function BookListItem({Book, onDeleteBook}) {
  const{id,image, title,summary, author,price ,category}=Book  
   
  
  const handleDeleteClick= ()=>{
    fetch(`http://localhost:3000/Books/${id}`,{
    method:"DELETE"
   })
   onDeleteBook(id)
  }
  return (
    <li>
        <a href="/Books/1">
            <figure className='image'>
                <img src ={image}
                alt="Vrienden voor het leven"/>
     
            </figure>
            </a>
      <section className="details">
     <h3 style={{color:"MediumSeaGreen"}}>{title}</h3>
     <p>
     {summary} 
     </p>
     <p style={{color:"MediumSeaGreen"}}>Author: {author}</p>
     <p>Price {price}</p>
     
      </section>
      <footer className='extra'>
        <span className='badge blue'>
           {category}
        </span>
        <button onClick={handleDeleteClick}>
           Delete
           
          </button>
      </footer>

    </li>
  )
}

export default BookListItem;