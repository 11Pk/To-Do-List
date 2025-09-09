
function Task(props)
{
    return(

        <div className="TASK">
           <input type="checkbox" checked={props.status} onChange={()=>{props.remove(props.index)}}></input>
            <input type="text" className="Title" placeholder="Enter the title of the task." value={props.title} readOnly></input>
        </div>
    )
}
export default Task