import React from 'react'

const SearchItem = ({Search, newSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault }>
        <label htmlFor= "search">Search</label>
        <input 
        id='search'
        type='class'
        role='searchBox'
        value={Search}
        onChange={(e) => {newSearch(e.target.value)}}
        placeholder='Search Items'
        />
    </form>
  )
}

export default SearchItem