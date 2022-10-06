import React from 'react'
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
   setBooks(Book => [...Books,
    newBook])

  }
  return (
   <div className= {isDarkMode? "App":"App light"}>
     
        <Header isDarkMode={isDarkMode} onToggleDarkMode=
        {onToggleDarkMode}/>
        <BookForm onAddBook={onAddBook}/>

        <BookList/>
        
       
   </div>
      
       
       
  );
  }

export default App;
