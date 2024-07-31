import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Logements from './pages/Logements';
import Apropos from './pages/A-propos';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);