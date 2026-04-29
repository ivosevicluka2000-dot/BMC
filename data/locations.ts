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
  {
    id: 'shop-1',
    name: 'BalkanMotoCentar',
    type: 'shop',
    category: 'Official Dealer',
    city: 'Kać',
    address: 'Atar 100a, Kać 21241',
    lat: 45.2983,
    lng: 19.8608,
    hours: 'Mon-Sat: 09:00 - 17:00',
    phone: '+381 62 644 263',
    website: '',
    description: 'Headquarters of BalkanMotoCentar. Authorized TGB, Dayun and Gusite dealer for Serbia.',
    images: []
  },
  {
    id: 'shop-2',
    name: 'Balkan Moto Centar BiH',
    type: 'shop',
    category: 'Official Dealer',
    city: 'Prijedor',
    address: 'Prijedor, Bosnia and Herzegovina',
    lat: 44.9797,
    lng: 16.7143,
    hours: 'Mon-Sat: 09:00 - 18:00',
    phone: '+387 65 006779',
    website: '',
    description: 'Balkan Moto Center representative for Bosnia and Herzegovina.',
    images: []
  },
  {
    id: 'shop-3',
    name: 'Mas trade d.o.o.',
    type: 'shop',
    category: 'Partner Store',
    city: 'Podgorica',
    address: 'bb Ilije Plamenca, Podgorica 81000',
    lat: 42.4304,
    lng: 19.2594,
    hours: 'Mon-Sat: 09:00 - 18:00',
    phone: '+382 20 230 219',
    website: '',
    description: 'Partner store for Montenegro. ATV and UTV vehicle sales and service.',
    images: []
  },
  {
    id: 'shop-4',
    name: 'MOTO ILINDEN MK',
    type: 'shop',
    category: 'Partner Store',
    city: 'Skopje',
    address: 'Village of Marino, Str. 500 No.2D, Skopje 1000',
    lat: 41.9981,
    lng: 21.4254,
    hours: 'Mon-Sat: 09:00 - 18:00',
    phone: '+389 70 399277',
    website: '',
    description: 'Partner store for Macedonia. TGB, Dayun and Gusite vehicle sales and service.',
    images: []
  },
  {
    id: 'service-1',
    name: 'BalkanMotoCentar Servis',
    type: 'service',
    category: 'Full Service',
    city: 'Kać',
    address: 'Atar 100a, Kać 21241',
    lat: 45.2983,
    lng: 19.8608,
    hours: 'Mon-Sat: 09:00 - 17:00',
    phone: '+381 62 644 269',
    website: '',
    description: 'Authorized BalkanMotoCentar service for ATV and UTV vehicles. Complete maintenance, diagnostics and spare parts.',
    images: []
  },
];
