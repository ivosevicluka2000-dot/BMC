export type ProductCategory = 'Apparel' | 'Accessories' | 'Gear' | 'Stickers' | 'Essentials';

export type ProductAvailability = 'In Stock' | 'Low Stock' | 'Pre-Order' | 'Sold Out';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  priceEur: number;
  images: string[];
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  availability: ProductAvailability;
  sizes?: string[];
  colors?: string[];
  specs?: { label: string; value: string }[];
}

export const products: Product[] = [
  // Apparel
  {
    id: 'apparel-1',
    name: 'BMC Rider Hoodie',
    category: 'Apparel',
    priceEur: 89,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Premium heavyweight hoodie with embroidered club crest.',
    fullDesc: 'Our signature heavyweight hoodie crafted from 400gsm organic cotton. Features embroidered BMC crest on chest and "Balkan Moto Club" lettering across the back. Double-lined hood, reinforced seams, and kangaroo pocket.',
    tags: ['New', 'Bestseller'],
    availability: 'In Stock',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Charcoal'],
    specs: [
      { label: 'Material', value: '100% Organic Cotton, 400gsm' },
      { label: 'Fit', value: 'Relaxed' },
      { label: 'Care', value: 'Machine wash cold' }
    ]
  },
  {
    id: 'apparel-2',
    name: 'BMC Classic Tee',
    category: 'Apparel',
    priceEur: 45,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Essential crew neck with vintage club logo.',
    fullDesc: 'Premium cotton t-shirt featuring our vintage 2012 founding logo. Screen-printed graphics, pre-shrunk fabric, and reinforced collar.',
    tags: ['Essential'],
    availability: 'In Stock',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey']
  },
  {
    id: 'apparel-3',
    name: 'Riding Flannel Shirt',
    category: 'Apparel',
    priceEur: 120,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Reinforced flannel with hidden armor pockets.',
    fullDesc: 'Kevlar-reinforced flannel shirt designed for riding. Hidden pockets for CE-approved shoulder and elbow armor (sold separately). Classic buffalo check pattern.',
    tags: ['Protection'],
    availability: 'Low Stock',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Red/Black', 'Grey/Black']
  },
  {
    id: 'apparel-4',
    name: 'BMC Leather Vest',
    category: 'Apparel',
    priceEur: 299,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Full-grain leather vest with club patches.',
    fullDesc: 'Handcrafted full-grain cowhide leather vest. Includes official BMC back patch and front rocker. Multiple interior pockets, adjustable side laces.',
    tags: ['Premium', 'Members Only'],
    availability: 'Pre-Order',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },

  // Accessories
  {
    id: 'acc-1',
    name: 'BMC Snapback Cap',
    category: 'Accessories',
    priceEur: 35,
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Classic snapback with embroidered logo.',
    fullDesc: 'Structured 6-panel snapback cap with flat brim. 3D embroidered BMC logo on front, "Est. 2012" on side. Adjustable snap closure.',
    tags: [],
    availability: 'In Stock',
    colors: ['Black', 'Navy']
  },
  {
    id: 'acc-2',
    name: 'Rider Bandana Set',
    category: 'Accessories',
    priceEur: 25,
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Set of 3 multi-use bandanas with BMC designs.',
    fullDesc: 'Versatile bandana set featuring three unique BMC designs. 100% cotton, machine washable. Perfect for face covering, headwrap, or neck protection.',
    tags: ['Value Pack'],
    availability: 'In Stock'
  },
  {
    id: 'acc-3',
    name: 'Titanium Keychain',
    category: 'Accessories',
    priceEur: 45,
    images: [
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'CNC machined titanium keychain with club emblem.',
    fullDesc: 'Precision CNC-machined from Grade 5 titanium. Laser-engraved BMC emblem, includes premium leather lanyard. Lifetime warranty.',
    tags: ['Premium'],
    availability: 'In Stock'
  },

  // Gear
  {
    id: 'gear-1',
    name: 'BMC Riding Gloves',
    category: 'Gear',
    priceEur: 79,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Premium leather gloves with knuckle protection.',
    fullDesc: 'Full-grain goatskin leather riding gloves. Carbon fiber knuckle protectors, reinforced palm, touchscreen-compatible fingertips. BMC logo embossed.',
    tags: ['Protection', 'New'],
    availability: 'In Stock',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'gear-2',
    name: 'Tank Bag - 15L',
    category: 'Gear',
    priceEur: 129,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Magnetic tank bag with quick-release system.',
    fullDesc: 'Expandable 15L tank bag with powerful magnetic mounting. Waterproof construction, transparent map pocket, cable ports for device charging.',
    tags: ['Practical'],
    availability: 'In Stock'
  },
  {
    id: 'gear-3',
    name: 'Rain Cover Set',
    category: 'Gear',
    priceEur: 65,
    images: [
      'https://images.unsplash.com/photo-1534481016308-0fca71578ae5?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Compact rain gear for emergency situations.',
    fullDesc: 'Ultralight emergency rain set including jacket, pants, and boot covers. Packs into included pouch that fits under your seat.',
    tags: ['Essential'],
    availability: 'Low Stock',
    sizes: ['S/M', 'L/XL', 'XXL']
  },

  // Stickers
  {
    id: 'sticker-1',
    name: 'BMC Logo Sticker Pack',
    category: 'Stickers',
    priceEur: 12,
    images: [
      'https://images.unsplash.com/photo-1558618047-f4b511e645e3?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Set of 10 vinyl die-cut stickers.',
    fullDesc: 'Premium vinyl sticker pack featuring various BMC logos and designs. Weather-resistant, UV-protected. Perfect for helmets, tanks, and laptops.',
    tags: ['Value Pack'],
    availability: 'In Stock'
  },
  {
    id: 'sticker-2',
    name: 'Reflective Safety Stickers',
    category: 'Stickers',
    priceEur: 18,
    images: [
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'High-visibility reflective sticker set for night riding.',
    fullDesc: '3M reflective material stickers for enhanced night visibility. Includes helmet strips, tank logos, and pannier decals.',
    tags: ['Safety'],
    availability: 'In Stock'
  },

  // Essentials
  {
    id: 'ess-1',
    name: 'Multi-Tool Kit',
    category: 'Essentials',
    priceEur: 55,
    images: [
      'https://images.unsplash.com/photo-1426927308491-6380b6a9936f?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Compact toolkit for roadside repairs.',
    fullDesc: 'Essential multi-tool kit designed for motorcyclists. Includes hex keys, screwdrivers, tire repair kit, and emergency supplies in BMC-branded pouch.',
    tags: ['Essential', 'Bestseller'],
    availability: 'In Stock'
  },
  {
    id: 'ess-2',
    name: 'BMC Water Bottle',
    category: 'Essentials',
    priceEur: 28,
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Insulated stainless steel bottle, 750ml.',
    fullDesc: 'Double-wall vacuum insulated stainless steel bottle. Keeps drinks cold 24hrs or hot 12hrs. Leak-proof lid, laser-engraved BMC logo.',
    tags: [],
    availability: 'In Stock',
    colors: ['Matte Black', 'Brushed Steel']
  },
  {
    id: 'ess-3',
    name: 'First Aid Kit',
    category: 'Essentials',
    priceEur: 42,
    images: [
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Motorcycle-specific first aid kit.',
    fullDesc: 'Compact first aid kit designed for riders. Includes bandages, antiseptic, emergency blanket, and basic trauma supplies. Fits under most seats.',
    tags: ['Safety', 'Essential'],
    availability: 'In Stock'
  },
  {
    id: 'ess-4',
    name: 'Cleaning Kit Pro',
    category: 'Essentials',
    priceEur: 75,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
    ],
    shortDesc: 'Complete motorcycle cleaning and detailing kit.',
    fullDesc: 'Professional-grade cleaning kit including wash, polish, chain lube, and microfiber towels. Everything you need to keep your machine pristine.',
    tags: ['Premium'],
    availability: 'Sold Out'
  }
];
