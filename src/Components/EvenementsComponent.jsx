import React, { useState } from 'react';
import '../CSS/StyleEvenements.css'
import EvjfModal from './Modal/EvjfModal';

function EvenementsComponent() {

    const [modalOpen, setModalOpen] = useState(null);

    const openModal = (modalName) => {
        setModalOpen(modalName);
    };

    const closeModal = () => {
        setModalOpen(null);
    };
    return <>
        <section className='evenements' id='ateliers'>
            <div className='evenements_boxs'>
                <div className='box_evjf' data-aos="zoom-in-right" data-aos-duration="1400">
                    <h3>EVJF</h3>
                    <p>Organisez un enterrement de vie de jeune fille inoubliable avec un atelier gourmand autour des bento cakes.</p>
                    <button onClick={() => openModal('evjf')}>En savoir plus</button>                
                </div>
                <div className='box_entre_amies' data-aos="zoom-in-left" data-aos-duration="1400">
                    <h3>Entre Amies</h3>
                    <p>Partagez un moment complice entre amies en décorant vos propres bento cakes.</p>
                    <button onClick={() => openModal('entre_amies')}>En savoir plus</button>
                </div>
                <div className='box_description'>
                    <h2>Nous vous proposons plusieurs possibilités de réservations</h2>
                    <p>Découvrez nos ateliers adaptés à chaque événement pour des moments gourmands et conviviaux.</p>
                </div>
                <div className='box_classique' data-aos="zoom-in-right" data-aos-duration="1400">
                    <h3>Atelier classique</h3>
                    <p>Apprenez les bases de la pâtisserie et repartez avec votre délicieux bento cake.</p>
                    <button onClick={() => openModal('classique')}>En savoir plus</button>
                </div>
                <div className='box_prestige' data-aos="zoom-in-left" data-aos-duration="1400">
                    <h3>Atelier Prestige</h3>
                    <p>Une expérience unique avec des techniques avancées et des décorations personnalisées.</p>
                    <button onClick={() => openModal('prestige')}>En savoir plus</button>
                </div>
            </div>
        </section>
            {modalOpen === 'evjf' && <EvjfModal isOpen={true} toggleModal={closeModal} />}
    </>
}

export default EvenementsComponent