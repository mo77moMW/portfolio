export default function WorkCard({addres ,type,disc,date}){
 return(   
                <div className="workcard">
                    <a href="https://www.al3ahed.com/"style={{textDecoration:"none"}}>
                    <div style={{display:"flex", margin:"0px",padding:"0px"}}><p className="cardText">{addres}</p><p className="yaer">2024</p></div>
                    <div style={{display:"flex", margin:"0px",padding:"0px"}}><p style={{margin:"0px 10px 20px 0px",padding:"0px"}} className="cardTextt">{disc}</p></div>
                    <div style={{display:"flex", margin:"0px",padding:"0px"}}><p style={{textAlign:"right"}} className="skil">{type}</p></div>
                </a></div>

           ) 
}