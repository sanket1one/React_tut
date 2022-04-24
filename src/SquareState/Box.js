//derived State

import React from 'react'

function Box(props) {
  const [on,setOn] = React.useState(props.on)

  const styles = {
      backgroundColor :on?"#222222":"transparent"
  }

    //   function toggle(){
    //       setOn(prevOn => !prevOn)
    //   }

  return (
    // MEthod 1
    // <div style={styles} className="box" onClick={toggle}>

    //Method 2
    <div
         style={styles} 
         className="box" 
        //  onClick={props.toggle}
        onClick={() => props.toggle(props.id)}
         >
    </div>
  )
}

export default Box
