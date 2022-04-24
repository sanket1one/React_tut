import React from 'react'
import Contact from './Contact'

function Cat() {
  return (
    <div className='contacts'>
      <Contact 
      img="../Images/image1.png"
      name="Mr. Whiskerson"
      phone="(222) 555-1234"
      email="mr.wiskaz@catnap.meow"
      />
      <Contact
      img="../Images/image1.png"
      name="Fulffykins"
      phone="(222) 555-2345"
      email="fluff@me.com" />
      <Contact
      img="../Images/image1.png"
      name="Felix"
      phone="(222) 555-4567"
      email="thecat@hotmail.com" />
      <Contact 
      img="../Images/image1.png"
      name="Pumpkin"
      phone="(222) 555-8244"
      email="pumpking@meow.meow"/>
    </div>
  )
}

export default Cat
