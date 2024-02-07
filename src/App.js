// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation';
import './App.css';

// Import pages you have completed:
import Portfolio from './pages/Portfolio';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <header className="App-header">
          <p>

          </p>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              <Route path='portfolio' element={<Portfolio />} />  
              <Route path="about" element={<AboutPage />} />    
              <Route path="contact" element={<ContactPage />} />  

            </Routes>
          </section>
        </main>

        <footer>
        <p>@copy; Evan Liu</p>
      </footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
