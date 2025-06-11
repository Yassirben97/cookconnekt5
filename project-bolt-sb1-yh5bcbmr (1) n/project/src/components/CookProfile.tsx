import { ArrowLeft, MapPin, Star, Clock, Mail, Phone, Award, MessageCircle, CheckCircle } from 'lucide-react';
import { Cook } from '../types';
import { formatMoroccanPhone } from '../data/mockData';

interface CookProfileProps {
  cook: Cook;
  onBack: () => void;
}

export default function CookProfile({ cook, onBack }: CookProfileProps) {
  const formatPosition = (position: string) => {
    return position.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Cooks</span>
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="relative h-64 bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full flex items-end p-8">
            <div className="flex items-end space-x-6">
              <img
                src={cook.photo}
                alt={cook.name}
                className="w-32 h-32 rounded-xl border-4 border-white shadow-lg object-cover"
              />
              <div className="text-white pb-2">
                <h1 className="text-3xl font-bold mb-2">{cook.name}</h1>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-5 w-5" />
                    <span>{cook.city}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span>{cook.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-5 w-5" />
                    <span>{cook.experience} years experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">{cook.bio}</p>
              </div>

              {/* Work History */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h2>
                <div className="space-y-4">
                  {cook.workHistory.map((work, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{work.position}</h3>
                          <p className="text-orange-600 font-medium">{work.restaurant}</p>
                          <p className="text-sm text-gray-600">{work.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{work.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dishes Portfolio */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Signature Dishes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cook.dishes.map((dish) => (
                    <div key={dish.id} className="bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{dish.name}</h3>
                        <p className="text-gray-600 text-sm">{dish.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Position & Skills */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Position</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span className="font-medium text-gray-900">{formatPosition(cook.position)}</span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {cook.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-5 w-5" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-mono">{formatMoroccanPhone(cook.phone)}</span>
                        {cook.phoneVerified && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                      <span className="text-xs text-gray-500">Phone</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MessageCircle className="h-5 w-5" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-mono">{formatMoroccanPhone(cook.whatsapp)}</span>
                        {cook.whatsappVerified && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                      <span className="text-xs text-gray-500">WhatsApp</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">Available upon request</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  Contact Cook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}