export interface Cook {
  id: string;
  name: string;
  position: 'chef' | 'cook' | 'sous-chef' | 'commis' | 'intern';
  city: string;
  photo: string;
  experience: number;
  rating: number;
  specialties: string[];
  bio: string;
  phone: string;
  whatsapp: string;
  phoneVerified: boolean;
  whatsappVerified: boolean;
  verificationCode?: string;
  dishes: {
    id: string;
    name: string;
    image: string;
    description: string;
    status: 'pending' | 'approved' | 'rejected';
    rejectionReason?: string;
  }[];
  workHistory: {
    restaurant: string;
    position: string;
    period: string;
    description: string;
  }[];
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
}

export interface Tender {
  id: string;
  title: string;
  restaurant: string;
  isAnonymous: boolean;
  city: string;
  position: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  deadline: string;
  contactEmail: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
}

export type FilterPosition = 'all' | 'chef' | 'cook' | 'sous-chef' | 'commis' | 'intern';

export interface Admin {
  id: string;
  username: string;
  email: string;
  role: 'super-admin' | 'moderator';
  createdAt: string;
  lastLogin?: string;
}

export interface ModerationStats {
  pendingCooks: number;
  pendingTenders: number;
  totalApproved: number;
  totalRejected: number;
}

export interface PhoneVerificationRequest {
  cookId: string;
  phone: string;
  whatsapp: string;
  verificationCode: string;
  requestedAt: string;
  verified: boolean;
}