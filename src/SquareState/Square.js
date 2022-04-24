import React from 'react'
import boxes from './boxes.js'
import Box from './Box.js';
import './Square.css'

function Square(props) {
    const [squares,setSquare] = React.useState(boxes);
    //   document.getElementById('box').style.backgroundColor = 'black'
    

    function toggle(id){
        setSquare(prevSquare =>{
            // const newSquares = []
            // for(let i = 0; i < pervSquare.length;i++)
            // {
            //     const currentSquare = pervSquare[i]
            //     if(currentSquare.id === id){
            //         const updatedSquare = {
            //             ...currentSquare,
            //             on:!currentSquare.on
            //         }
            //         newSquares.push(updatedSquare)
            //     }else {
            //         newSquares.push(currentSquare)
            //     }
            // }
            // return newSquares

            /* more declarative way */
            return prevSquare.map((square)=>{
                    return  square.id === id? {...square,on:!square.on}: square
            })

        })
    }
    
   const squareElements = squares.map(square => (
    // <div style={styles} className='box' key={square.id}></div>       
    <Box
        key={square.id}
        on={square.on}
        id={square.id}
        toggle={toggle}
     />       
   ))

    //    first {} in {{}} represent entering into the javaScript
    //    second {} innerBracket represent the javaScript object
  return (
    <main>
        <h1>Boxes will go here</h1>
        {squareElements}
    </main>
  )
}

export default Square
