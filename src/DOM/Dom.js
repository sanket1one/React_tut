import React from 'react';
import ReactDOM from 'react-dom';

// function Dom() {
//     const thingsArray = ["Thing 1", "Thing 2"]
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//     function addItem(){
//         const nextItem = `Thing ${thingsArray.length + 1}`
//         thingsArray.push(nextItem)
//         console.log(thingsArray)
//     }
//   return (
//     <div>
//         <button onClick={addItem}>Add Items</button>
//         {thingsElements}
//     </div>
//   )
// }

function Dom() {
  const [things,setThings] = React.useState(["Thing1","Thing 2"])

  function addItem(){
    // setThings = things.push() //->> THis is not valid because we are changing the properties 
      const nextItem = `Thing ${things.length + 1}`
      setThings(prevState => [...prevState,nextItem])
  }

  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

return (
  <div>
      <button onClick={addItem}>Add Items</button>
      {thingsElements}
  </div>
)
}

export default Dom
