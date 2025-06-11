import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import FilterSidebar from './FilterSidebar';
import CookCard from './CookCard';
import CookProfile from './CookProfile';
import { Cook, FilterPosition } from '../types';
import { cooks } from '../data/mockData';

export default function CooksPage() {
  const [selectedCook, setSelectedCook] = useState<Cook | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<FilterPosition>('all');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCooks = useMemo(() => {
    return cooks.filter(cook => {
      const matchesPosition = selectedPosition === 'all' || cook.position === selectedPosition;
      const matchesCity = !selectedCity || cook.city === selectedCity;
      const matchesSearch = !searchQuery || 
        cook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cook.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesPosition && matchesCity && matchesSearch;
    });
  }, [selectedPosition, selectedCity, searchQuery]);

  if (selectedCook) {
    return <CookProfile cook={selectedCook} onBack={() => setSelectedCook(null)} />;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-64 flex-shrink-0">
        <FilterSidebar
          selectedPosition={selectedPosition}
          selectedCity={selectedCity}
          onPositionChange={setSelectedPosition}
          onCityChange={setSelectedCity}
        />
      </div>
      
      <div className="flex-1">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredCooks.length} Professional Cooks Found
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCooks.map((cook) => (
            <CookCard
              key={cook.id}
              cook={cook}
              onClick={() => setSelectedCook(cook)}
            />
          ))}
        </div>

        {filteredCooks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No cooks found</div>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}