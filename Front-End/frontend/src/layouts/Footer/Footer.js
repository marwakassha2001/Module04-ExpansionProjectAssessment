import React from "react";
import { Link } from "react-router-dom";
import style from './Footer.module.css';


const Footer = () => {
    return(
    <footer className={style.footer}>
        <div className={style.container}>
            <div className={style.logoDescription}>
                <p>Become your trusted multi-brand shopping destination, offering a diverse range of products and brand visibility.</p>
            </div>
            <div className={style.company}>
                <h3 className={style.title}>Company</h3>
                <ul className={style.links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="Products/Category">Shop</Link></li>
                    <li><Link>Pivacy Policy</Link></li>
                </ul>
            </div>
            <div className={style.contact}>
                <h3 className={style.title}>Contact</h3>
                <ul className={style.links}>
                    <li>info@globalfairylb.com</li>
                    <li>71087446</li>
                    <li>Lebanon</li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className={style.copyright}>
            © 2023 - Global Fairy All Rights Reserved
        </div>
    </footer>
)
}

export default Footer;