import"./Exp.css"
import Reveal from "./Reveal"
export default function Exp(){
    return(<div>
        <Reveal>
        <div className="ExpCard">
            <div className="RT">
                <h1 className="h11">Education</h1>
                <div className="RTC">
                 <img src="colg.png" className="phto"></img>
                 <div><h1 style={{marginTop:"5vh",color:"white",fontSize:"3vw"}}>Al al-Bayt University</h1>
                 <p style={{padding:"0px",margin:"0px",color:"white"}}>Bachelor’s Degree in Computer Science</p></div>

                </div>
              

            </div>
            <div className="LT">
                <h1 className="h11">Leadership & Activities</h1>
                  <div className="RTC">
                 <img src="low.png" className="phto"></img>
                 <div><h1 style={{marginTop:"5vh",color:"white",fontSize:"3vw"}}>AL3ahed Team     2022-2026</h1>
                 <p style={{padding:"0px",margin:"0px",color:"white",float:"left"}}>Academic Team Leader</p></div>
                </div>
                   <div className="RTC">
                 <img src="rob.png" className="phto"></img>
                 <div><h1 style={{marginTop:"5vh",color:"white",fontSize:"3vw"}}>ROBOTIDIA     2023-2024</h1>
                 <p style={{padding:"0px",margin:"0px",color:"white",float:"left"}}>MEDIA Leader</p></div>
                </div>

                <p>Organized conferences and competitions in Robotics, Problem Solving, and Cybersecurity, while leading the academic team.</p>

            </div>
            
        </div>
        </Reveal>
        <Reveal>
         <div className="ExpCardd">
                <div className="RT">
                <h1 className="h11">Skills</h1>
                <div className="RTC">
                 <img src="code.png" className="phto" alt="0"></img>
                 <div><h1 className="ph">Technical Skills</h1>
                 </div>
                </div>
                <div>
                     <p style={{padding:"0px",margin:"2vh",color:"white",textAlign:"left"}}>Backend: Flask, Python</p>
                 <p style={{padding:"0px",margin:"2vh",color:"white",textAlign:"left"}}>Database: SQL</p>
                 <p style={{padding:"0px",margin:"2vh",color:"white",textAlign:"left"}}>Frontend: React, HTML, CSS, JS</p>

                </div>
                 <div className="RTC">
                 <img src="dis.png" className="phto" alt="0"></img>
                 <div><h1 className="ph">Design Skills</h1>
                 </div>
                </div>
                 <div>
                     <p style={{padding:"0px",margin:"2vh",color:"white",textAlign:"left"}}>UI/UX Design: Figma, Wireframing, Prototyping, User Research</p>
                 

                </div>
                
              

            </div>
            <div className="LT">
                <h1 className="h11">Additional</h1>
                  <div>
                <h1 className="h1">Managed social media pages and content</h1>
                 <h1 className="h1">Organized Figma Workshop</h1>
                 <h1 className="h1">Participated in volunteer teams and community initiatives</h1>

                </div>
            </div>
         </div>
         </Reveal>
    </div>)
}