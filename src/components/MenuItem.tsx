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
      <div className="relative h-36 md:w-1/3 md:h-auto overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.nom} 
          className="w-full h-full object-cover"
        />
        {item.populaire && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Populaire
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800">{item.nom}</h3>
            <span className="font-bold text-orange-500">{item.prix.toFixed(2)}€</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {item.categorie}
          </span>
        </div>
        <div className="flex justify-end mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            Ajouter
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
