import Task from "./task"
function tasklist(props)
{
    return(
        <div>
           {props.tasks.map((t,index)=>{

              return(<Task key={index} index={index} title={t} status={false} remove={props.onRemove}></Task>)
           }
           )}
         
         
        </div>
    )
}
export default tasklist;