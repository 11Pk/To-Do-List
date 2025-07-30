
import { useState } from "react";


function Newtask(props)
{
    const [task,setTask]=useState("");
    function handleSubmit(event)
{   event.preventDefault();
  
    props.onadd(task);
    event.target.reset();
    
}
    return(
        <div>
           <form onSubmit={handleSubmit}>
          <input type="checkbox"></input>
          <input type="text"  placeholder="Enter the title of the task." onChange={(event)=>{
            setTask(event.target.value);
          }}></input>
          </form>
          
        </div>
    )
}
export default Newtask