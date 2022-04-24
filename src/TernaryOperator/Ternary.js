import React from 'react'

function Ternary() {
    const [isGoingOut,setIsGoingOut] = React.useState(true)
    
    // const isGoingOut = true;
    // let answer
    // if(!isGoingOut === true){
    //     answer = "Yes"
    // }else{
    //     answer="NO"
    // }
    // answer = !isGoingOut === true? "Yes":"No"

    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }
  return (
    <div className='state'>
      <h1 className='state--title'>Do I feel like going out tonight</h1>
      <div className='state--value' onClick={changeMind}>
          {/* <h1>{answer}</h1> */}
          <h1>{!isGoingOut === true? "Yes":"No"}</h1>
      </div>
    </div>
  )
}

export default Ternary
