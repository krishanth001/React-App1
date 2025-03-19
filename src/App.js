import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { use, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDOhandler')));

const [newItem, setNewItem] = useState('')

const [Search, newSearch] = useState('')

const [currName , setName] = useState("made")

function changeNames(){
const names = ["earn", "grow", "loose", "withdraw"]
const int = Math.floor(Math.random() * 4);
setName(names[int]);
}


const [count, setCount] = useState(99);

function increementFunction() {
    setCount(count + 1)
}

function decreementFunction() {
    setCount(count - 1)
}

const addItem = (item) => {
    const id = items.length ? items[items.length-1] + 1 : 1;
    const addNewItem = {id, checked : false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("toDOhandler", JSON.stringify(listItems))
 
}

const handleChange = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked : !item.checked} : item)
    setItems(listItems);
    localStorage.setItem("toDOhandler", JSON.stringify(listItems))
} 

const handleDelete = (id) => {
    const remElements = items.filter((item) =>
         item.id!==id) 
    setItems(remElements)
    localStorage.setItem("toDOhandler", JSON.stringify(remElements))
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    // console.log(newItem)
    addItem(newItem)
    setNewItem('')
}

  return (
    <div className='App'>
         <Header title = "Krishanth" />
         <AddItem
           newItem = {newItem}
           setNewItem = {setNewItem}
           handleSubmit = {handleSubmit}
          />
          <SearchItem Search = {Search}
          newSearch = {newSearch}
          />
         <Content 
         items = {items.filter((item) => (item.item).toLowerCase().includes(Search.toLowerCase()))}
         currName = {currName}
         count = {count}
         changeNames = {changeNames}
         increementFunction = {increementFunction}
         decreementFunction = {decreementFunction}
         handleChange = {handleChange}
         handleDelete = {handleDelete}/>
         <Footer length = {items.length} />
    </div>
    
  );
}

export default App;
