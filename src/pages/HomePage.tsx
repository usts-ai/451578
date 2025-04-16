import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CafeCard from '../components/CafeCard';
import PromotionCard from '../components/PromotionCard';
import { cafesProches, promotions, pointsFidelite } from '../data/mockData';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMap, setShowMap] = useState(false);

  // Simuler un délai de chargement pour l'effet visuel
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filtrer les cafés en fonction du terme de recherche
  const filteredCafes = cafesProches.filter(cafe => 
    cafe.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cafe.adresse.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cafe.specialites.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] md:h-[70vh] md:min-h-[500px] bg-gradient-to-r from-amber-400 to-orange-500 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.2) contrast(1.1)'
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl md:max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Découvrez les meilleurs cafés près de chez vous
            </h1>
            <p className="text-white text-base md:text-xl mb-6 md:mb-8 opacity-90">
              Commandez en avance, évitez les files d'attente et savourez votre pause café préférée dans les meilleurs établissements de la ville.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-orange-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow text-base sm:text-lg"
              >
                Trouver un café
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow text-base sm:text-lg"
              >
                Commander maintenant
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Barre de recherche - Repositionnée en dehors de la section hero */}
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-4 md:p-5 mt-6 md:mt-8 mb-6 md:mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Rechercher un café, un lieu..."
                className="pl-12 pr-4 py-3 md:py-4 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm md:text-base shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mt-3 md:mt-0 md:ml-4 flex space-x-2">
              <button 
                onClick={() => setShowMap(false)}
                className={`px-4 md:px-5 py-2 md:py-3 rounded-lg font-medium text-sm md:text-base ${!showMap ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Liste
              </button>
              <button 
                onClick={() => setShowMap(true)}
                className={`px-4 md:px-5 py-2 md:py-3 rounded-lg font-medium text-sm md:text-base ${showMap ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Carte
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 pb-10 md:pb-12">
        {/* Programme de fidélité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-md p-4 md:p-6 mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-5 md:mb-0 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Programme de Fidélité</h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">Accumulez des points à chaque commande et échangez-les contre des récompenses exclusives.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 md:px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow text-sm md:text-base"
              >
                Voir mes récompenses
              </motion.button>
            </div>
            <div className="w-full md:w-auto">
              <div className="bg-white rounded-xl shadow-sm p-4 w-full md:w-72">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-700">Mes Points</h3>
                  <span className="text-2xl font-bold text-orange-500">{pointsFidelite}</span>
                </div>
                <div className="bg-gray-100 rounded-full h-3 md:h-4 mb-2">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 md:h-4 rounded-full"
                    style={{ width: `${Math.min((pointsFidelite / 500) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 text-center">Encore {500 - (pointsFidelite % 500)} points pour débloquer une nouvelle récompense</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Promotions */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Promotions en cours</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {promotions.slice(0, 2).map((promo, index) => (
              <PromotionCard key={promo.id} promotion={promo} index={index} />
            ))}
          </div>
        </section>

        {/* Cafés à proximité */}
        <section>
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Cafés à proximité</h2>
            <button className="text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base">Voir tout</button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg h-80 animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
                    <div className="h-10 bg-gray-200 rounded mb-3"></div>
                    <div className="flex justify-between">
                      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {showMap ? (
                <div className="col-span-full bg-white rounded-lg shadow-lg overflow-hidden h-[350px] md:h-[500px]">
                  <div className="relative h-full w-full bg-gray-100 flex items-center justify-center">
                    <div className="flex flex-col items-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-lg md:text-xl font-medium">Carte interactive</p>
                      <p className="text-sm md:text-base text-center px-4">Les cafés à proximité s'afficheraient ici</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {filteredCafes.length > 0 ? (
                    filteredCafes.map((cafe, index) => (
                      <CafeCard key={cafe.id} cafe={cafe} delay={index} />
                    ))
                  ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-10 bg-white rounded-lg shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-1">Aucun café trouvé</h3>
                      <p className="text-gray-500 text-sm md:text-base text-center">Aucun café ne correspond à votre recherche "{searchTerm}"</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
