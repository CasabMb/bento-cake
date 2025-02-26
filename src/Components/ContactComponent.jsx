import React from 'react';
import '../CSS/StyleContact.css'

function ContactComponent() {
    return <>
        <section id='contact'>
            <h2>Contactez nous</h2>
            <div className='map' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21007.966380780585!2d2.357208109973794!3d48.83921884886305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721426dd6b9f%3A0xb0e3291adbfb5fbc!2sParis%20Bercy%20Bourgogne%20-%20Pays%20d&#39;Auvergne!5e0!3m2!1sfr!2sfr!4v1739445676619!5m2!1sfr!2sfr" width="400" height="350"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                </iframe>
                <div className='infos'data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <p>  Notre adresse</p>
                    <p>📌 Paris Bercy Bourgogne - Pays d'Auvergne</p>
                    <p>📍 12 Rue des Gourmands, 75012 Paris, France</p>

                    <p>  Contactez-nous</p>
                    <p>📧 Email : <a href='mailto:contact@bentocake-event.com'>contact@bentocake-event.com</a></p>
                    <p>📱 Téléphone : <a href='tel:+33612345678'>+33 6 12 34 56 78</a></p>

                    <p>  Nos horaires</p>
                    <p>🗓 Lundi - Vendredi : 9h00 - 18h00</p>
                    <p>🗓 Samedi : 10h00 - 17h00</p>
                    <p>🚪 Fermé le dimanche</p>
                </div>
            </div>
        </section>
    </>
}

export default ContactComponent