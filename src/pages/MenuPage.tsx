import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from '../components/MenuItem';
import { cafesProches, menuItems } from '../data/mockData';

const MenuPage: React.FC = () => {
  const { cafeId } = useParams<{ cafeId: string }>();
  const cafe = cafesProches.find(c => c.id === cafeId) || cafesProches[0];
  
  const [activeCategory, setActiveCategory] = useState<string>('Tout');
  const [cartCount, setCartCount] = useState<number>(0);
  const [showCartPreview, setShowCartPreview] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Catégories disponibles dans le menu
  const categories = ['Tout', ...Array.from(new Set(menuItems.map(item => item.categorie)))];

  // Filtrer les éléments du menu par catégorie
  const filteredItems = activeCategory === 'Tout' 
    ? menuItems 
    : menuItems.filter(item => item.categorie === activeCategory);

  // Simuler un délai de chargement pour l'effet visuel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Gérer l'affichage du panier
  useEffect(() => {
    if (cartCount > 0) {
      setShowCartPreview(true);
      const timer = setTimeout(() => {
        setShowCartPreview(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  // Ajouter un élément au panier (simulation)
  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* En-tête du café */}
      <div className="relative">
        <div className="h-48 md:h-64 bg-gradient-to-r from-amber-400 to-orange-500 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{ 
              backgroundImage: `url(${cafe.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="container mx-auto px-4 md:px-6 h-full flex items-end pb-4 md:pb-6 relative z-10">
            <div className="text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold mb-1"
              >
                {cafe.nom}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/90 text-sm md:text-base mb-2 md:mb-3"
              >
                {cafe.adresse}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                <span className="bg-white/20 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {cafe.horaires}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {cafe.note} / 5
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Navigation des catégories */}
        <div className="mb-6 md:mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 pb-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap text-xs md:text-sm ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Items du menu */}
        {isLoading ? (
          <div className="grid gap-4 md:gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                <div className="flex flex-col md:flex-row">
                  <div className="h-32 md:h-36 md:w-1/3 bg-gray-200"></div>
                  <div className="p-3 md:p-4 flex-grow">
                    <div className="flex justify-between mb-2">
                      <div className="h-4 md:h-5 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 md:h-5 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="h-3 md:h-4 bg-gray-200 rounded w-full mb-3"></div>
                    <div className="h-3 md:h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-5 md:h-6 bg-gray-200 rounded w-24 mt-auto ml-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 md:gap-6"
            >
              {filteredItems.map((item, index) => (
                <div key={item.id} onClick={addToCart}>
                  <MenuItem item={item} index={index} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Panier flottant */}
      <AnimatePresence>
        {showCartPreview && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-6 right-4 left-4 md:left-auto md:right-6 md:w-80 bg-white rounded-lg shadow-xl p-3 md:p-4 z-50"
          >
            <div className="flex justify-between items-center mb-2 md:mb-3">
              <h3 className="font-bold text-gray-800 text-base md:text-lg">Mon Panier</h3>
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium">{cartCount} articles</span>
            </div>
            <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">Article ajouté au panier</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-2 md:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm md:text-base font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              Voir mon panier
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de panier fixe */}
      {cartCount > 0 && !showCartPreview && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-40"
          onClick={() => setShowCartPreview(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-white text-orange-500 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        </motion.button>
      )}
    </div>
  );
};

export default MenuPage;
