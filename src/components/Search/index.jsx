import React from 'react'

function Search({handleSearch, placeholder, customClass}) {
  return (
    <input type="text" className={customClass} placeholder={placeholder} onChange={(e) => handleSearch(e)} />
  )
}

export default Search