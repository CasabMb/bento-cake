import React, { useState } from 'react';
import '../CSS/StyleHero.css';
import cake_fraise from '../assets/images/cake-vanille-fraise.webp';
import ComposentsGateauxModal from './Modal/ComposentsGateauxModal';

function HeroComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return <>
        <section className='bento-box'>
            <div className='card'>
                <div className='imgBox'>
                    <h1 data-aos="fade-right" data-aos-duration="1400">La dolce Bento Cake Atelier</h1>
                    <p>Décorez votre propre bento cake sous la guidance d'un chef pâtissier expérimenté, dans une ambiance conviviale.</p>
                    <div className='imgBox-img'>
                        <img src={cake_fraise} alt="bento cake avec des morceaux de fraises fraiches" />
                    </div>
                </div>
                <div className='content'>
                    <span className='title'>
                        <a onClick={toggleModal}> Bento Cake lover</a>
                    </span>
                    <p className='content-p'>Découvrez les compositions au choix pour vos futurs gâteaux : des bases moelleuses de génoise à la vanille ou au chocolat, garnies de mousses légères aux fruits, au chocolat et autres. Vous pourrez également rajouter des fruit pour plus de gourmandises. Ajoutez votre touche finale avec des décorations personnalisées pour des créations gourmandes et élégantes.</p>
                    <p className='content-p-2'>Découvrez les compositions au choix pour vos futurs gâteaux</p>
                </div>
                <div className='box-3' data-aos="fade-left" data-aos-duration="1400">
                    
                </div>
            </div>
            <ComposentsGateauxModal isOpen={isOpen} toggleModal={toggleModal} />
        </section>
    </>
}

export default HeroComponent