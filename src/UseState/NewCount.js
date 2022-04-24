import React from 'react'

function NewCount(props) {
    console.log("New Count component rendered")
  return (
      //combining both state and Props method
    <div className='counter--count'>
        <h1>{props.number}</h1>
    </div>

  )
}

export default NewCount