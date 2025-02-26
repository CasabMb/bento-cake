
import React from 'react';
import '../../CSS/StyleEntreAmisModal.css';

function EntreAmisModal({ isOpen, toggleModal }) {
    if (!isOpen) return null;

    return (
        <section className='entre-amis'>
            <div className="modal-overlay " onClick={toggleModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2>Atelier Gourmand Entre Amis 🍰🌟</h2>
                    <p className='intro'>
                        Envie d’un moment convivial et gourmand ? Que vous soyez entre amis, ou en famille, cet atelier est fait pour vous !
                    </p>
                    <div className='modal-boxes'>
                        <div className="modal-box">
                            <h3>Déroulement de l'atelier </h3>
                            <p>
                                Durant cet atelier, vous apprendrez à confectionner un <span>bento cake</span> en suivant des étapes simples et ludiques. Cet atelier est ouvert à tous !
                            </p>
                            <p><span>🎨 Décoration personnalisée :</span> Apprenez différentes techniques pour décorer vos bento cakes avec des couleurs, des motifs et des textures variés.</p>
                            <p><span>👩‍🍳 Accompagnement pas à pas :</span> Un encadrement professionnel pour vous guider à chaque étape, que vous soyez débutant ou passionné de pâtisserie.</p>
                            <p><span>🍰 Dégustation et partage :</span> Repartez avec votre création ou dégustez-la sur place dans une ambiance chaleureuse et détendue.</p>
                        </div>
                        <div className="modal-infos">
                            <h3>Détails pratiques</h3>
                            <p><span>📅 Durée :</span> Environ 2h30</p>
                            <p><span>📍 Lieu :</span>Sur place, En atelier privé</p>
                            <p><span>👥 Participants :</span>De 2 à 10 personnes</p>
                            <p><span>💰 Tarif :</span> À partir de 35€ par personne</p>
                        </div>
        
                        <div className="reservation">
                            <h3>Réservez votre atelier EVJF</h3>
                            <p>Pour plus d'informations ou pour réserver, contactez-nous :</p>
                            <p><span>📧 Email :</span> <a href="mailto:contact@bentocake-event.com">contact@bentocake-event.com</a></p>
                            <p><span>📞 Téléphone :</span> <a href="tel:+33612345678">06 12 34 56 78</a></p>
                        </div>
                    </div>
                    <button onClick={toggleModal}>Fermer</button>
                </div>
            </div>
        </section>
    );
}

export default EntreAmisModal;
