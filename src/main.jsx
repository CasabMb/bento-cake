import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import NavComponent from './Components/NavComponent.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
      <NavComponent/>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
