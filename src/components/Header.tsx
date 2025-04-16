import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="text-2xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            CaféConnect
          </Link>
        </motion.div>

        {/* Menu pour desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-amber-200 transition-colors font-medium">Accueil</Link>
          <Link to="/menu" className="hover:text-amber-200 transition-colors font-medium">Menus</Link>
          <Link to="/commandes" className="hover:text-amber-200 transition-colors font-medium">Mes Commandes</Link>
          <Link to="/fidelite" className="hover:text-amber-200 transition-colors font-medium">Programme Fidélité</Link>
        </div>

        {/* Icônes */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center font-bold"
          >
            JP
          </motion.div>
        </div>

        {/* Bouton menu mobile */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-amber-700"
        >
          <div className="flex flex-col px-4 py-2 space-y-3">
            <Link to="/" className="py-2" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/menu" className="py-2" onClick={() => setIsMenuOpen(false)}>Menus</Link>
            <Link to="/commandes" className="py-2" onClick={() => setIsMenuOpen(false)}>Mes Commandes</Link>
            <Link to="/fidelite" className="py-2" onClick={() => setIsMenuOpen(false)}>Programme Fidélité</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
