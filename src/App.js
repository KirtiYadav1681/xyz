import React,{useState} from 'react'
import AddBook from './components/AddBook';
import ShowBooks from './components/ShowBooks';

const App = () => {
    const [book,setBook] = useState([]);

    const handleSubmit = (title,author,page) => {
        const titleMatch = book?.filter((b) => b.title === title);
        console.log(titleMatch);
        if(titleMatch.length>0){
            titleMatch[0].page = Number(titleMatch[0].page) + Number(page);
            const books = book?.filter((b) => b.title !== title);
            setBook([titleMatch[0],...books]);
        } else{
            const newBook = {
                title,author,page
            };
            setBook([newBook, ...book]);
        }
    }
    

  return (
    <div>
        <h1>Ops Tree</h1>
        <AddBook handleSubmit={handleSubmit}/>
        <ShowBooks book={book}/>
    </div>
  )
}

export default App