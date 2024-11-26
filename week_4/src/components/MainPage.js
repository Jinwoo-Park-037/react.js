import { Link } from "react-router-dom";

export default function MainPage()
{
    return (
        <div className = "links">
            <Link to = "/menu" className = "no_decorations">Menu</Link>
            <Link to = "/about_us" className = "no_decorations">About Us</Link>

        </div>
    );

}




