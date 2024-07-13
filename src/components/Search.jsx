import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Search() {
  return (
    <>
      <div className='container w-100  p-3 mt-2 rounded-4 search' style={{height:'65vh'}}>
        <h1 className='text-center align-items-center justify-content-center p-5 mt-5 text-light'>Find the right <span className='text-success'>freelance</span> <br/> service, right away</h1>
        <div className='d-flex'><input type="text" placeholder='Search for any service' className='form-control w-50 p-3' id='search'/><FontAwesomeIcon icon={faMagnifyingGlass} className='text-light mt-3 border rounded-2 mb-2 icon'/></div>
      </div>
    </>
  )
}

export default Search