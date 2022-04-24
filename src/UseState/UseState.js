import React from 'react'

function UseState() {
    const [result,setIsImportant] = React.useState("Yes")
    console.log(result)

    function handleClick(){
        setIsImportant("No")
    }
  return (
    <div className='state'>
      <h1 className='state--title'>Is state important to know?</h1>
      <div className='state--value' onClick={handleClick}>
          <h1>{result}</h1>
      </div>
    </div>
  )
}

export default UseState
