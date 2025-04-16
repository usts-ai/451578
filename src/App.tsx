import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CommandesPage from './pages/CommandesPage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cafe/:cafeId/menu" element={<MenuPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/commandes" element={<CommandesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
