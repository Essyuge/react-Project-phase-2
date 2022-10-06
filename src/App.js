import React, { useEffect } from 'react'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import { useState } from 'react'

function App() {

  const[Books,setBooks]=useState([]);
  const[isDarkMode, setIsDarkMode]=useState(true);
const [selectedCategory, setSelectedCategory]=useState("")
const [searchQuery, setSearchQuery]=useState("");

  const onToggleDarkMode =()=>
    // console.log("I was clicked")
    setIsDarkMode(isDarkMode=>!isDarkMode)

const onAddBook =(newBook)=>{
   setBooks(Books => [...Books,
    newBook])

  }
    const onDeleteBook= (deletedBookId)=>{
    setBooks(Books=>Books.filter(Book=>{
      return Book.id !== deletedBookId
    }))
    }


  
   useEffect(()=>{
    
    let url;
    if (selectedCategory && searchQuery){
      url=`http://localhost:3000/Books?category=${selectedCategory}&q=${encodeURI(searchQuery)}`
    }else if(searchQuery){
      url=`http://localhost:3000/Books?q=${encodeURI(searchQuery)}`
    }else if(selectedCategory){
    url=`http://localhost:3000/Books?category=${selectedCategory}`
    } else {
      url="http://localhost:3000/Books"
    }
    fetch(url)
    .then((res)=>res.json())
    .then((Books)=>setBooks(Books))
  },[selectedCategory,searchQuery])

  return (
   <div className= {isDarkMode? "App":"App light"}>
     
        <Header isDarkMode={isDarkMode} onToggleDarkMode=
        {onToggleDarkMode}/>
        <BookForm onAddBook={onAddBook}/>
       

        <BookList 
        Books={Books}
        onDeleteBook={onDeleteBook}
        setSelectedCategory={setSelectedCategory}
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
        />
        
       
   </div>
      
       
       
  );
  }

export default App;
