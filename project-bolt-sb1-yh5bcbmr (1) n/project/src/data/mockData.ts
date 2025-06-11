import { Cook, Tender, Admin } from '../types';

export const moroccanCities = [
  'Casablanca',
  'Rabat', 
  'Marrakech',
  'Fès',
  'Tangier',
  'Agadir',
  'Meknes',
  'Oujda',
  'Kenitra',
  'Tetouan'
];

// Only approved cooks are shown to public
export const cooks: Cook[] = [
  {
    id: '1',
    name: 'Amina Benali',
    position: 'chef',
    city: 'Casablanca',
    photo: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: 8,
    rating: 4.9,
    specialties: ['Mediterranean', 'Moroccan Traditional', 'French'],
    bio: 'Passionate chef with 8 years of experience in high-end restaurants. Specializes in fusion of traditional Moroccan cuisine with modern European techniques.',
    phone: '+212661234567',
    whatsapp: '+212661234567',
    phoneVerified: true,
    whatsappVerified: true,
    dishes: [
      {
        id: '1',
        name: 'Tagine Royal',
        image: 'https://images.pexels.com/photos/5175085/pexels-photo-5175085.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Traditional Moroccan tagine with lamb and vegetables',
        status: 'approved'
      },
      {
        id: '2', 
        name: 'Modern Pastilla',
        image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Contemporary twist on classic Moroccan pastilla',
        status: 'approved'
      }
    ],
    workHistory: [
      {
        restaurant: 'La Mamounia Hotel',
        position: 'Head Chef',
        period: '2020 - Present',
        description: 'Leading kitchen operations for luxury hotel restaurant'
      },
      {
        restaurant: 'Restaurant Al Fassia',
        position: 'Sous Chef', 
        period: '2018 - 2020',
        description: 'Specialized in traditional Moroccan cuisine'
      }
    ],
    status: 'approved',
    submittedAt: '2024-01-10T10:00:00Z',
    reviewedAt: '2024-01-11T14:30:00Z',
    reviewedBy: 'admin@cookconnect.ma'
  },
  {
    id: '2',
    name: 'Youssef El Idrissi',
    position: 'sous-chef',
    city: 'Marrakech',
    photo: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: 5,
    rating: 4.7,
    specialties: ['Italian', 'Moroccan', 'Pastry'],
    bio: 'Creative sous chef with expertise in Italian-Moroccan fusion cuisine. Known for innovative dessert creations.',
    phone: '+212662345678',
    whatsapp: '+212662345678',
    phoneVerified: true,
    whatsappVerified: true,
    dishes: [
      {
        id: '3',
        name: 'Couscous Risotto',
        image: 'https://images.pexels.com/photos/4518669/pexels-photo-4518669.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Fusion dish combining Italian risotto technique with Moroccan couscous',
        status: 'approved'
      }
    ],
    workHistory: [
      {
        restaurant: 'Four Seasons Marrakech',
        position: 'Sous Chef',
        period: '2021 - Present',
        description: 'Assisting head chef in luxury resort kitchen'
      }
    ],
    status: 'approved',
    submittedAt: '2024-01-12T09:15:00Z',
    reviewedAt: '2024-01-12T16:45:00Z',
    reviewedBy: 'admin@cookconnect.ma'
  },
  {
    id: '3',
    name: 'Fatima Zahra',
    position: 'cook',
    city: 'Rabat',
    photo: 'https://images.pexels.com/photos/3890818/pexels-photo-3890818.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: 3,
    rating: 4.5,
    specialties: ['Seafood', 'Moroccan', 'Grill'],
    bio: 'Dedicated cook specializing in fresh seafood and traditional grilling techniques.',
    phone: '+212663456789',
    whatsapp: '+212663456789',
    phoneVerified: true,
    whatsappVerified: true,
    dishes: [
      {
        id: '4',
        name: 'Grilled Sea Bass',
        image: 'https://images.pexels.com/photos/4551989/pexels-photo-4551989.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Fresh Atlantic sea bass with Moroccan spices',
        status: 'approved'
      }
    ],
    workHistory: [
      {
        restaurant: 'Le Dhow Restaurant',
        position: 'Line Cook',
        period: '2022 - Present',
        description: 'Specializing in seafood preparation'
      }
    ],
    status: 'approved',
    submittedAt: '2024-01-14T11:30:00Z',
    reviewedAt: '2024-01-15T10:20:00Z',
    reviewedBy: 'admin@cookconnect.ma'
  },
  {
    id: '4',
    name: 'Omar Bennani',
    position: 'intern',
    city: 'Fès',
    photo: 'https://images.pexels.com/photos/4253290/pexels-photo-4253290.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: 1,
    rating: 4.2,
    specialties: ['Traditional Moroccan', 'Bread Making'],
    bio: 'Enthusiastic culinary student eager to learn traditional Moroccan cooking techniques.',
    phone: '+212664567890',
    whatsapp: '+212664567890',
    phoneVerified: true,
    whatsappVerified: true,
    dishes: [
      {
        id: '5',
        name: 'Traditional Khubz',
        image: 'https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Traditional Moroccan bread baked in wood oven',
        status: 'approved'
      }
    ],
    workHistory: [
      {
        restaurant: 'Palais Faraj',
        position: 'Kitchen Intern',
        period: '2024 - Present',
        description: 'Learning traditional Moroccan cooking methods'
      }
    ],
    status: 'approved',
    submittedAt: '2024-01-16T14:00:00Z',
    reviewedAt: '2024-01-17T09:30:00Z',
    reviewedBy: 'admin@cookconnect.ma'
  }
];

// Pending cooks awaiting approval
export const pendingCooks: Cook[] = [
  {
    id: '5',
    name: 'Hassan Alami',
    position: 'chef',
    city: 'Tangier',
    photo: 'https://images.pexels.com/photos/4253290/pexels-photo-4253290.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: 6,
    rating: 0,
    specialties: ['Seafood', 'Mediterranean', 'Spanish'],
    bio: 'Experienced chef specializing in Mediterranean seafood cuisine with Spanish influences.',
    phone: '+212665678901',
    whatsapp: '+212665678901',
    phoneVerified: true,
    whatsappVerified: true,
    verificationCode: '123456',
    dishes: [
      {
        id: '6',
        name: 'Paella Marocaine',
        image: 'https://images.pexels.com/photos/4518669/pexels-photo-4518669.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Moroccan-inspired paella with local seafood',
        status: 'pending'
      },
      {
        id: '7',
        name: 'Seafood Tagine',
        image: 'https://images.pexels.com/photos/5175085/pexels-photo-5175085.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Fresh seafood tagine with Mediterranean herbs',
        status: 'pending'
      }
    ],
    workHistory: [
      {
        restaurant: 'Hotel Continental',
        position: 'Head Chef',
        period: '2019 - Present',
        description: 'Managing kitchen operations for historic hotel'
      }
    ],
    status: 'pending',
    submittedAt: '2024-01-20T16:45:00Z'
  }
];

export const tenders: Tender[] = [
  {
    id: '1',
    title: 'Head Chef Position - Luxury Resort',
    restaurant: 'Four Seasons Casablanca',
    isAnonymous: false,
    city: 'Casablanca',
    position: 'chef',
    salary: '25,000 - 35,000 MAD',
    description: 'We are seeking an experienced head chef to lead our kitchen team in our luxury resort. The ideal candidate will have extensive experience in fine dining and team management.',
    requirements: [
      'Minimum 5 years as head chef',
      'Experience in luxury hospitality',
      'Strong leadership skills',
      'Fluent in French and Arabic'
    ],
    postedDate: '2024-01-15',
    deadline: '2024-02-15',
    contactEmail: 'hr@fourseasons-casablanca.com',
    status: 'approved',
    submittedAt: '2024-01-15T08:00:00Z',
    reviewedAt: '2024-01-15T10:30:00Z',
    reviewedBy: 'admin@cookconnect.ma'
  },
  {
    id: '2',
    title: 'Sous Chef - Traditional Moroccan Restaurant',
    restaurant: 'Anonymous Restaurant',
    isAnonymous: true,
    city: 'Marrakech',
    position: 'sous-chef',
    salary: '15,000 - 20,000 MAD',
    description: 'Traditional Moroccan restaurant seeking experienced sous chef to work alongside our head chef in preparing authentic Moroccan dishes.',
    requirements: [
      'Experience in Moroccan cuisine',
      'Team player mentality',
      'Attention to detail'
    ],
    postedDate: '2024-01-20',
    deadline: '2024-02-20',
    contactEmail: 'jobs@anonymous-restaurant.com',
    status: 'approved',
    submittedAt: '2024-01-20T12:00:00Z',
    reviewedAt: '2024-01-20T15:45:00Z',
    reviewedBy: 'admin@cookconnect.ma'
  },
  {
    id: '3',
    title: 'Line Cook - Beachfront Restaurant',
    restaurant: 'Ocean View Restaurant',
    isAnonymous: false,
    city: 'Agadir',
    position: 'cook',
    salary: '8,000 - 12,000 MAD',
    description: 'Busy beachfront restaurant looking for experienced line cook to join our dynamic team.',
    requirements: [
      'Experience in high-volume kitchen',
      'Seafood preparation experience',
      'Ability to work under pressure'
    ],
    postedDate: '2024-01-22',
    deadline: '2024-02-22',
    contactEmail: 'careers@oceanview-agadir.com',
    status: 'approved',
    submittedAt: '2024-01-22T09:30:00Z',
    reviewedAt: '2024-01-22T14:15:00Z',
    reviewedBy: 'admin@cookconnect.ma'
  }
];

export const pendingTenders: Tender[] = [
  {
    id: '4',
    title: 'Executive Chef - New Restaurant Opening',
    restaurant: 'Le Jardin Secret',
    isAnonymous: false,
    city: 'Casablanca',
    position: 'chef',
    salary: '30,000 - 40,000 MAD',
    description: 'Exciting opportunity to lead the kitchen of our new upscale restaurant opening in Casablanca.',
    requirements: [
      'Minimum 8 years executive chef experience',
      'Experience with restaurant openings',
      'Creative menu development skills'
    ],
    postedDate: '2024-01-25',
    deadline: '2024-02-25',
    contactEmail: 'recruitment@lejardinsecret.ma',
    status: 'pending',
    submittedAt: '2024-01-25T11:20:00Z'
  }
];

export const admins: Admin[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@cookconnect.ma',
    role: 'super-admin',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-01-25T08:30:00Z'
  }
];

// Utility function to validate Moroccan phone numbers
export const validateMoroccanPhone = (phone: string): boolean => {
  // Remove all spaces and special characters except +
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  
  // Check if it starts with +212 and has exactly 9 digits after
  const moroccanPhoneRegex = /^\+212\d{9}$/;
  return moroccanPhoneRegex.test(cleanPhone);
};

// Utility function to format Moroccan phone number
export const formatMoroccanPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  if (cleanPhone.startsWith('+212') && cleanPhone.length === 13) {
    return cleanPhone.replace(/(\+212)(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
  }
  return phone;
};