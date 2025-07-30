
function Task(props)
{
    return(

        <div>
           <input type="checkbox" checked={props.status} onChange={()=>{props.remove(props.index)}}></input>
            <input type="text" placeholder="Enter the title of the task." value={props.title} readOnly></input>
        </div>
    )
}
export default Task