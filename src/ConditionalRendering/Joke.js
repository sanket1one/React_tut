import React from 'react'
//conditional rendering
function Joke(props) {
  const [isShown,setIsShown] = React.useState(false)
  function toggle(){
    setIsShown(prevShown => !prevShown)
  }
  return (
    <div>
      {props.setup && <h3>Setup:{props.setup}</h3>} 
      {/*if props.setup exist then show this value*/}
      {isShown && <p style={{display:props.setup? "block":"none"}}>Punchline:{props.punchline}</p>}


      {/* {!isShown && <button onClick={toggle}>Show Punchline</button>}
      {isShown && <button onClick={toggle}>Hide Punchline</button>} */}

      {/* Can reduce the code using "Ternay operator" */}
      <button onClick={toggle}>{isShown ? "Hide": "Show"} Punchline</button>
      <hr />
    </div>
  )
}
const condt1 = true;
const condt2 = false;
if(condt1 && console.log("Hello there"))
{
  //it will return "Hello there" if and only if the condt1 is tru
}
export default Joke
