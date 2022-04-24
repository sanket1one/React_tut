import React from 'react'
import NewCount from './NewCount';

function Count() {
    const [count,setCount] = React.useState(0)
    function add(){
        // setCount(count+1);

        // setCount(function(oldValue){    //callback function
        //     return oldValue +1
        // });

        setCount(prevCount => prevCount+1)
    }
    function minus(){
        setCount(count-1);
    }
    console.log(" Count component rendered")

  return (
    <div className='counter'>
      <button className='counter--minus' onClick={minus}>-</button>
      <NewCount number={count}/>
      <button className='counter--plus' onClick={add}>+</button>
    </div>
  )
}

export default Count
