const taskbox={
    display:"inline-block",
}
function taskStatus()
{
    return(
        <div style={taskbox}>
            <input type="checkbox"></input>
        </div>
    )
}
export default taskStatus;