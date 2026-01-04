import "./HesStalye.css"
export default function FFO({is}){
    if(is){
     return(<div>
        <h1 style={{margin:"20px"}}>Skills</h1>
                    <div className="imgSkillspar">
                   

              
                    
                    <div>
                        <img src="/html.png" alt="html" className="imgSkills"/>
                    <img src="/css.png" alt="css" className="imgSkills"/>
                    <img src="/javascript.png" alt="javascript" className="imgSkills"/>
                    <img src="/figma3.png" alt="figma" className="imgSkills"/>

                    </div>
                    <div> <img src="/cpp.png" alt="cpp" className="imgSkills" />
                    <img src="/java2.png" alt="java" className="imgSkills"/>
                    <img src="/python2.png" alt="python" className="imgSkills"/></div>
                   
                   
                </div>
                </div>
               
    )
 }
   
  else
  {<></>}
}
/*   <div style={{display:"flex", margin:"0px"}}>
                   

              
                    
                <div style={{width:"112px", margin:"0px 32px"}}>
                    <a style={{display:"flex", padding:"0px 0px 20px 60px"}}><img src="/html.png" /><p>HTML</p></a>
                    <a style={{display:"flex", padding:"0px 0px 20px 60px"}}><img src="/css.png" /><p>CSS</p></a>
                    <a style={{display:"flex", padding:"0px 0px 20px 60px"}}><img src="/javascript.png" /><p>JavaScript</p></a>
                    <a style={{display:"flex", padding:"0px 0px 40px 60px", width:"50px",height:"50px"}}><img src="/figma3.png" /><p>Figma</p></a>
                    
                 
                </div>
                 <div style={{width:"112px"}}>
                   
                    <a className="opp" style={{display:"flex", padding:"80px 0px 20px 60px"}}><img src="/cpp.png" /><p>CSS</p></a>
                    <a style={{display:"flex", padding:"0px 0px 20px 60px", width:"50px",height:"50px"}}><img src="/java2.png" /><p>Java</p></a>
                    
                </div>
                 <div style={{width:"112px", margin:"90px 32px 0px"}}>
                    <a style={{display:"flex", padding:"30px 0px 20px 60px", width:"50px",height:"50px"}}><img src="/python2.png" /><p>Python</p></a>
                   
                </div>
                </div>*/ 