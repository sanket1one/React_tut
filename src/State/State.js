import React from 'react'
import StateBody from './StateBody'
import StateHeader from './StateHeader'

function State() {
  const [user,setUser] = React.useState("Sanket")
  return (
    <main>
        <StateHeader user={user} />
        <StateBody user={user}/>
    </main>
  )
}

export default State
