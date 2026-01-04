import "./HesStalye.css"
import { useState } from "react"
export default function Hed(){

const[isMenuOpen,setIsMenuOpen]=useState(false);

 const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        
        <div class="h" >
            
            <div className="logo" >Mo Tariq</div>
            <button className="hamburger" onClick={toggleMenu}>☰</button>
            <div className={`nav-options ${isMenuOpen ? "open":''}`}>
             
             <div><a href="#Home">Home</a></div>
             <div><a href="#about">About</a></div>
             <div><a href="#skill">Skills</a> </div>
             <div><a href="#work">Work</a></div>
             
               
            </div>
           
        </div>
    )


}