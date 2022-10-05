import React from 'react'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import { useState } from 'react'

function App() {

  const[isDarkMode, setIsDarkMode]=useState(true);



  const onToggleDarkMode =()=>{
    // console.log("I was clicked")
    setIsDarkMode(isDarkMode=>!isDarkMode)
  }
  return (
   <div className= {isDarkMode? "App":"App light"}>
     
        <Header isDarkMode={isDarkMode} onToggleDarkMode=
        {onToggleDarkMode}/>
        <BookForm/>
        <BookList/>
        
       
   </div>
      
       
       
  );
  }

export default App;
