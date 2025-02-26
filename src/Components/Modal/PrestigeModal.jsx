import React from 'react';
import '../../CSS/StylePrestigeModal.css';

function PrestigeModal({ isOpen, toggleModal }) {
    if (!isOpen) return null;

    return (
        <section className='modal-overlay' onClick={toggleModal}>
            <div className='prestige-page modal-content' onClick={(e) => e.stopPropagation()}>
                <div className="prestige-container">
                    <h2>Atelier Prestige 🍰✨</h2>
                    <p className="intro">
                        Vivez une expérience immersive en apprenant à réaliser un <span>bento cake</span> du début à la fin !
                        De la confection de la pâte à la décoration finale, maîtrisez toutes les étapes avec des techniques avancées.
                    </p>
    
                    <div className="section">
                        <h3>Déroulement de l'atelier</h3>
                        <p>
                            Cet atelier complet de <span>4 heures</span> vous permettra d’acquérir toutes les compétences
                            nécessaires pour créer un véritable bento cake professionnel.
                        </p>
                        <ul>
                            <li><span>🥚 Préparation :</span> Sélection et mélange des ingrédients</li>
                            <li><span>🔥 Cuisson :</span> Confection de la pâte et mise au four</li>
                            <li><span>🍰 Assemblage :</span> Garniture et montage du bento cake</li>
                            <li><span>🎨 Décoration :</span> Techniques avancées pour une finition parfaite</li>
                            <li><span>📸 Shooting :</span> Immortalisez votre création</li>
                            <li><span>🍴 Dégustation :</span> Partagez et savourez votre œuvre</li>
                        </ul>
                    </div>
    
                    <div className="section">
                        <h3>Détails pratiques</h3>
                        <p><span>📅 Durée :</span> 4 heures</p>
                        <p><span>📍 Lieu :</span>Sur place, En atelier spécialisé</p>
                        <p><span>👩‍🍳 Participants :</span>Atelier ouvert à tous</p>
                        <p><span>💰 Tarif :</span> À partir de 90€ par personne</p>
                    </div>
    
                    <div className="reservation">
                        <h3>Réservez votre Atelier Prestige</h3>
                        <p>Pour plus d'informations ou pour réserver, contactez-nous :</p>
                        <p><span>📧 Email :</span> <a href="mailto:contact@bentocake-event.com">contact@bentocake-event.com</a></p>
                        <p><span>📞 Téléphone :</span> <a href="tel:+33612345678">06 12 34 56 78</a></p>
                    </div>
                    <button onClick={toggleModal}>Fermer</button>
                </div>
            </div>
        </section>
    );
}

export default PrestigeModal;