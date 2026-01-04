import { useState } from "react"
import FFO from "./FFO"
export default function Skills(){
const[FrontEnd,SetFrontEnd]=useState(false)
    

    return(
        <div>
            <h1>Skills</h1>
            <div>
                
                    <button onClick={()=>{if(FrontEnd==false)SetFrontEnd(true);else SetFrontEnd(false)}}>FrontEnd</button>
                     <FFO is={FrontEnd} />

               
             
            </div>
        </div>
    )
}