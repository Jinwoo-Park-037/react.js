import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word.js";
import { useState, useEffect } from "react";

export default function Day()
{
    const day = useParams().day;
    /*const wordList = dummy.words.filter(word => (
        word.day === day
    ));*/

    const [words, setWords] = useState([]);

    useEffect(() =>{
        fetch(`https://localhost:3000/words?day=${day}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    }, [day]);

    

    return (
        <div>
            <h3>Day {day}</h3>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word = {word} key = {word.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}




