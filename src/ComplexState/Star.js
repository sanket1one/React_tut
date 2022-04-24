//passing the state function to the children function 
// is a way to edit the data


import React from 'react'

function Star(props) {
console.log(props)
  const starIcon = props.isFilled? "star-filled.png": "star-empty.png"
  return (
    <>
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    </>
  )
}

export default Star
