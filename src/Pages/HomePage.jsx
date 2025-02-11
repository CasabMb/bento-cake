import React from 'react'
import HeroComponent from '../Components/HeroComponent'
import EvenementsComponent from '../Components/EvenementsComponent'
import RealisationClientsComponent from '../Components/RealisationClientsComponent'

function HomePage() {
    return <>
        <body>
            <main>
                {/* <h1>Home Page</h1> */}
                <HeroComponent/>
                <EvenementsComponent/>
                <RealisationClientsComponent/>
            </main>
        </body>
    </>
}

export default HomePage