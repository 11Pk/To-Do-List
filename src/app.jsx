import Greeting from "./greeting"
import Tasklist from "./tasklist"
import NewTask from "./newtask"
import { useState } from "react"

function App()
{const [task,setTask]= useState([]);
    function add(title)
    {
         setTask(newtask=>[...newtask,title]);
    }
    function remove(index)
    {
        setTask(newtask=>newtask.filter((_,i)=>i!==index))
    }
    return(
        
            <div>
            <Greeting></Greeting>
            <Tasklist tasks={task} onRemove={remove}></Tasklist>
            <NewTask onadd={add}></NewTask>
            </div>
        
    )
}
export default App;