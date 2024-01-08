import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><Link to="/" className={style.link}>Home</Link></li>
                <li><Link to="/about" className={style.link}>dashboard</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
