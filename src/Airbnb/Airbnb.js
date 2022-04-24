import React from 'react'
import Hero from './Hero.js'
import Navbar from './Navbar.js'
import Card from './Card.js'
import data from './Data.js'
function Airbnb() {
  const cards = data.map(item =>{
    return <Card 
    key={item.id}
    // item={item}
    {...item}
    // img={item.coverImg}
    // rating={item.stats.rating}
    // reviewCount={item.stats.reviewCount}
    // location={item.location}
    // title={item.title}
    // price={item.price}
    // openSpots={item.openSpots}
    />
  })
  return (
    <>
     <Navbar /> 
     <Hero />
     {/* <Card 
     img="./image1.png"
     rating={5.0}
     reviewCount={6}
     location="USA"
     title="Life Lessons with Katie Zaferes"
     price={136}
     /> */}
     <section className='cards-list'>
      {cards}
     </section>
    </>
  )
}

export default Airbnb
