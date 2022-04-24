import React from 'react'

function WindowTracker() {
  const [windowWidth,setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(()=>{
    
    function watchWidth(){
      console.log("Setting up...")
      setWindowWidth(window.innerWidth)
    }


    window.addEventListener("resize",watchWidth)

    //cleanup function (use to remove the side effect created)
    return () =>{
      console.log("cleaning up>>>")
      window.removeEventListener("resize",watchWidth)

    }
  },[])

  return (
    <h1>
      Window width: {window.innerWidth}
    </h1>
  )
}

export default WindowTracker
