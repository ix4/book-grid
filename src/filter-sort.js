import React, {useState } from 'react';

const FunctionsBox = ({ filterType, setFilterType, filterInput, setFilterInput, sortDirection, setSort }) => {

  return(
    <div className='functions-box'>
      <FilterBox
        filterType={filterType}
        setFilterType={setFilterType}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      />
      <SortBox
        sortDirection={sortDirection}
        setSort={setSort}
      />
    </div>
  )
}

const FilterBox = ({ filterType, setFilterType, filterInput, setFilterInput }) => {

  const handleType = event => {
    setFilterType(event.target.value);
  }

  const handleInput = event => {
    setFilterInput(event.target.value);
  }

  return (
    <div className='filter-box'>
      <p>Filter by
        <select onChange={handleType}>
          <option value='author'>Author</option>
          <option value='title'>Title</option>
          <option value='genre'>Genre</option>
        </select>

        <input
          className='input-box'
          type="text"
          placeholder='Filter query'
          value={filterInput}
          onChange={handleInput}
          autoFocus
        /></p>
    </div>
  )
}

const SortBox = ({ sortDirection, setSort }) => {

  const handleChange = event => {
    setSort(event.target.value);
  }

  return (
    <div className='sort-box'>
      <p>Sort by
        <select onChange={handleChange}>
          <option value='yr-asc'>Year Published - Ascending</option>
          <option value='yr-dsc'>Year Published - Descending</option>
          <option value='rd-asc'>Year Read - Ascending</option>
          <option value='rd-dsc'>Year Read - Descending</option>
          <option value='gr-asc'>Grade - Ascending</option>
          <option value='gr-dsc'>Grade - Descending</option>
        </select>
      </p>
    </div>
  )
}

export default FunctionsBox;
