import React from 'react'

function StateHeader(props) {
  return (
    <header>
        <p>Current user: {props.user}</p>
    </header>
  )
}

export default StateHeader
