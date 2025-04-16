import React from 'react';
import { motion } from 'framer-motion';
import { Cafe } from '../data/mockData';
import { Link } from 'react-router-dom';

interface CafeCardProps {
  cafe: Cafe;
  delay?: number;
}

const CafeCard: React.FC<CafeCardProps> = ({ cafe, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img 
          src={cafe.imageUrl} 
          alt={cafe.nom} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
          <span className="text-white font-bold text-sm md:text-base">{cafe.distance}</span>
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-xs md:text-sm font-medium">{cafe.note}</span>
        </div>
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{cafe.nom}</h3>
        <p className="text-gray-600 text-xs md:text-sm mb-2">{cafe.adresse}</p>
        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {cafe.horaires}
        </div>
        <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 h-8 md:h-10">{cafe.description}</p>
        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
          {cafe.specialites.slice(0, 3).map((spec, index) => (
            <span 
              key={index}
              className="px-1.5 md:px-2 py-0.5 md:py-1 bg-amber-100 text-amber-800 text-[10px] md:text-xs rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link 
            to={`/cafe/${cafe.id}/menu`}
            className="text-orange-500 font-medium text-xs md:text-sm hover:text-orange-600 transition-colors"
          >
            Voir le menu
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-xs md:text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            Commander
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CafeCard;
