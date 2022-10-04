import React from 'react'

function BookListItem({Book}) {
    
   
  return (
    <li>
            <figure className='image'>
                <img src ={Book.image}
                alt="Vrienden voor het leven"/>
      <button className="claps">👏0 </button>
            </figure>
            
      <section className="details">
     <h3 style={{color:"MediumSeaGreen"}}>{Book.title}</h3>
     <p>
     {Book.summary} 
     </p>
     <p>{Book.price}</p>
      </section>
      <footer className='extra'>
        <span className='badge blue'>
           {Book.category}
        </span>
      </footer>

    </li>
  )
}

export default BookListItem