
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Catering from './pages/Catering';
import Reservations from './pages/Reservations';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen selection:bg-orange-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </main>
        <ChatAssistant />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
