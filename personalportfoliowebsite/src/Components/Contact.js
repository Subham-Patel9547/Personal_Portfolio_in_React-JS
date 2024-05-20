import React from 'react'
import '../CSS/Contact.css'
import img from '../image/Ai101.jpeg'

function Contact() {
  return (
    <>
     <div className="parent" id='/Contact'>
      
      <div className='child'>

        <div className="imgDiv imgDiv101 image">
           <img src={img} alt='img'/>  
        </div>

          <div className="formDiv">
            <form action="">
          <div class="input-block">
            <input type="text" name="input-text" id="input-text" required spellcheck="false"/>
            <span class="placeholder">
              Name
            </span>
          </div>

          <div class="input-block">
            <input type="text" name="input-text" id="input-text" required spellcheck="false"/>
            <span class="placeholder">
              Email
            </span>
          </div>

          <div class="input-block">
            <input type="text" name="input-text" id="input-text" maxLength={10} required spellcheck="false"/>
            <span class="placeholder">
              Phone No.
            </span>
          </div>

          <div class="input-block">
          <textarea name="input-text" id="input-text" placeholder='Message...' cols="19" rows="5" required spellcheck="false"/>
          </div>
           
              <button className='Contact_Button'>Send</button>
              </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact