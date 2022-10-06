import React,{useState} from 'react'

const initialState ={

  title:"",
  author:"",
  summary:"",
  price:"",
  image:"",
  category:""
  }


function BookForm({onAddBook}) {
 const [formData, setFormData]=useState(initialState);

const handleOnChange =(e) => {
const { name,value}=e.target;
setFormData(formData=>{
  return {
...formData, 
[name]:value

  }
  
})

}
const handleSubmit=(e)=>{
  e.preventDefault();
  onAddBook(formData);
  setFormData(initialState)
}


  return (
    <div>
      <form onSubmit={handleSubmit} className='form' autoComplete='off'>
      <h3>Add New Book</h3>
      <label htmlFor="tilte">Title</label>
       <input 
       type="text"
        id="title" 
        name="title"
        onChange={handleOnChange}
        value={formData.title}
        />

      <label htmlFor="author">Author</label>
       <input 
       type="text" 
       id="author" 
       name="author"
       onChange={handleOnChange}
       value={formData.author}
       />
       
       <lable htmlFor='image'>Image</lable>
        <input 
        type="text" 
        id="image" 
        name="image"
        onChange={handleOnChange}
        value={formData.image}
        />

      <label htmlFor="summary">Summary</label>
       <textarea 
       id="summary" 
       name="summary"
       onChange={handleOnChange}
       value={formData.summary}
       ></textarea>
      
       <label htmlFor="price">Price</label>
       <input 
       type="text" 
       id="price" 
       name="price"
       onChange={handleOnChange}
       value={formData.price}
       
       />

       <label htmlFor="category">Category</label>
       <select 
       name="category" 
       id="category"
       onChange={handleOnChange}
       value={formData.category}
       >

       <option>Select </option>
       <option value="1">Non Fiction</option>
       <option value="1">Comic</option>
       <option value="1">Thriller</option>
       <option value="1">Romance</option>
       <option value="1">Fiction</option>
       <option value="1">TextBook</option>
       </select>
       

        <button type="submit" >Add Book</button>
      </form>
        

    </div>
  )
}

export default BookForm