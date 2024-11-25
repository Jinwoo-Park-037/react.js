import {Link} from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() 
{
    const num = 10;
    console.log(dummy);
    const hello = (num) => {console.log(12 * num)};
    /* function variable */

    return (
        <div>
            <ul className = "list_day">
                {dummy.days.map(day => (
                    <li key = {day.id}>
                        <Link to = {`/day/${day.day}`}>
                            Day {day.day}
                        </Link>
                        
                    </li>
                ))}
            </ul>
            

        </div>

    );
}
