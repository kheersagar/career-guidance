import React from 'react'
import { Button } from 'react-bootstrap';

//css
import "./Search.css";

function Search() {
  return (
    <div className='search_input_div'>
      <input type='text' placeholder='search..' className='search_input'/>
      <Button variant="primary" size='lg' >search</Button>
    </div>
  )
}

export default Search