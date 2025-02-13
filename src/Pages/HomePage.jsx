import React from 'react'
import HeroComponent from '../Components/HeroComponent'
import EvenementsComponent from '../Components/EvenementsComponent'
import RealisationClientsComponent from '../Components/RealisationClientsComponent'
import AboutUsComponent from '../Components/AboutUsComponent'
import ContactComponent from '../Components/ContactComponent'

function HomePage() {
    return <>
        <body>
            <main>
                {/* <h1>Home Page</h1> */}
                <HeroComponent/>
                <EvenementsComponent/>
                <RealisationClientsComponent/>
                <AboutUsComponent/>
                <ContactComponent/>
            </main>
        </body>
    </>
}

export default HomePage