const taskbox={
    display:"inline-block",
}
function taskTitle()
{
    return(
        <div style={taskbox}>
            <input type="text" placeholder="Enter the title of the task."></input>
        </div>
    )
}
export default taskTitle;