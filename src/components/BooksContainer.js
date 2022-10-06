import React, { useState, useEffect } from 'react'
import BookForm from './BookForm'
import BookList from './BookList'

function BooksContainer() {

    const[Books,setBooks]=useState([]);
    const [selectedCategory, setSelectedCategory]=useState("")
    const [searchQuery, setSearchQuery]=useState("");
  
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
    <>
       <BookForm onAddBook={onAddBook}/>
       

        <BookList 
        Books={Books}
        onDeleteBook={onDeleteBook}
        setSelectedCategory={setSelectedCategory}
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
        />
    </>
  )
}

export default BooksContainer