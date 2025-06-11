import React from 'react';
import { Filter, MapPin, Briefcase } from 'lucide-react';
import { FilterPosition } from '../types';
import { moroccanCities } from '../data/mockData';

interface FilterSidebarProps {
  selectedPosition: FilterPosition;
  selectedCity: string;
  onPositionChange: (position: FilterPosition) => void;
  onCityChange: (city: string) => void;
}

const positions = [
  { value: 'all' as FilterPosition, label: 'All Positions' },
  { value: 'chef' as FilterPosition, label: 'Chef' },
  { value: 'sous-chef' as FilterPosition, label: 'Sous Chef' },
  { value: 'cook' as FilterPosition, label: 'Cook' },
  { value: 'commis' as FilterPosition, label: 'Commis' },
  { value: 'intern' as FilterPosition, label: 'Intern' }
];

export default function FilterSidebar({ selectedPosition, selectedCity, onPositionChange, onCityChange }: FilterSidebarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-orange-500" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>
      
      <div className="space-y-6">
        {/* Position Filter */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Briefcase className="h-4 w-4 text-gray-500" />
            <label className="text-sm font-medium text-gray-700">Position</label>
          </div>
          <div className="space-y-2">
            {positions.map((position) => (
              <label key={position.value} className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="position"
                  value={position.value}
                  checked={selectedPosition === position.value}
                  onChange={(e) => onPositionChange(e.target.value as FilterPosition)}
                  className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors">
                  {position.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* City Filter */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <MapPin className="h-4 w-4 text-gray-500" />
            <label className="text-sm font-medium text-gray-700">City</label>
          </div>
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
          >
            <option value="">All Cities</option>
            {moroccanCities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}