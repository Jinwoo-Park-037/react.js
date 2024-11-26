import { Link } from "react-router-dom";


export default function Header() {
    
    return (
        <div>
            <h1 className = "title">
                <Link to = "/" className = "no_decorations">café FLOWER</Link>
            </h1>
        </div>
    );
}

