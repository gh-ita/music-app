import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Navbar.css'

function Navbar(){
    return (
        <nav className="navbar light nav">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Music</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/favoris">Favoris</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;