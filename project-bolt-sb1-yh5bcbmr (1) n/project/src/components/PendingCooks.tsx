import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, MapPin, Clock, Phone, MessageCircle, Image, AlertCircle } from 'lucide-react';
import { Cook } from '../types';
import { pendingCooks, validateMoroccanPhone, formatMoroccanPhone } from '../data/mockData';
import CookProfile from './CookProfile';

export default function PendingCooks() {
  const [selectedCook, setSelectedCook] = useState<Cook | null>(null);
  const [cooks, setCooks] = useState<Cook[]>(pendingCooks);
  const [dishApprovals, setDishApprovals] = useState<{[cookId: string]: {[dishId: string]: 'approved' | 'rejected' | 'pending'}}>({});

  const handleApproveCook = (cookId: string) => {
    const cook = cooks.find(c => c.id === cookId);
    if (!cook) return;

    // Check if all dishes have been reviewed
    const cookDishApprovals = dishApprovals[cookId] || {};
    const unreviewedDishes = cook.dishes.filter(dish => !cookDishApprovals[dish.id]);
    
    if (unreviewedDishes.length > 0) {
      alert(`Please review all ${cook.dishes.length} dish photos before approving the cook profile.`);
      return;
    }

    setCooks(cooks.filter(cook => cook.id !== cookId));
    console.log(`Approved cook ${cookId} with all dishes`);
  };

  const handleRejectCook = (cookId: string, reason: string) => {
    setCooks(cooks.filter(cook => cook.id !== cookId));
    console.log(`Rejected cook ${cookId} with reason: ${reason}`);
  };

  const handleDishApproval = (cookId: string, dishId: string, status: 'approved' | 'rejected', reason?: string) => {
    setDishApprovals(prev => ({
      ...prev,
      [cookId]: {
        ...prev[cookId],
        [dishId]: status
      }
    }));
    
    if (status === 'rejected' && reason) {
      console.log(`Rejected dish ${dishId} for cook ${cookId} with reason: ${reason}`);
    } else {
      console.log(`${status} dish ${dishId} for cook ${cookId}`);
    }
  };

  const formatPosition = (position: string) => {
    return position.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getDishApprovalStatus = (cookId: string, dishId: string) => {
    return dishApprovals[cookId]?.[dishId] || 'pending';
  };

  const getApprovalProgress = (cook: Cook) => {
    const cookDishApprovals = dishApprovals[cook.id] || {};
    const reviewedCount = cook.dishes.filter(dish => cookDishApprovals[dish.id]).length;
    return { reviewed: reviewedCount, total: cook.dishes.length };
  };

  if (selectedCook) {
    return (
      <div>
        <button
          onClick={() => setSelectedCook(null)}
          className="mb-4 text-orange-600 hover:text-orange-700 font-medium"
        >
          ← Back to Pending Cooks
        </button>
        <CookProfile cook={selectedCook} onBack={() => setSelectedCook(null)} />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Pending Cook Profiles</h2>
        <p className="text-gray-600">Review cook profiles and approve all dish photos before final approval</p>
      </div>

      {cooks.length === 0 ? (
        <div className="text-center py-12">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
          <p className="text-gray-600">No pending cook profiles to review.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {cooks.map((cook) => {
            const progress = getApprovalProgress(cook);
            const allDishesReviewed = progress.reviewed === progress.total;
            
            return (
              <div key={cook.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                {/* Cook Basic Info */}
                <div className="flex items-start space-x-6 mb-6">
                  <img
                    src={cook.photo}
                    alt={cook.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{cook.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{cook.city}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{cook.experience} years exp.</span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full font-medium">
                        {formatPosition(cook.position)}
                      </span>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Contact Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">Phone:</span>
                          <span className={`font-mono ${validateMoroccanPhone(cook.phone) ? 'text-green-600' : 'text-red-600'}`}>
                            {formatMoroccanPhone(cook.phone)}
                          </span>
                          {cook.phoneVerified ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">WhatsApp:</span>
                          <span className={`font-mono ${validateMoroccanPhone(cook.whatsapp) ? 'text-green-600' : 'text-red-600'}`}>
                            {formatMoroccanPhone(cook.whatsapp)}
                          </span>
                          {cook.whatsappVerified ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                      </div>
                      {(!validateMoroccanPhone(cook.phone) || !validateMoroccanPhone(cook.whatsapp)) && (
                        <div className="mt-2 text-xs text-red-600">
                          ⚠️ Invalid phone format. Must be +212 followed by 9 digits.
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {cook.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{cook.bio}</p>
                    </div>

                    <div className="text-xs text-gray-500 mb-4">
                      Submitted: {new Date(cook.submittedAt).toLocaleDateString()} at {new Date(cook.submittedAt).toLocaleTimeString()}
                    </div>
                  </div>
                </div>

                {/* Dish Photos Approval Section */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                      <Image className="h-5 w-5" />
                      <span>Dish Photos ({cook.dishes.length})</span>
                    </h4>
                    <div className="text-sm text-gray-600">
                      Progress: {progress.reviewed}/{progress.total} reviewed
                      {allDishesReviewed && (
                        <CheckCircle className="inline h-4 w-4 text-green-500 ml-2" />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {cook.dishes.map((dish) => {
                      const approvalStatus = getDishApprovalStatus(cook.id, dish.id);
                      
                      return (
                        <div key={dish.id} className="bg-gray-50 rounded-lg overflow-hidden border">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-3">
                            <h5 className="font-medium text-gray-900 mb-1">{dish.name}</h5>
                            <p className="text-gray-600 text-xs mb-3">{dish.description}</p>
                            
                            <div className="flex items-center space-x-2">
                              {approvalStatus === 'pending' && (
                                <>
                                  <button
                                    onClick={() => handleDishApproval(cook.id, dish.id, 'approved')}
                                    className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition-colors"
                                  >
                                    <CheckCircle className="h-3 w-3" />
                                    <span>Approve</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      const reason = prompt('Reason for rejecting this dish photo:');
                                      if (reason) handleDishApproval(cook.id, dish.id, 'rejected', reason);
                                    }}
                                    className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600 transition-colors"
                                  >
                                    <XCircle className="h-3 w-3" />
                                    <span>Reject</span>
                                  </button>
                                </>
                              )}
                              
                              {approvalStatus === 'approved' && (
                                <span className="flex items-center space-x-1 text-green-600 text-xs">
                                  <CheckCircle className="h-3 w-3" />
                                  <span>Approved</span>
                                </span>
                              )}
                              
                              {approvalStatus === 'rejected' && (
                                <span className="flex items-center space-x-1 text-red-600 text-xs">
                                  <XCircle className="h-3 w-3" />
                                  <span>Rejected</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Final Approval Actions */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCook(cook)}
                      className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Full Profile</span>
                    </button>
                    
                    <div className="flex items-center space-x-3">
                      {!allDishesReviewed && (
                        <div className="text-sm text-amber-600 flex items-center space-x-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>Review all dishes first</span>
                        </div>
                      )}
                      
                      <button
                        onClick={() => handleApproveCook(cook.id)}
                        disabled={!allDishesReviewed}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          allDishesReviewed
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span>Approve Cook & All Dishes</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          const reason = prompt('Please provide a reason for rejection:');
                          if (reason) handleRejectCook(cook.id, reason);
                        }}
                        className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                      >
                        <XCircle className="h-4 w-4" />
                        <span>Reject Profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}