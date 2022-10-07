import React from 'react';
import {NavLink, Link} from 'react-router-dom'
 function Header({isDarkMode,onToggleDarkMode}) {
  
const handleToggleDarkModeClick=(e)=>{
  onToggleDarkMode();

  }
  return (
    <header>
    <h1 className='branding'>
       <Link to ="/">
         Home
         </Link>
        </h1>
        <nav>
      <div className='navigation'>

        <NavLink className='button' to ="/books">
          All Books
        </NavLink>
        {/* <NavLink className='button' to ="/newbook">
          Add Books
        </NavLink> */}


        <button onClick={handleToggleDarkModeClick}>{isDarkMode? "Light Mode":"Dark Mode"}</button>
        </div>
        </nav>
    </header>
   
  )
}

export default Header