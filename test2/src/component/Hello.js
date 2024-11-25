import { useState } from "react";

export default function Hello(property)
{
    console.log(property);
    
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(property.age);
    const [grade, setGrade] = useState(property.grade);

    return (
        <div>
            <h2 id = "name">
                {name} ({age}세) ({grade}학년)
            </h2>
            <button
                onClick = {() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                }}
            >
                Change name
            </button>
            <button
                onClick = {() => {
                    setAge(age + 1);
                }}
            >
                Change age
            </button>
            <button
                onClick = {() => {
                    setGrade(
                        grade === 12 ? 1 : grade + 1
                    );
                }}
            >
                Change grade
            </button>

        </div>
    );
}








