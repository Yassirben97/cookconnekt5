import { Search, Plus } from 'lucide-react';
import TenderCard from './TenderCard';
import { tenders, moroccanCities } from '../data/mockData';

export default function TendersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  const filteredTenders = useMemo(() => {
    return tenders.filter(tender => {
      const matchesSearch = !searchQuery || 
        tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.restaurant.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCity = !selectedCity || tender.city === selectedCity;
      const matchesPosition = !selectedPosition || tender.position === selectedPosition;
      
      return matchesSearch && matchesCity && matchesPosition;
    });
  }, [searchQuery, selectedCity, selectedPosition]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Tenders</h1>
            <p className="text-gray-600">Discover exciting opportunities in the culinary industry</p>
          </div>
          <button className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors mt-4 lg:mt-0">
            <Plus className="h-5 w-5" />
            <span>Post a Job</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Cities</option>
            {moroccanCities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">All Positions</option>
            <option value="chef">Chef</option>
            <option value="sous-chef">Sous Chef</option>
            <option value="cook">Cook</option>
            <option value="commis">Commis</option>
            <option value="intern">Intern</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          {filteredTenders.length} Job{filteredTenders.length !== 1 ? 's' : ''} Available
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTenders.map((tender) => (
          <TenderCard key={tender.id} tender={tender} />
        ))}
      </div>

      {filteredTenders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No job tenders found</div>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
}
