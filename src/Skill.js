import "./Skill.css"
import Reveal from "./Reveal"
export default function Skill(){
    return(
        <Reveal>
        <div  className="home-card">
             <div className="squer">
               <div className="circle" style={{}}><img src="web.png" className="phto" alt="web devlopment"></img></div>
               <p>Web development is the process of building and maintaining websites and web applications by writing code that ensures efficient functionality.
It is divided into Frontend (what users see and interact with) and Backend (servers and databases).</p>

            </div>
          
           <div className="squer" style={{backgroundColor:"#D87C24"}}>
                <div className="circle" style={{backgroundColor:"#2448D8"}}><img src="ui.png" className="phto" alt="web devlopment"></img></div>
                <p>General Definition:
UI focuses on the visual design of interfaces (colors, buttons, layout).
UX ensures the overall experience is smooth, intuitive, and user-friendly.
My Proficiency: 85%</p>

            </div>
        </div></Reveal>
    )
}