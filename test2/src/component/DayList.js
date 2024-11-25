import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
{/*import dummy from "../db/data.json";*/}

export default function DayList() 
{
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onClick()
    {
        setCount(count + 1);
    }

    function onClick2()
    {
        setDays([
            ...days,
            {
                id: Math.random(),
                day: 1,
            },
        ]);
    }

    /* 
    useEffect:
        DOM의 상태 변화가 반영되었을 때 실행되는 함수
    
    */
    useEffect(() =>{
        fetch("https://localhost:3000/days")
        .then(res => {  /*Naming response "res" and parsing it as a json*/
            return res.json()
        })
        .then(data => {
            setDays(data);
        });
    }, []);

    return (
        <div>
            <ul className = "list_day">
                {days.map(day => (
                    <li key = {day.id}>
                        <Link to = {`/day/${day.day}`}>
                            Day {day.day}
                        </Link>
                        
                    </li>
                ))}
            </ul>
            
            <button onClick = {onClick}>{count}</button>
            <button onClick = {onClick2}>Day Change</button>
        </div>

    );
}
