import React from 'react';
import '../../CSS/StyleClassiqueModal.css';

function AtelierClassiqueModal({ isOpen, toggleModal }) {
    if (!isOpen) return null;

    return (
        <section className='modal-overlay'>
            <div className='classique-page modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='classique-container'>
                    <h2>Participez à un Atelier Classique 🍰</h2>
                    <p className='intro'>
                        Découvrez les bases de la pâtisserie et réalisez votre propre <span>bento cake</span> dans une ambiance conviviale et accessible à tous !
                    </p>

                    <div className='section'>
                        <h3>Déroulement de l'atelier</h3>
                        <p>
                            Durant cet atelier, vous apprendrez à confectionner un <span>bento cake</span> en suivant des étapes simples et ludiques. Cet atelier est ouvert à tous !
                        </p>
                        <ul>
                            <li><span>📌 Introduction :</span> Présentation des ingrédients et techniques</li>
                            <li><span>🎨 Décoration personnalisée :</span> Apprenez différentes techniques pour décorer vos bento cakes avec des couleurs, des motifs et des textures variés.</li>
                            <li><span>👩‍🍳 Accompagnement pas à pas :</span> Un encadrement professionnel pour vous guider à chaque étape, que vous soyez débutant ou passionné de pâtisserie.</li>
                            <li><span>🍰 Dégustation et partage :</span> Repartez avec votre création ou dégustez-la sur place dans une ambiance chaleureuse et détendue.</li>
                        </ul>
                    </div>

                    <div className='section'>
                        <h3>Détails pratiques</h3>
                        <p><span>📅 Durée :</span> Environ 2h</p>
                        <p><span>📍 Lieu :</span>Sur place, Atelier ouvert (non privatif)</p>
                        <p><span>👨‍🍳 Accessibilité :</span> Atelier ouvert à tous, débutants bienvenus</p>
                        <p><span>💰 Tarif :</span> À partir de 35€ par personne</p>
                    </div>

                    <div className='reservation'>
                        <h3>Réservez votre atelier</h3>
                        <p>Pour toute information ou réservation :</p>
                        <p><span>📧 Email :</span> <a href='mailto:contact@bentocake-event.com'>contact@bentocake-event.com</a></p>
                        <p><span>📞 Téléphone :</span> <a href='tel:+33612345678'>06 12 34 56 78</a></p>
                    </div>
                    <button onClick={toggleModal}>Fermer</button>
                </div>
            </div>
        </section>
    );
}

export default AtelierClassiqueModal;