import React, { useEffect } from 'react'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import { useState } from 'react'

function App() {

  const[Books,setBooks]=useState([]);
  const[isDarkMode, setIsDarkMode]=useState(true);



  const onToggleDarkMode =()=>
    // console.log("I was clicked")
    setIsDarkMode(isDarkMode=>!isDarkMode)

const onAddBook =(newBook)=>{
   setBooks(Books => [...Books,
    newBook])

  }
   useEffect(()=>{
    fetch("http://localhost:3000/Books")
    .then((res)=>res.json())
    .then((Books)=>setBooks(Books))
  })
  return (
   <div className= {isDarkMode? "App":"App light"}>
     
        <Header isDarkMode={isDarkMode} onToggleDarkMode=
        {onToggleDarkMode}/>
        <BookForm onAddBook={onAddBook}/>
        {/* <button onClick={loadBooks}>Click Me to Load</button> */}

        <BookList Books={Books}/>
        
       
   </div>
      
       
       
  );
  }

export default App;
