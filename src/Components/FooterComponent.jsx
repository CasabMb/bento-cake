import React from 'react';
import '../CSS/StyleFooter.css';
import facebook from '../assets/icons/facebook.png';
import twitter from '../assets/icons/twitter.jpg';
import instagram from '../assets/icons/instagram.png';

function FooterComponent() {
    return <>
        <footer>
            <div>
                <p>LOGO</p>
            </div>
            <div className="footer-divider"></div>
            <div className="mentions-legales">
                <p>Conditions de Vente (CGV)</p>
                <p>Charte de protection des données</p>
                <p>Mentions légales</p>
                <p>Politique relative aux cookies</p>
            </div>
            <div className="footer-divider"></div>
            <div className="reseaux" data-aos="fade-right" data-aos-duration="900" data-aos-offset="100" data-aos-easing="ease-in-sine">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="logo instagram" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="logo facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="logo twitter" />
                </a>
            </div>
        </footer>
    </>
}

export default FooterComponent