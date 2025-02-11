import React from 'react';
import '../CSS/StyleHero.css';
import cake_fraise from '../assets/images/cake-vanille-fraise.webp';

function HeroComponent() {
    return <>
        <section className='bento-box'>
            <div className='card'>
                <div className='imgBox'>
                    <h1>Ultimate Bento Cakes Paris</h1>
                    <p>Apprenez à réaliser votre propre bento cake sous la guidance d'un chef pâtissier expérimenté, dans une ambiance conviviale.</p>
                    <div className='imgBox-img'>
                        <img src={cake_fraise} alt="bento cake avec des morceaux de fraises fraiches" />
                    </div>
                </div>
                <div className='content'>
                    <span className='title'>
                        <a> Bento Cake lover</a>
                    </span>
                    <p>Découvrez les compositions au choix pour vos futurs gâteaux : des bases moelleuses de génoise à la vanille ou au chocolat, garnies de mousses légères aux fruits, au chocolat ou encore d'une délicieuse crème pâtissière. Vous pourrez également rajouter des fruit pour plus de gourmandises. Ajoutez votre touche finale avec des décorations personnalisées pour des créations gourmandes et élégantes.</p>
                </div>
                <div className='box-3'>
                    
                </div>
            </div>
        </section>
    </>
}

export default HeroComponent