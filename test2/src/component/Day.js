import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day()
{
    const day = useParams().day;
    const wordList = dummy.words.filter(word => (
        word.day === day
    ));

    console.log(wordList);

    return (
        <div>
            <h3>Day {day}</h3>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key = {word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}




