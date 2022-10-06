import React, { useState} from 'react'
import Header from './components/Header'
import BooksContainer from './components/BooksContainer'
import Home from './components/Home';
function App() {

  const[isDarkMode, setIsDarkMode]=useState(true);

  const onToggleDarkMode =()=>
    // console.log("I was clicked")
    setIsDarkMode(isDarkMode=>!isDarkMode)


  return (
   <div className= {isDarkMode? "App":"App light"}>
     
        <Header isDarkMode={isDarkMode} onToggleDarkMode=
        {onToggleDarkMode}/>
       <Home/>
       <BooksContainer/>

       
   </div>
      
       
       
  );
  }

export default App;
