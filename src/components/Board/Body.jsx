
import React from 'react'
import List from './List'
// import Filter from './Filter'

function Body() {
  return (
    <div className='w-full border p-1 bg-blue-gray-500 min-h-screen'>

      <div className='flex flex-wrap gap-1'>
        <List/>

      </div>  
    </div>
  )
}

export default Body