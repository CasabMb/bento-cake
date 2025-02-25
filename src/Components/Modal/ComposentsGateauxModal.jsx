import React from 'react';
import '../../CSS/StyleComposantsGateauxModal.css';

function ComposentsGateauxModal({ isOpen, toggleModal }) {
    if (!isOpen) return null
    return <>
        <div className='modal-overlay' onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Détails des choix Bento Cake</h2>
                <div className='contents'>
                    <div modal-content-p >
                        <p className='accroche'>Nous vous proposons plusieurs choix pour créer un Bento Cake à votre image : des bases savoureuses, des garnitures gourmandes et des décorations uniques pour une expérience sucrée inoubliable ! </p>
                        <div className='modal-content-p'>
                            <p>
                                🍰 <span>Choisissez votre base :</span> 
                                Optez pour une génoise moelleuse parmi nos recettes artisanales :  
                            </p>
                            <p>- Vanille (douce et parfumée)  </p>
                            <p>- Chocolat intense </p>
                            <p>- Red Velvet (légèrement cacaoté avec une touche acidulée)  </p>
                            <p>- Matcha (délicatement parfumé au thé vert)</p>
                        </div>
                        <div className='modal-content-p'>
                            <p>
                                🍓 <span>Sélectionnez votre garniture :</span>  
                                Ajoutez une touche gourmande à votre gâteau en choisissant parmi :  
                            </p>
                            <p>- Crème pâtissière vanille ou chocolat</p>
                            <p>- Mousse légère aux fruits rouges, mangue ou passion </p>
                            <p>- Ganache au chocolat noir, lait ou blanc</p>
                            <p>- Confiture maison (framboise, abricot, fraise) </p>
                            <p>- Pâte à tartiner pralinée</p>
                        </div>
                        <div className='modal-content-p'>
                            <p>
                                🎨 <span>Personnalisation et décoration :</span>  
                                Rendez votre Bento Cake unique avec des finitions sur mesure : 
                            </p>
                            <p>- Ganache montée (chocolat, vanille)</p>
                            <p>- Écriture en glaçage (message personnalisé)</p>
                            <p>- Décor en fruits frais ou secs</p>
                            <p>- Perles et éclats de chocolat</p>
                            <p>- Fleurs comestibles</p>
                            <p>- Paillettes alimentaires et dorures</p>
                        </div>
                        <div className='modal-content-p'>
                            <p>
                                <span>🎉 Options supplémentaires :</span>  
                            </p>
                            <p>- Ajout d’un insert gourmand (cœur coulant caramel, praliné ou chocolat)</p>
                            <p>- Emballage cadeau élégant avec carte personnalisée</p>
                            <p>- Option sans gluten ou vegan disponible sur demande </p>
                        </div>
                    </div>
                </div>
                    <button className='modal-content-button' onClick={toggleModal}>Fermer</button>
            </div>
        </div>
    </>
    
}

export default ComposentsGateauxModal