import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import NavComponent from './Components/NavComponent.jsx';
import './App.css';
import FooterComponent from './Components/FooterComponent.jsx';
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter  basename="/bento-cake">
        <NavComponent/>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
        <FooterComponent/>
        <ScrollToTopButton/>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
