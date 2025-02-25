import React from 'react';
import '../../CSS/StyleEvjfModal.css';

function EvjfModal({ isOpen, toggleModal }) {
    if (!isOpen) return null
    return <>
        <section className='modal-overlay'>
            <div className='evjf-page evjf-modal-content'>
                <div className="evjf-container">
                    <h1>Organisez un EVJF inoubliable ! 🎉</h1>
                    <p className="intro">
                        Faites de cet enterrement de vie de jeune fille un moment unique et gourmand en partageant un <span>atelier bento cake</span> créatif et savoureux ! 🍰✨
                    </p>
        
                    <div className="section">
                        <h2>Déroulement de l'atelier</h2>
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
                        <h2>Détails pratiques</h2>
                        <p><span>📅 Durée :</span> Environ 2h30</p>
                        <p><span>📍 Lieu :</span> En atelier privé</p>
                        <p><span>👩‍🍳 Nombre de participantes :</span> De 4 à 10 personnes</p>
                        <p><span>💰 Tarif :</span> À partir de 35€ par personne</p>
                    </div>
        
                    <div className="reservation">
                        <h2>Réservez votre atelier EVJF</h2>
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