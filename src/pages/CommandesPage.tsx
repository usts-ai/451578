import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CommandeItem from '../components/CommandeItem';
import { historique, pointsFidelite } from '../data/mockData';

const CommandesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'en-cours' | 'historique'>('en-cours');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Filtrer les commandes par statut
  const commandesEnCours = historique.filter(cmd => cmd.statut === 'En cours');
  const commandesHistorique = historique.filter(cmd => cmd.statut !== 'En cours');

  // Simuler un délai de chargement pour l'effet visuel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-12">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Mes Commandes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 max-w-2xl"
          >
            Suivez vos commandes en cours et consultez votre historique de commandes. Chaque commande vous rapporte des points pour notre programme fidélité !
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Carte de fidélité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-amber-100"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Mes Points Fidélité</h2>
              <p className="text-gray-600 text-sm">Accumulez des points à chaque commande pour échanger contre des récompenses.</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <span className="text-3xl font-bold text-orange-500">{pointsFidelite}</span>
                <span className="ml-2 text-gray-500">points</span>
              </div>
              <div className="bg-gray-100 rounded-full h-3 w-full md:w-64">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((pointsFidelite / 500) * 100, 100)}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Encore {500 - (pointsFidelite % 500)} points pour la prochaine récompense</p>
            </div>
          </div>
        </motion.div>

        {/* Onglets de commandes */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('en-cours')}
              className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'en-cours' 
                  ? 'border-orange-500 text-orange-500' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Commandes en cours ({commandesEnCours.length})
            </button>
            <button
              onClick={() => setActiveTab('historique')}
              className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors ${
                activeTab === 'historique' 
                  ? 'border-orange-500 text-orange-500' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Historique ({commandesHistorique.length})
            </button>
          </div>
        </div>

        {/* Contenu des onglets */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md animate-pulse h-32">
                  <div className="p-4">
                    <div className="flex justify-between mb-3">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-200 rounded w-1/5"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'en-cours' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'en-cours' ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {activeTab === 'en-cours' ? (
                commandesEnCours.length > 0 ? (
                  commandesEnCours.map((commande, index) => (
                    <CommandeItem key={commande.id} commande={commande} index={index} />
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">Aucune commande en cours</h3>
                      <p className="text-gray-500 mb-4">Explorez nos cafés partenaires et passez une commande dès maintenant !</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
                      >
                        Découvrir les cafés
                      </motion.button>
                    </div>
                  </div>
                )
              ) : (
                commandesHistorique.length > 0 ? (
                  commandesHistorique.map((commande, index) => (
                    <CommandeItem key={commande.id} commande={commande} index={index} />
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">Votre historique est vide</h3>
                      <p className="text-gray-500 mb-4">Vous n'avez pas encore effectué de commande.</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
                      >
                        Commander maintenant
                      </motion.button>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trier et filtrer - UI supplémentaire */}
        {!isLoading && activeTab === 'historique' && commandesHistorique.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-medium text-gray-700 mb-1">Filtrer par</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    Tous
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Ce mois
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    3 derniers mois
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Trier par</h3>
                <select className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border-none focus:ring-2 focus:ring-orange-400">
                  <option>Plus récent d'abord</option>
                  <option>Plus ancien d'abord</option>
                  <option>Montant (croissant)</option>
                  <option>Montant (décroissant)</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CommandesPage;
