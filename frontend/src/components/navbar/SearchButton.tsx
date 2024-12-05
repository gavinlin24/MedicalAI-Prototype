import React, { useState } from 'react'
import search from '../../assets/images/search.png'

const SearchButton = ({onClick}:{onClick: () => void}) => {
  return (
    <div>
        <img src={search} alt="" className="toggle-icon" onClick={onClick}/>
    </div>
  )
}

export default SearchButton