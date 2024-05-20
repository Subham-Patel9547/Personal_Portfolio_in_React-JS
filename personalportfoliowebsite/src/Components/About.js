import img from '../image/Ai101.jpeg';
import '../CSS/About.css';

import React from 'react'

function About() {
  return (
    <>
        <div id='/About' className='main1001'>
          <div className="imgDiv101">
            <img src={img} alt='img'/>
          </div>
          
          <div className="intro_Div">
              <h1>I'm Subham Patel</h1>
              <h2>Full Stack Developer</h2>
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, dolorum. Repel
                lendus ut consequatur enim officia? Eligendi minus voluptates maxime minima? Sunt
                expedita odit facere blanditiis autem deleniti quam atque aliquam.
              </h3>
          </div>

        </div>
     
    </>
  )
}

export default About