import React from 'react'
import HeroComponent from '../Components/HeroComponent'
import EvenementsComponent from '../Components/EvenementsComponent'
import RealisationClientsComponent from '../Components/RealisationClientsComponent'
import AboutUsComponent from '../Components/AboutUsComponent'
import ContactComponent from '../Components/ContactComponent'
import { Helmet } from 'react-helmet-async';


function HomePage() {
    return <>
        <Helmet>
            <title>Bento Cake Atelier - Gâteaux Personnalisés & Événements</title>
            <meta name="description" content="Atelier de bento cakes uniques et personnalisés. Participez à nos ateliers pour découvrir l'art du cake design !" />
            <meta name="keywords" content="bento cake, gâteau personnalisé, atelier pâtisserie, cake design, gâteau anniversaire, pâtisserie créative, EVJF gourmand, atelier bento cake, gâteau sur-mesure, pâtisserie artisanale, gâteau événement, desserts uniques, cake art, atelier cuisine" />

            {/* Google / Search Engine Tags  */}
            <meta itemprop="name" content="Bento Cake Atelier - Gâteaux Personnalisés & Ateliers Gourmands" />
            <meta itemprop="description" content="Découvrez notre atelier spécialisé dans la création de gâteaux uniques et savoureux" />
            <meta itemprop="image" content="https://50a4-2a01-e0a-159-9300-3de2-acc2-b17f-c10.ngrok-free.app/bento-cake/images/La-Dolce-Bento-cake.png
            " />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Facebook Meta Tags  */}
            <meta property="og:url" content="https://50a4-2a01-e0a-159-9300-3de2-acc2-b17f-c10.ngrok-free.app/bento-cake/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Bento Cake Atelier - Gâteaux Personnalisés & Ateliers Gourmands" />
            <meta property="og:description" content="Découvrez notre atelier spécialisé dans la création de gâteaux uniques et savoureux" />
            <meta property="og:image" content="https://50a4-2a01-e0a-159-9300-3de2-acc2-b17f-c10.ngrok-free.app/bento-cake/images/La-Dolce-Bento-cake.png
            " />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Bento Cake Atelier - Gâteaux Personnalisés & Ateliers Gourmands" />
            <meta name="twitter:description" content="Découvrez notre atelier spécialisé dans la création de gâteaux uniques et savoureux" />
            <meta name="twitter:image" content="https://50a4-2a01-e0a-159-9300-3de2-acc2-b17f-c10.ngrok-free.app/bento-cake/images/La-Dolce-Bento-cake.png
            " />    
        </Helmet>
        <main>
            <HeroComponent/>
            <EvenementsComponent/>
            <RealisationClientsComponent/>
            <AboutUsComponent/>
            <ContactComponent/>
        </main>
    </>
}

export default HomePage