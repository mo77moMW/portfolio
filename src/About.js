import"./Skill.css"
import "./About.css"
import Reveal from "./Reveal"
export default function About(){
    return(
        <Reveal>
        <div style={{textAlign:"center",margin:"0px", width:"100%"}}>
            <div className="about">
                <div className="profile"></div>
                <div className="about-card"><p className="lg" style={{paddingTop:"20px"}}>About Me</p><p className="lg">About Me
I am Mohammad Tareq Aziz Sabah, a fourth-year Computer Science student specializing in web development. I have hands-on experience with modern technologies such as React, Flask, and SQL databases, as well as strong skills in UI/UX design using tools like Figma.  I have worked on multiple projects, including designing user interfaces for Ahd Technology website and contributing to a competition project for Sabaq. Additionally, I organized a Figma workshop to share design principles and best practices.  Passionate about creating intuitive and visually appealing web applications, I strive to combine functionality with great user experience.</p></div>

            </div>
         
            
            {/*<h1 style={{margin:"0px"}}>About</h1>
            
            <p className="aboutP">a computer science student and web developer.<br></br> I am passionate about building innovative and user-friendly web applications, <br /> with a strong foundation in programming and problem-solving.<br /> Dedicated to continuously enhancing my skills,<br /> I strive to create efficient and impactful digital solutions.</p>*/}
        </div></Reveal>
    )
}