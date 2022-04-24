// map() method
// const nums = [1,2,3,4,5]

// const pokemons = ["Bulbasur","Charmander","Squirtle"]
// const elements  = pokemons.map(mon => `<p>${mon}</p>`)
// console.log(elements)

import React from 'react'

function Map() {
    const colors = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]
    const values = colors.map((item) => {
        return <h1>{item}</h1>
    })
  return (
    <div>
      {values}
    </div>
  )
}

export default Map
