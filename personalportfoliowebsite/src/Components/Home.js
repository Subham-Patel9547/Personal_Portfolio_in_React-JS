import React from 'react'
import '../CSS/Home.css'
import { CiLinkedin} from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram ,FaFacebook} from "react-icons/fa6";
// import { MdOutlineFileDownload } from "react-icons/md";
import {useTypewriter,Cursor}from 'react-simple-typewriter';
import {Link} from 'react-router-dom'


function Home() {

  const [text] = useTypewriter({
    words: ['Software Enginner', 'Frontend Developer', 'Web Designer'],
    loop: {},

  })
  return (
    <>
   <div id='/Home' className='main101'>
  
              <div className="introDiv">
                <h1>Hi There,</h1>
                      <h1>I'm Subham Patel</h1>
                      <h2>I Am A
                        <span style={{color:'yellow' ,fontweight:'bold',marginLeft:'10px'}}>
                          {text}
                        </span>
                        <span style={{color:'red'}}>
                        <Cursor cursorStyle='___'/>
                        </span>
                        </h2> 
    
 <div> 
  <Link to='https://www.linkedin.com/in/subham-patel9547' target='_blank' className='AS'> <CiLinkedin className='icon'/></Link>
  <Link to='https://github.com/Subham-Patel9547' target='_blank'> <FiGithub className='icon'/></Link>
  <Link to='https://t.me/Subham_Patel9547' target='_blank'> <PiTelegramLogoLight className='icon'/></Link>
  <Link to='https://www.instagram.com/subh__am9547?igsh=MXBheGR3ejY4dzE0cw==' target='_blank'><FaInstagram  className='icon'/></Link>
  <Link to='https://www.facebook.com/shivampatel.hindu' target='_blank'> <FaFacebook  className='icon'/></Link>                        
 </div>

<Link to='https://drive.google.com/file/d/1tIhM49Nyhb8ycypJkbgtAOF-XOWiexvJ/view?usp=drivesdk' target='_blank' className='glow-on-hover'>
  Hire Me!
</Link>

    </div> 

    <div className="imgDiv">
            <img src="image/c.jpg" alt="" />
    </div>  
  </div>
     
      <div className="videoDiv">
       <video autoPlay muted loop>
        <source src='video/A.mp4' type="video/mp4"/>
        </video>
        </div>
    </>    
  )
}

export default Home