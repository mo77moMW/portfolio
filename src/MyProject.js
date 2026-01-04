import "./MyProject.css"
import Reveal from "./Reveal"
export default function MyProject(){
    return(<div>
        <Reveal>
        <div className="card-project">
            <a href="https://www.al3ahed.com/"style={{textDecoration:"none"}}>
            <div className="card-project">
            <h1 style={{color:"white",fontSize:"5vw"}}>Al3ahed Team website</h1>
            <div className="phto-card">
                <img src="3ahed1.png" alt="3ahed Home" className="phto-project" />
                <img src="3ahed2.png" alt="3ahed Home" className="phto-project" />
                <img src="3ahed3.png" alt="3ahed Home" className="phto-project" />
                <img src="3ahed4.png" alt="3ahed Home" className="phto-project" />
            </div>
            <p style={{color:"white"}} className="pproject">Developed and managed "Al3ahed Technology," an educational platform operated by a student team at Al al-Bayt University. The site aims to elevate the academic level of students by providing specialized academic services and developing their skills in modern technology fields.</p>
          <div style={{justifyContent:"center",display:"flex"}}><div className="wor">UI/UX design</div></div>
        </div></a></div></Reveal><Reveal>
            <div className="card-project" style={{backgroundColor:"#2448D8"}}>
            <h1 style={{color:"white",fontSize:"5vw",margin:"10px"}}>Education space website</h1>
            <div className="phto-card">
                <img src="es1.jpg" alt="3ahed Home" className="phto-project" />
                <img src="es2.jpg" alt="3ahed Home" className="phto-project" />
                <img src="es3.jpg" alt="3ahed Home" className="phto-project" />
                <img src="es4.jpg" alt="3ahed Home" className="phto-project" />
            </div>
            <p style={{color:"white"}}className="pproject">Developed a web platform called "Education Space" that connects trainers and individuals who want to host in-person workshops but lack a suitable venue with owners of available spaces (cafes, halls, co-working spaces, or private rooms). The platform solves a common problem by simplifying the rental process for educational, professional, and creative sessions.</p>
             <div style={{display:"flex",gap:"5px",justifyContent:"center"}}><div className="wor">UI/UX design</div><div className="wor">Frontend</div></div>
        </div></Reveal>
    </div>)
}