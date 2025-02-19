import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [items, setUtems] = useState([
        {
            id:1,
            checked : true,
            item : "Play cricket"
        },
        {
            id:1,
            checked : true,
            item : "Play Fifa"

        },
        {
            id:1,
            checked : true,
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



  return (
  
    <main>
        <p> Krishanth {currName} the money </p> 
        <button onClick={changeNames}>Press here</button>
        <button onClick={decreementFunction}>-</button>
        <span>{count}</span>
        <button onClick={increementFunction}>+</button>

        <ul>
        {items.map((item) => (
            <li>
                <input type='checkbox' checked = {item.checked} />
            <label>{item.item}</label>
            <button>Delete</button>
            </li>
        ))}        
    </ul>
    </main>
  )
}

export default Content