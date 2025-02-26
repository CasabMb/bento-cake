import React from 'react';
import '../../CSS/StyleEvjfModal.css';

function EvjfModal({ isOpen, toggleModal }) {
    if (!isOpen) return null;
    
    return <>
        <section className='modal-overlay'>
            <div className='evjf-page evjf-modal-content'onClick={(e) => e.stopPropagation()}>
                <div className="evjf-container">
                    <h2>Organisez un EVJF inoubliable ! 🎉</h2>
                    <p className="intro">
                        Faites de cet enterrement de vie de jeune fille un moment unique et gourmand en partageant un <span>atelier bento cake</span> créatif et savoureux ! 🍰✨
                    </p>
        
                    <div className="section">
                        <h3>Déroulement de l'atelier</h3>
                        <p>
                            Lors de cet atelier, vous apprendrez à réaliser de magnifiques <span>bento cakes personnalisés</span>.  
                            Un moment de partage et de fun où chaque participante pourra <span>laisser libre cours à sa créativité</span> !
                        </p>
                        <ul>
                            <li><span>📌 Introduction :</span> Présentation des ingrédients et techniques</li>
                            <li><span>🎨 Décoration :</span> Travail sur la pâte à sucre, glaçage et détails personnalisés</li>
                            <li><span>📸 Shooting photo :</span> Immortalisez vos créations avec un mini shooting</li>
                            <li><span>🍴 Dégustation :</span> Un moment gourmand pour savourer vos créations</li>
                        </ul>
                    </div>
        
                    <div className="section">
                        <h3>Détails pratiques</h3>
                        <p><span>📅 Durée :</span> Environ 2h30</p>
                        <p><span>📍 Lieu :</span>Sur place, En atelier privé</p>
                        <p><span>👩‍🍳 Nombre de participantes :</span> De 2 à 10 personnes</p>
                        <p><span>💰 Tarif :</span> À partir de 45€ par personne</p>
                    </div>
        
                    <div className="reservation">
                        <h3>Réservez votre atelier EVJF</h3>
                        <p>Pour plus d'informations ou pour réserver, contactez-nous :</p>
                        <p><span>📧 Email :</span> <a href="mailto:contact@bentocake-event.com">contact@bentocake-event.com</a></p>
                        <p><span>📞 Téléphone :</span> <a href="tel:+33612345678">06 12 34 56 78</a></p>
                    </div>
                    <button onClick={toggleModal}>Fermer</button>
                </div>
            </div>
        </section>
    </>
}

export default EvjfModal