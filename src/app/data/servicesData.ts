import { Martini, Users, Music, UtensilsCrossed } from 'lucide-react';
import  RohtImage from '../Image/PHOTO-2026-02-10-00-47-20.jpg';

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: any;
  image: string;
  heroImage: string;
  detailedDescription: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
 
  caseStudy?: {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
    testimonial: string;
    clientRole: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];

}

export const servicesData: ServiceDetail[] = [
  {
    id: '1',
    title: 'Bar Staff Placement',
    slug: 'bar-staff-placement',
    shortDescription: 'Professional bartenders and bar staff ready to work at your venue or event.',
    icon: Martini,
    image: 'https://images.unsplash.com/photo-1698054239930-1a96f42f87da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBjb2NrdGFpbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzcyMDI0ODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: RohtImage,
    detailedDescription: 'We provide skilled and experienced bartenders for clubs, concerts, private parties, and events. Our staff members are trained professionals who excel at mixing drinks, providing excellent customer service, and maintaining a professional atmosphere. Whether you need staff for a one-night event or ongoing club operations, we have the right people for your needs.',
    benefits: [
      'Experienced bartenders with 2+ years in the industry',
      'Background-checked and professionally vetted staff',
      'Knowledge of classic and modern cocktail recipes',
      'Excellent customer service and communication skills',
      'Flexible scheduling for events and regular shifts',
      'Fast and efficient drink preparation',
      'Responsible alcohol service certified',
      'Clean and professional appearance',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We discuss your event details, venue requirements, guest count, and bar setup needs. We provide a quote and timeline for your event.',
      },
      {
        step: 2,
        title: 'Staff Selection',
        description: 'Based on your needs, we select experienced bartenders who match your venue and event style. We provide staff profiles for your review.',
      },
      {
        step: 3,
        title: 'Pre-Event Briefing',
        description: 'Our bartenders receive detailed briefing about your menu, pricing, special requests, and any house specialties or signature cocktails.',
      },
      {
        step: 4,
        title: 'Setup & Preparation',
        description: 'Our team arrives early to set up the bar, stock inventory, organize tools and glassware, and prepare for service.',
      },
      {
        step: 5,
        title: 'Professional Service',
        description: 'Our bartenders provide excellent service, craft quality cocktails, engage with guests, and maintain bar cleanliness throughout the event.',
      },
      {
        step: 6,
        title: 'Closing & Cleanup',
        description: 'After the event, our staff handles bar breakdown, equipment cleaning, and complete cleanup of the bar area.',
      },
    ],
 
    faq: [
      {
        question: 'What types of venues do your bartenders work?',
        answer: 'Our bartenders work in clubs, concert venues, private parties, corporate events, weddings, festivals, and any event requiring bar service.',
      },
      {
        question: 'Are your staff members certified?',
        answer: 'Yes, all our bartenders have responsible alcohol service certifications and are background-checked for your peace of mind.',
      },
      {
        question: 'What is the minimum booking time?',
        answer: 'We have a 4-hour minimum for single-event bookings. Long-term contracts have flexible scheduling options.',
      },
      {
        question: 'Can we request specific staff members?',
        answer: 'Absolutely! For repeat bookings, you can request specific bartenders who performed well at previous events.',
      },
      {
        question: 'What happens if staff doesn\'t show up?',
        answer: 'We have a replacement guarantee. If any staff member is unable to work, we immediately provide a qualified replacement.',
      },
      {
        question: 'Do you provide staff for last-minute events?',
        answer: 'We do our best to accommodate last-minute requests, though booking at least 1 week in advance is recommended for best availability.',
      },
    ],
  
  },

  {
    id: '2',
    title: 'Event Service Staff',
    slug: 'event-service-staff',
    shortDescription: 'Trained service personnel for events, parties, and special occasions.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1768508660861-16b3b4272e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvY2t0YWlsc3xlbnwxfHx8fDE3NzIwMjQ4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1770140304105-bf10bee60999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwc2V0dXAlMjBlbGVnYW50JTIwdGFibGV8ZW58MXx8fHwxNzcyMDI2MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedDescription: 'Professional event service staff including servers, hosts, coat check attendants, and setup/cleanup crew. Our team members are experienced in handling events of all sizes, from intimate private parties to large corporate gatherings. They ensure smooth operations and exceptional guest experiences.',
    benefits: [
      'Professional and courteous service personnel',
      'Experience with various event types and formats',
      'Black-tie and formal event expertise',
      'Food and beverage service knowledge',
      'Setup and breakdown assistance',
      'Crowd management and guest relations',
      'Uniform or dress code compliance',
      'Reliable and punctual team members',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We discuss your event details, guest count, service needs, and any specific requirements. We provide a quote and timeline.',
      },
      {
        step: 2,
        title: 'Staff Selection',
        description: 'Based on your needs, we select the perfect staff members for your event. We provide profiles and can arrange meetings if desired.',
      },
      {
        step: 3,
        title: 'Training & Briefing',
        description: 'Our staff receives a detailed briefing about your venue, menu, expectations, and any special requirements. We provide training as needed.',
      },
      {
        step: 4,
        title: 'Setup & Coordination',
        description: 'Our team arrives early to set up tables, chairs, linens, and any other equipment. We coordinate with other vendors to ensure everything is ready.',
      },
      {
        step: 5,
        title: 'Service Delivery',
        description: 'Professional staff members provide excellent service throughout your event, ensuring a smooth and enjoyable experience for your guests.',
      },
      {
        step: 6,
        title: 'Cleanup & Removal',
        description: 'After the event, our team handles all cleanup and removal of equipment, leaving your venue spotless and ready for the next event.',
      },
    ],
   
    
    faq: [
      {
        question: 'What types of events do your staff work?',
        answer: 'Our staff work in clubs, concert venues, private parties, corporate events, weddings, festivals, and any event requiring service personnel.',
      },
      {
        question: 'Are your staff members certified?',
        answer: 'Yes, all our staff members are background-checked for your peace of mind.',
      },
      {
        question: 'What is the minimum booking time?',
        answer: 'We have a 4-hour minimum for single-event bookings. Long-term contracts have flexible scheduling options.',
      },
      {
        question: 'Can we request specific staff members?',
        answer: 'Absolutely! For repeat bookings, you can request specific staff members who performed well at previous events.',
      },
      {
        question: 'What happens if staff doesn\'t show up?',
        answer: 'We have a replacement guarantee. If any staff member is unable to work, we immediately provide a qualified replacement.',
      },
      {
        question: 'Do you provide staff for last-minute events?',
        answer: 'We do our best to accommodate last-minute requests, though booking at least 1 week in advance is recommended for best availability.',
      },
    ],
    
  },
  {
    id: '3',
    title: 'Entertainment',
    slug: 'entertainment',
    shortDescription: 'Live DJ services and entertainment options to keep your guests engaged and dancing.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1663668567002-6190b578c308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG11c2ljJTIwcGFydHklMjBsaWdodHN8ZW58MXx8fHwxNzcyMDI0ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1763630055072-70b8b56ee0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBhcnR5JTIwbmlnaHRjbHViJTIwZW50ZXJ0YWlubWVudCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIwMjYwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedDescription: 'Set the perfect mood and energy for your event with our professional entertainment services. From experienced DJs to live bands, we provide music and entertainment that keeps your guests engaged, dancing, and making memories. Our entertainers read the crowd and adjust the vibe to ensure everyone has an amazing time.',
    benefits: [
      'Professional DJs with diverse music libraries',
      'Custom playlist creation based on your preferences',
      'State-of-the-art sound and lighting equipment',
      'MC services for announcements and transitions',
      'Live band options for sophisticated events',
      'Interactive entertainment (photo booths, games)',
      'Wireless microphones for speeches and toasts',
      'Backup equipment for guaranteed performance',
    ],
    process: [
      {
        step: 1,
        title: 'Music Consultation',
        description: 'We discuss your musical preferences, event style, must-play songs, and any do-not-play requests. We learn about your guests\' demographics and preferences.',
      },
      {
        step: 2,
        title: 'Entertainment Selection',
        description: 'Based on your needs, we recommend the perfect DJ or live entertainment. You can review performer profiles, listen to mixes, and request meetings.',
      },
      {
        step: 3,
        title: 'Playlist Curation',
        description: 'Your DJ creates a custom playlist incorporating your requests while maintaining flexibility to read the crowd and adjust on the fly.',
      },
      {
        step: 4,
        title: 'Technical Planning',
        description: 'We coordinate with your venue on power, space, and acoustics. We plan lighting design and any special effects.',
      },
      {
        step: 5,
        title: 'Rehearsal & Testing',
        description: 'For weddings and major events, we conduct sound checks and rehearse key moments like grand entrances and first dances.',
      },
      {
        step: 6,
        title: 'Live Performance',
        description: 'Your entertainer brings the energy, reads the crowd, takes requests, and ensures the dance floor stays packed all night long.',
      },
    ],
    
    faq: [
      {
        question: 'Can I request specific songs?',
        answer: 'Absolutely! We encourage you to provide must-play songs and even do-not-play lists. Your DJ will incorporate your requests while reading the crowd.',
      },
      {
        question: 'What music genres do your DJs specialize in?',
        answer: 'Our DJs are versatile and experienced in all genres including Top 40, Hip Hop, EDM, Rock, Country, Latin, Jazz, and more. We match you with the right DJ for your style.',
      },
      {
        question: 'Do you provide MC services?',
        answer: 'Yes! Our DJs can serve as MCs, making announcements, introducing speakers, facilitating games, and guiding the flow of your event.',
      },
      {
        question: 'What happens if there\'s a technical issue?',
        answer: 'All our DJs carry backup equipment including laptops, controllers, and speakers. We\'ve never had an event disrupted by technical failure.',
      },
      {
        question: 'Can you accommodate outdoor events?',
        answer: 'Yes! We have equipment suitable for outdoor venues and always plan for weather contingencies with covered setups and weatherproof gear.',
      },
    ],
  },
  {
    id: '4',
    title: 'Catering Services',
    slug: 'catering-services',
    shortDescription: 'Gourmet food and beverage options paired perfectly with our signature cocktails.',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1760001553414-5634201efc36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBjYXRlcmluZyUyMHNlcnZpY2UlMjBmb29kfGVufDF8fHx8MTc3MjAyNDg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1751651054936-db23f5d67160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGdvdXJtZXQlMjBmb29kJTIwcGxhdHRlciUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMDI2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedDescription: 'Elevate your event with our gourmet catering services perfectly paired with our signature cocktails. Our culinary team creates delicious, beautifully presented dishes using fresh, high-quality ingredients. From elegant hors d\'oeuvres to full-course meals, we design menus that complement your cocktails and delight your guests.',
    benefits: [
      'Custom menu design by experienced chefs',
      'Farm-to-table and locally sourced ingredients',
      'Dietary accommodation (vegetarian, vegan, gluten-free, kosher)',
      'Beautiful presentation and plating',
      'Professional service staff',
      'Food and cocktail pairing recommendations',
      'Passed hors d\'oeuvres and stationed appetizers',
      'Full kitchen and serving equipment provided',
    ],
    process: [
      {
        step: 1,
        title: 'Menu Consultation',
        description: 'We discuss your event style, guest preferences, dietary restrictions, and budget. We review your cocktail menu to suggest complementary food pairings.',
      },
      {
        step: 2,
        title: 'Custom Menu Design',
        description: 'Our chef creates a custom menu featuring appetizers, entrees, sides, and desserts tailored to your event. We provide detailed descriptions and pricing.',
      },
      {
        step: 3,
        title: 'Tasting Experience',
        description: 'For large events, we offer a tasting session where you can sample dishes and provide feedback. We make adjustments until the menu is perfect.',
      },
      {
        step: 4,
        title: 'Logistics Planning',
        description: 'We coordinate kitchen access, timing with venue and other vendors, staffing needs, and service style (plated, buffet, or family-style).',
      },
      {
        step: 5,
        title: 'Preparation & Delivery',
        description: 'Our team prepares food on-site or at our kitchen facility, ensuring everything is fresh and served at optimal temperature and quality.',
      },
      {
        step: 6,
        title: 'Service & Cleanup',
        description: 'Professional servers present and serve your food with elegance. After the event, we handle all cleanup and removal of equipment.',
      },
    ],
   
    caseStudy: {
      title: 'Intimate Anniversary Dinner',
      client: 'Robert & Linda Thompson',
      challenge: 'Create an unforgettable 30th anniversary dinner for 40 guests that rivaled their favorite Michelin-starred restaurant experience, incorporating family recipes and honoring their Italian heritage.',
      solution: 'We designed a five-course Italian-inspired menu featuring family recipes reimagined with modern techniques. Each course was paired with regional Italian wines and a signature cocktail inspired by Italian aperitivos. We transformed their backyard with elegant table settings, string lights, and a live acoustic guitarist.',
      results: [
        'Guests rated the meal 5/5 stars',
        'Successfully incorporated grandmother\'s ravioli recipe',
        'Zero food waste with perfect portion planning',
        'Featured in local lifestyle magazine',
        'Family now books us for annual reunion',
      ],
      image: 'https://images.unsplash.com/photo-1751651054936-db23f5d67160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGdvdXJtZXQlMjBmb29kJTIwcGxhdHRlciUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMDI2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: '"The food was absolutely spectacular - better than any restaurant we\'ve been to. Our guests are still raving about it six months later!"',
      clientRole: 'Anniversary Couple',
    },
    faq: [
      {
        question: 'Can you accommodate dietary restrictions?',
        answer: 'Yes! We can accommodate vegetarian, vegan, gluten-free, nut-free, kosher, halal, and other dietary needs. Just let us know in advance.',
      },
      {
        question: 'Do you provide serving staff?',
        answer: 'Yes, all catering packages include professional servers. The number of staff depends on your guest count and service style.',
      },
      {
        question: 'Can we customize the menu?',
        answer: 'Absolutely! All our menus are fully customizable. We can incorporate family recipes, cultural dishes, or create entirely unique menus.',
      },
      {
        question: 'What\'s the difference between plated and buffet service?',
        answer: 'Plated service offers an elegant, restaurant-style experience where each guest is served individually. Buffet allows guests to choose portions and encourages mingling.',
      },
      {
        question: 'Do you handle rentals like tables and linens?',
        answer: 'We can coordinate all rentals including tables, chairs, linens, china, and glassware, or work with rentals you\'ve arranged.',
      },
    ],
    
  },
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesData.find((service) => service.slug === slug);
};

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData.find((service) => service.id === id);
};