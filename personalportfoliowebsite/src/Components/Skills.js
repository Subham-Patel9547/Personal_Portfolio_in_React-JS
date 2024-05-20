import React from 'react'
import '../CSS/Skills.css'
import '../CSS/Home.css'
import { FaHtml5, FaCss3, FaReact ,FaBootstrap ,FaNodeJs} from "react-icons/fa6";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
function Skills() {
  return (
   <>
<div id='/Skills' class="wrapper">
    <div class="skill-area">
            <h1 className='Skills_Heading'>Technical Skills</h1>
            
            <div class="box">
                <div class="content">
                    <span> <FaHtml5 className='icon_Skills'/>&nbsp;&nbsp;  HTML-5</span>
                    <span>95%</span>
                </div>
                <div class="line-area">
                    <div id="line-1"></div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <span><FaCss3 className='icon_Skills'/>&nbsp;&nbsp; CSS-3</span>
                    <span>92%</span>
                </div>
                <div class="line-area">
                    <div id="line-2"></div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <span> <SiTailwindcss className='icon_Skills'/>&nbsp;&nbsp;  Tailwind-CSS</span>
                    <span>75%</span>
                </div>
                <div class="line-area">
                    <div id="line-3"></div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <span> <FaBootstrap className='icon_Skills'/>&nbsp;&nbsp;  BootStrap</span>
                    <span>82%</span>
                </div>
                <div class="line-area">
                    <div id="line-4"></div>
                </div>
            </div>


            <div class="box">
                <div class="content">
                    <span><IoLogoJavascript className='icon_Skills'/>&nbsp;&nbsp; JAVASCRIPT</span>
                    <span>87%</span>
                </div>
                <div class="line-area">
                    <div id="line-5"></div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <span><FaReact className='icon_Skills'/>&nbsp;&nbsp;  ReactJS</span>
                    <span>85%</span>
                </div>
                <div class="line-area">
                    <div id="line-6"></div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <span><FaNodeJs className='icon_Skills'/>&nbsp;&nbsp;  NodeJS</span>
                    <span>80%</span>
                </div>
                <div class="line-area">
                    <div id="line-7"></div>
                </div>
            </div>

            <div class="box">
                <div class="content">
                    <span><SiMongodb className='icon_Skills'/>&nbsp;&nbsp;  MongoDB</span>
                    <span>83%</span>
                </div>
                <div class="line-area">
                    <div id="line-8"></div>
                </div>
            </div>

    </div>
</div>
   </>

   
  )
}

export default Skills