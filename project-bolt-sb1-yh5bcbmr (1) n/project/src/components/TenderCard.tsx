import { MapPin, Clock, DollarSign, Eye, EyeOff, Calendar } from 'lucide-react';
import { Tender } from '../types';

interface TenderCardProps {
  tender: Tender;
}

export default function TenderCard({ tender }: TenderCardProps) {
  const formatPosition = (position: string) => {
    return position.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isUrgent = () => {
    const deadline = new Date(tender.deadline);
    const now = new Date();
    const daysLeft = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysLeft <= 7;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{tender.title}</h3>
            {isUrgent() && (
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                Urgent
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            {tender.isAnonymous ? (
              <div className="flex items-center space-x-1">
                <EyeOff className="h-4 w-4" />
                <span className="text-sm">{tender.restaurant}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium text-gray-900">{tender.restaurant}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{tender.city}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <DollarSign className="h-4 w-4" />
          <span className="text-sm">{tender.salary}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full font-medium">
          {formatPosition(tender.position)}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{tender.description}</p>

      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-medium text-gray-900">Requirements:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {tender.requirements.slice(0, 2).map((req, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-emerald-500 mt-1">•</span>
              <span>{req}</span>
            </li>
          ))}
          {tender.requirements.length > 2 && (
            <li className="text-emerald-600 text-xs">+{tender.requirements.length - 2} more requirements</li>
          )}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>Posted {formatDate(tender.postedDate)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>Deadline {formatDate(tender.deadline)}</span>
          </div>
        </div>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}