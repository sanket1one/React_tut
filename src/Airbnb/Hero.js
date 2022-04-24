import React from 'react'
import section1Img from '../Images/section1.png'
function Hero() {
  return (
    <section className='hero'>
        <img src={section1Img} className="hero--photo" />
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>
            Join unique interactive activites led by
            one-of-a-kind host-all without leaving home.
        </p>
    </section>
  )
}

export default Hero
