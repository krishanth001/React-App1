import React from 'react'
import ItemsList from './itemsList'


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
            <ItemsList 
            items = {items}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
            />
        ) : (
            <p style={ {marginTop : '2rem'} }>  Your list is empty </p>
        )
    }
    </main>
  )
}

export default Content