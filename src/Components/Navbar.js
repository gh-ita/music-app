import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Navbar.css'
import { FaMusic ,FaHeart} from "react-icons/fa";

function Navbar(){
    return (
        <nav className="navbar light nav">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/"><FaMusic/>  Music</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/favoris"><FaHeart/>  Favoris</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;