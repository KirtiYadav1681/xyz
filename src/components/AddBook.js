import React,{useState} from 'react'

const AddBook = ({handleSubmit}) => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [page,setPage] = useState(0);

    const addBook = () =>{
        handleSubmit( title,author, page);
        setTitle("");
        setAuthor("");
        setPage(0);
    }
  return (
    <div>
        <div>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type='author' name='author' onChange={(e) => setAuthor(e.target.value)} value={author}/>
            <input type='number' name='page' onChange={(e) => setPage(e.target.value)} value={page}/>
            <button onClick={() => addBook()}>Add</button>
        </div>
    </div>
  )
}

export default AddBook