import { MapPin, Star, Clock } from 'lucide-react';
import { Cook } from '../types';

interface CookCardProps {
  cook: Cook;
  onClick: () => void;
}

export default function CookCard({ cook, onClick }: CookCardProps) {
  const getPositionIcon = (position: string) => {
    switch (position) {
      case 'chef':
        return '👨‍🍳';
      case 'sous-chef':
        return '🔥';
      case 'cook':
        return '🍳';
      case 'commis':
        return '🥄';
      case 'intern':
        return '📚';
      default:
        return '👨‍🍳';
    }
  };

  const formatPosition = (position: string) => {
    return position.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative">
        <img
          src={cook.photo}
          alt={cook.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
          {getPositionIcon(cook.position)} {formatPosition(cook.position)}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span>{cook.rating}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-500 transition-colors">
              {cook.name}
            </h3>
            <div className="flex items-center space-x-1 text-gray-600 text-sm mt-1">
              <MapPin className="h-4 w-4" />
              <span>{cook.city}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{cook.experience} years exp.</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {cook.specialties.slice(0, 3).map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">{cook.bio}</p>
      </div>
    </div>
  );
}
