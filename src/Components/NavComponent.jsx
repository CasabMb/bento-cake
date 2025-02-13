import React from 'react';
import logo from '../assets/images/logosb.webp';
import '../CSS/StyleNavBarre.css';


function NavComponent() {
    return <>
        <div className='nav_barre'>
            <div className='img_logo'>
                <img src={logo} alt="logo de l'enseigne" />
            </div>
            <nav>
                <ul>
                    <li><a href="#ateliers"> Atelier</a></li>
                    <li><a href='#about_us'>About us</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </>
}

export default NavComponent