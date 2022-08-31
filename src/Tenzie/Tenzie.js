import React from 'react'
import Die from './Die'
import {v4 as uuidv4} from "uuid"
import Confetti from "react-confetti"
function Tenzie() {
    const [dice,setDice] = React.useState(allNewDice())
    const [Tenzie,setTenzie] = React.useState(false)
    const [count,setCount] = React.useState(0)

    React.useEffect(() =>{
        // .every() method in javaScript return  true if all the content satisfy the condition
        const allHeld  = dice.every(die => die.isHeld === true)
        const firstValue = dice[0].value
        const allSameValue  = dice.every(die => die.value === firstValue)
        if(allHeld && allSameValue){
            setTenzie(true)
            console.log("you won")
        }
    },[dice])

    function allNewDice(){
        let i = 0;
        const newDice = []
        while(i!=10){
            newDice.push(
                // {
                //     value:Math.ceil(Math.random()*6),
                //     isHeld:false,
                //     id:uuidv4()
                // }
            generateNewDie()) 
            //Math.ceil start the number from 1
            i++
        }
        return newDice;
    }


    function generateNewDie(){
        return{
            value:Math.ceil(Math.random()*6),
            isHeld:false,
            id:uuidv4()
        }
    }

    function rollDice(){
        if(!Tenzie)
            {
            setDice(oldDice => oldDice.map(die =>{
                    return die.isHeld?
                    die:
                    generateNewDie()
            }))
            setCount(prevCount => (prevCount+1))
            }else{
                setTenzie(false)
                setDice(allNewDice())
                setCount(0)
            }
   
    }

    function holdDice(id){
        const {value,isHeld} = dice
        setDice(oldDice => oldDice.map(die =>{
            return die.id === id? 
                {...die,isHeld:!die.isHeld}:
                die
        }))
    }

  const diceElement = dice.map(die =><Die key={die.id} value={die.value} isHeld={die.isHeld}  holdDice={()=> holdDice(die.id)} ></Die>)
  return (
    <main>
        {Tenzie && <Confetti />}
        <h1 className='title'>Tenzie</h1>
        <p className='instructions'>Roll until all dice are the same. Click each die to freeze 
        it at its current value betwen rolls.</p>
        <div className='dice-container'>
            {diceElement}
        </div>
        <div className='sub-container'>
            <div>
                <button 
                className='roll-dice'
                onClick={rollDice}>
                    {Tenzie?"New Game":"Roll"}
                </button>
            </div>
            <div 
            className='Count'
            >
                No. Of Roll {count}
            </div>
        </div>
    </main>
  )
}

export default Tenzie
