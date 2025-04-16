import React from 'react';
import { motion } from 'framer-motion';
import { Promotion } from '../data/mockData';

interface PromotionCardProps {
  promotion: Promotion;
  index: number;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
    >
      <div className="relative h-48 md:w-2/5 md:h-auto overflow-hidden">
        <img 
          src={promotion.imageUrl} 
          alt={promotion.titre} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800">{promotion.titre}</h3>
            <span className="font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">{promotion.reduction}</span>
          </div>
          <p className="text-gray-700 mb-4">{promotion.description}</p>
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-gray-600">Code promotion:</span>
            <span className="ml-2 px-3 py-1 bg-white text-orange-600 font-bold rounded border border-orange-200">{promotion.code}</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">Validité: {promotion.validite}</p>
        </div>
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Utiliser maintenant
          </motion.button>
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Détails
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PromotionCard;
