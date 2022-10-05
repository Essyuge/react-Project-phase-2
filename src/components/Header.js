import React from 'react';

 function Header({isDarkMode,onToggleDarkMode}) {
  
const handleToggleDarkModeClick=(e)=>{
  onToggleDarkMode();

  }
  return (
    <header>
    <h1>
         OPEN LIBRARY
        </h1>
        <nav>

        <button onClick={handleToggleDarkModeClick}>{isDarkMode? "Light Mode":"Dark Mode"}</button>
        </nav>
    </header>
   
  )
}

export default Header