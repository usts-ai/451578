import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem as MenuItemType } from '../data/mockData';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
    >
      <div className="relative h-32 md:h-36 md:w-1/3 md:h-auto overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.nom} 
          className="w-full h-full object-cover"
        />
        {item.populaire && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
            Populaire
          </div>
        )}
      </div>
      <div className="p-3 md:p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1 md:mb-2">
            <h3 className="text-base md:text-lg font-bold text-gray-800">{item.nom}</h3>
            <span className="font-bold text-orange-500 text-sm md:text-base">{item.prix.toFixed(2)}€</span>
          </div>
          <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">{item.description}</p>
          <span className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-100 text-gray-700 text-[10px] md:text-xs rounded-full">
            {item.categorie}
          </span>
        </div>
        <div className="flex justify-end mt-2 md:mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 md:px-4 py-1 md:py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs md:text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            Ajouter
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
