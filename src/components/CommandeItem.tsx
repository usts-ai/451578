import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Commande } from '../data/mockData';

interface CommandeItemProps {
  commande: Commande;
  index: number;
}

const CommandeItem: React.FC<CommandeItemProps> = ({ commande, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'En cours':
        return 'bg-blue-100 text-blue-700';
      case 'Terminée':
        return 'bg-green-100 text-green-700';
      case 'Annulée':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div 
        className="p-3 md:p-4 cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center mb-1 md:mb-2">
          <h3 className="font-bold text-gray-800 text-sm md:text-base">{commande.cafe}</h3>
          <span className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${getStatusColor(commande.statut)}`}>
            {commande.statut}
          </span>
        </div>
        <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">{commande.date}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs md:text-sm">
            {commande.items.length} {commande.items.length > 1 ? 'articles' : 'article'}
          </span>
          <div className="flex items-center">
            <span className="font-bold text-orange-500 mr-2 text-sm md:text-base">{commande.total.toFixed(2)}€</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 md:h-5 md:w-5 text-gray-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-100 px-3 md:px-4 py-2 md:py-3"
        >
          <h4 className="font-medium text-gray-700 text-xs md:text-sm mb-2">Détails de la commande</h4>
          <ul className="space-y-1 md:space-y-2 mb-3">
            {commande.items.map((item, idx) => (
              <li key={idx} className="flex justify-between text-xs md:text-sm">
                <span>
                  {item.quantite} x {item.nom}
                </span>
                <span className="text-gray-700 font-medium">{(item.prix * item.quantite).toFixed(2)}€</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-100 pt-2 flex justify-between text-xs md:text-sm font-bold">
            <span>Total</span>
            <span className="text-orange-500">{commande.total.toFixed(2)}€</span>
          </div>
          {commande.statut === 'En cours' && (
            <div className="mt-3 md:mt-4 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-xs md:text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                Suivre ma commande
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CommandeItem;
