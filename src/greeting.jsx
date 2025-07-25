const today= new Date();
const year=today.getFullYear();
const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const day=days[today.getDay()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date=today.getDate();
const month=months[today.getMonth()];
function greeting()
{
    

    return(
        <div>
            <h1>Good Morning</h1>
            <h2>Today: {day} {date} {month} {year}</h2>
        </div>
    )
}
export default greeting