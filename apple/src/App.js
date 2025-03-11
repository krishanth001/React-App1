import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { useState } from 'react';

function App() {

  const [items, setUtems] = useState([
    {
        id:1,
        checked : true,
        item : "Play cricket"
    },
    {
        id:2,
        checked : false,
        item : "Play Fifa"

    },
    {
        id:3,
        checked : false,
        item : "Play Baseball"
    }
]);

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

const handleChange = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked : !item.checked} : item)
    setUtems(listItems);
    localStorage.setItem("toDOhandler", JSON.stringify(listItems))
} 

const handleDelete = (id) => {
    const remElements = items.filter((item) =>
         item.id!==id) 
    setUtems(remElements)
    localStorage.setItem("toDOhandler", JSON.stringify(remElements))
}

  return (
    <div className='App'>
         <Header title = "Krishanth" />
         <Content 
         items = {items}
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
