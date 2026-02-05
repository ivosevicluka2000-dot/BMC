export type LocationType = 'shop' | 'service';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  category: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  hours: string;
  phone: string;
  website: string;
  description: string;
  images: string[];
}

export const locations: Location[] = [
  // Shops
  {
    id: 'shop-1',
    name: 'Balkan Moto HQ',
    type: 'shop',
    category: 'Official Dealer',
    city: 'Belgrade',
    address: 'Kneza Miloša 25',
    lat: 44.8125,
    lng: 20.4612,
    hours: 'Mon-Sat: 09:00 - 20:00',
    phone: '+381 11 123 4567',
    website: 'https://balkanmoto.rs',
    description: 'Our flagship store in Belgrade. Full range of motorcycles, gear, and accessories. Authorized service center with factory-trained technicians.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'shop-2',
    name: 'Zagreb Riders Shop',
    type: 'shop',
    category: 'Partner Store',
    city: 'Zagreb',
    address: 'Ilica 200',
    lat: 45.8150,
    lng: 15.9819,
    hours: 'Mon-Fri: 10:00 - 19:00, Sat: 10:00 - 15:00',
    phone: '+385 1 234 5678',
    website: 'https://zagrebriders.hr',
    description: 'Premium motorcycle gear and accessories. Exclusive Balkan Moto Club merchandise available. Custom fitting services for helmets and riding suits.',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899ff684?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'shop-3',
    name: 'Sofia Moto Center',
    type: 'shop',
    category: 'Official Dealer',
    city: 'Sofia',
    address: 'Vitosha Blvd 89',
    lat: 42.6977,
    lng: 23.3219,
    hours: 'Mon-Sat: 09:00 - 18:00',
    phone: '+359 2 987 6543',
    website: 'https://sofiamoto.bg',
    description: 'Bulgaria\'s premier motorcycle destination. New and used bikes, full accessory shop, and expert advice from passionate riders.',
    images: [
      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'shop-4',
    name: 'Sarajevo Bike Store',
    type: 'shop',
    category: 'Partner Store',
    city: 'Sarajevo',
    address: 'Maršala Tita 50',
    lat: 43.8563,
    lng: 18.4131,
    hours: 'Mon-Fri: 09:00 - 17:00',
    phone: '+387 33 123 456',
    website: 'https://sarajevobikes.ba',
    description: 'Your trusted motorcycle partner in Bosnia. Wide selection of riding gear, parts, and club merchandise.',
    images: [
      'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558980664-1db506751c6c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981408-b906b1db79ed?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'shop-5',
    name: 'Podgorica Moto World',
    type: 'shop',
    category: 'Official Dealer',
    city: 'Podgorica',
    address: 'Bulevar Svetog Petra 15',
    lat: 42.4304,
    lng: 19.2594,
    hours: 'Mon-Sat: 10:00 - 19:00',
    phone: '+382 20 234 567',
    website: 'https://motoworldpg.me',
    description: 'Montenegro\'s largest motorcycle showroom. From adventure bikes to sportbikes, we have it all. Expert financing available.',
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // Services
  {
    id: 'service-1',
    name: 'Pro Moto Service Belgrade',
    type: 'service',
    category: 'Full Service',
    city: 'Belgrade',
    address: 'Autokomanda 12',
    lat: 44.7866,
    lng: 20.4489,
    hours: 'Mon-Fri: 08:00 - 18:00, Sat: 09:00 - 14:00',
    phone: '+381 11 987 6543',
    website: 'https://promotoservice.rs',
    description: 'Factory-certified technicians for all major brands. Full diagnostics, engine rebuilds, and performance tuning. Club members get 15% discount.',
    images: [
      'https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'service-2',
    name: 'Custom Chrome Zagreb',
    type: 'service',
    category: 'Customization',
    city: 'Zagreb',
    address: 'Savska cesta 88',
    lat: 45.8000,
    lng: 15.9700,
    hours: 'Mon-Fri: 10:00 - 18:00',
    phone: '+385 1 876 5432',
    website: 'https://customchrome.hr',
    description: 'Custom builds, paint jobs, and chrome work. Turn your vision into reality. Award-winning custom bikes built here.',
    images: [
      'https://images.unsplash.com/photo-1558981001-1995369a39cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'service-3',
    name: 'Quick Fix Moto',
    type: 'service',
    category: 'Emergency Repair',
    city: 'Novi Sad',
    address: 'Bulevar Oslobođenja 45',
    lat: 45.2671,
    lng: 19.8335,
    hours: '24/7 Emergency Service',
    phone: '+381 21 456 7890',
    website: 'https://quickfixmoto.rs',
    description: 'Roadside assistance and emergency repairs. We come to you anywhere in Vojvodina. Fast, reliable, and fairly priced.',
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590226789642-a2d27e22e096?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'service-4',
    name: 'Sofia Performance Garage',
    type: 'service',
    category: 'Performance',
    city: 'Sofia',
    address: 'Okolovrasten pat 50',
    lat: 42.7000,
    lng: 23.3500,
    hours: 'Mon-Sat: 09:00 - 20:00',
    phone: '+359 2 876 5432',
    website: 'https://sofiaperformance.bg',
    description: 'Track preparation, ECU tuning, and suspension setup. Home of multiple national racing champions. Dyno testing available.',
    images: [
      'https://images.unsplash.com/photo-1558981001-5864b3250a69?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981000-f294a6ed32b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981079-c6949052c925?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'service-5',
    name: 'Classic Resto Shop',
    type: 'service',
    category: 'Restoration',
    city: 'Ljubljana',
    address: 'Tržaška cesta 120',
    lat: 46.0569,
    lng: 14.5058,
    hours: 'Tue-Sat: 10:00 - 17:00',
    phone: '+386 1 234 5678',
    website: 'https://classicrestoshop.si',
    description: 'Vintage motorcycle restoration specialists. From barn finds to concours winners. Authentic parts sourcing and expert craftsmanship.',
    images: [
      'https://images.unsplash.com/photo-1558980394-34764db076b4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981396-5fcf84bdf14b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'service-6',
    name: 'Tire Masters Skopje',
    type: 'service',
    category: 'Tire Service',
    city: 'Skopje',
    address: 'Partizanski Odredi 100',
    lat: 42.0000,
    lng: 21.4333,
    hours: 'Mon-Sat: 08:00 - 20:00',
    phone: '+389 2 312 3456',
    website: 'https://tiremastersmk.com',
    description: 'Motorcycle tire specialists. All major brands in stock. Free mounting with purchase. Wheel balancing and alignment services.',
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80'
    ]
  }
];
