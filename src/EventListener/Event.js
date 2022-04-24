import React from 'react'

function Event() {
    function handleClick(){
        console.log("I was Clicked!");
    }
    function handleOnMouseOver(){
        console.log("MouseOver");
    }
  return (
    <div className='container'>
        <img src='https://picsum.photos/640/360' onMouseOver={handleOnMouseOver} className='container--image' />
        <button onClick={handleClick} className='container--button'>Click Me</button>
    </div>
  )
}

export default Event
