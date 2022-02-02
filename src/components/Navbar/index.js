import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/episodes">Episodes</Link></li>
                {/*<li><Link to="/locations">Locations</Link></li> */}
            </ul>
        </div>
    )
};
