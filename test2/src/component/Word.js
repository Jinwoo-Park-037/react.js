import { useState } from "react";
import { dummy } from "../db/data.json";


export default function Word({word})
{
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow()
    {
        setIsShow(!isShow);
    }

    function toggleDone()
    {
        setIsDone(!isDone);
    }

    return (
        <tr className = {isDone ? "off" : ""} key = {word.id}>
            <td>
                <input type = "checkbox" checked = {word.isDone} onChange = {toggleDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>   {/* conditional rendering*/}
            <button onClick = {toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
            <button class = "btn_del">삭제</button>
        </tr>

    );
}



