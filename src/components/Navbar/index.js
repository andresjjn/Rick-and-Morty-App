import React from "react";
import portal from "../../assests/images/portal.png"
import { Link } from "react-router-dom";
import "../../assests/styles/nav.scss";
export default function Navbar() {
    return (
        <div className="header">
            <Link to="/">
                <img className="portal portal-animated" alt="Return to main page" src={portal}/>
            </Link>
            <ul className="navbar">
                <li><Link className="list-element" to="/characters">Characters</Link></li>
                <li><Link className="list-element" to="/episodes">Episodes</Link></li>
                <li><Link className="list-element" to="/locations">Locations</Link></li>
            </ul>
        </div>
    )
};
