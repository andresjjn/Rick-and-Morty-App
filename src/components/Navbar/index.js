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
            <div>
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul class="menu__box">
                    <li><Link className="menu__item" to="/characters">Characters</Link></li>
                    <li><Link className="menu__item" to="/episodes">Episodes</Link></li>
                    <li><Link className="menu__item" to="/locations">Locations</Link></li>
                </ul>
            </div>
        </div>
    )
};
