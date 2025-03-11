import React from 'react'

import { FaTrashAlt } from "react-icons/fa";


const Content = ({
    items, currName, count, changeNames, increementFunction, decreementFunction, handleChange, handleDelete
}) => {

  

  return (
  
    <main>
        <p> Krishanth {currName} the money </p> 
        <button onClick={changeNames}>Press here</button>
        <button onClick={decreementFunction}>-</button>
        <span>{count}</span>
        <button onClick={increementFunction}>+</button>
        {(items.length) ? (
        <ul>
        {items.map((item) => (
            <li className='item' key={item.id} > 
                <input type='checkbox' 
                onChange={() => handleChange(item.id)}
                checked = {item.checked} />
            <label 
            style = {(item.checked) ? {textDecoration : 'line-through'}: null}
            onDoubleClick={() => handleChange(item.id)}>{item.item}</label>
            <FaTrashAlt
               role = "button"
               tabIndex="0"
               onClick={() => handleDelete(item.id)}
               />
            </li>
        ))}        
    </ul>
        ) : (
            <p style={ {marginTop : '2rem'} }>  Your list is empty </p>
        )
    }
    </main>
  )
}

export default Content