import { useEffect } from 'react';

export const faviconUrl =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png';

export interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = `structured-data-${Math.random().toString(36).substr(2, 9)}`;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [data]);

  return null;
}

// Predefined structured data schemas

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VIP Bar',
  alternateName: 'VIP Cocktail Lounge',
  description:
    'Luxury cocktail lounge and event bar service specializing in premium cocktails, event planning, and unforgettable party experiences.',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
  faviconUrl,
  image:
    'https://images.unsplash.com/photo-1765622656578-a7fcd69ebe43?w=1200&h=630&fit=crop',
  telephone: '+1-555-123-4567',
  email: 'info@vipbar.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'info@vipbar.com',
    availableLanguage: ['English'],
    areaServed: 'US',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Luxury Avenue',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7589',
    longitude: '-73.9851',
  },
  sameAs: [
    'https://www.facebook.com/vipbar',
    'https://www.instagram.com/vipbar',
    'https://www.tiktok.com/@vipbar',
  ],
  priceRange: '$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '17:00',
      closes: '00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '17:00',
      closes: '02:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '17:00',
      closes: '23:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'VIP Bar Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cocktail Catering',
          description: 'Professional bartenders crafting premium cocktails',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Event Planning',
          description: 'Complete event coordination and planning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Entertainment',
          description: 'Live DJ services and entertainment',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Catering Services',
          description: 'Gourmet food and beverage catering',
        },
      },
    ],
  },
};

export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cocktail Catering',
    provider: {
      '@type': 'Organization',
      name: 'VIP Bar',
    },
    areaServed: {
      '@type': 'State',
      name: 'New York',
    },
    description:
      'Professional bartenders crafting premium cocktails for your event with the finest ingredients.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Event Planning',
    provider: {
      '@type': 'Organization',
      name: 'VIP Bar',
    },
    areaServed: {
      '@type': 'State',
      name: 'New York',
    },
    description:
      'Complete event coordination from concept to execution, ensuring every detail is perfect.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Entertainment Services',
    provider: {
      '@type': 'Organization',
      name: 'VIP Bar',
    },
    areaServed: {
      '@type': 'State',
      name: 'New York',
    },
    description:
      'Live DJ services and entertainment options to keep your guests engaged and dancing.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Catering Services',
    provider: {
      '@type': 'Organization',
      name: 'VIP Bar',
    },
    areaServed: {
      '@type': 'State',
      name: 'New York',
    },
    description:
      'Gourmet food and beverage options paired perfectly with our signature cocktails.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  },
];

export const eventSchema = (eventType: string, eventName: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: eventName,
  description: `${eventType} services by VIP Bar - Premium cocktail and event experiences`,
  organizer: {
    '@type': 'Organization',
    name: 'VIP Bar',
    url: typeof window !== 'undefined' ? window.location.origin : '',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    price: '0',
    priceCurrency: 'USD',
    validFrom: new Date().toISOString().split('T')[0],
  },
});

export const blogPostSchema = (
  title: string,
  description: string,
  image: string,
  datePublished: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: datePublished,
  author: {
    '@type': 'Organization',
    name: 'VIP Bar',
  },
  publisher: {
    '@type': 'Organization',
    name: 'VIP Bar',
    logo: {
      '@type': 'ImageObject',
      url: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
    },
  },
});

export const imageGallerySchema = (images: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'VIP Bar Event Gallery',
  description: 'Photo gallery showcasing our cocktail events, parties, and celebrations',
  image: images,
  provider: {
    '@type': 'Organization',
    name: 'VIP Bar',
  },
});

// Local Business Schema (for better local SEO)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: 'VIP Bar',
  description: 'Luxury cocktail lounge and event bar service in New York City',
  image: 'https://images.unsplash.com/photo-1765622656578-a7fcd69ebe43?w=1200&h=630&fit=crop',
  telephone: '+1-555-123-4567',
  email: 'info@vipbar.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Luxury Avenue',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7589',
    longitude: '-73.9851',
  },
  url: typeof window !== 'undefined' ? window.location.origin : '',
  priceRange: '$$$',
  servesCuisine: 'Cocktails',
  acceptsReservations: 'True',
  menu: typeof window !== 'undefined' ? `${window.location.origin}/#services` : '',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '17:00',
      closes: '00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '17:00',
      closes: '02:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '17:00',
      closes: '23:00',
    },
  ],
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  currenciesAccepted: 'USD',
};

// WebSite Schema with search action
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VIP Bar',
  description: 'Luxury cocktail lounge and premium event bar service',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  faviconUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: typeof window !== 'undefined' 
        ? `${window.location.origin}/search?q={search_term_string}` 
        : '',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Breadcrumb Schema generator
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Review/Aggregate Rating Schema
export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VIP Bar',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

// Restaurant Schema for better food/drink establishment SEO
export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'VIP Bar',
  description: 'Luxury cocktail lounge specializing in premium cocktails and event services',
  image: 'https://images.unsplash.com/photo-1765622656578-a7fcd69ebe43?w=1200&h=630&fit=crop',
  telephone: '+1-555-123-4567',
  email: 'info@vipbar.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Luxury Avenue',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
  servesCuisine: ['Cocktails', 'Beverages', 'Appetizers'],
  priceRange: '$$$',
  acceptsReservations: true,
  hasMenu: typeof window !== 'undefined' ? `${window.location.origin}/#services` : '',
};

// Event types schema for different event services
export const eventTypesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Wedding Bar Services',
      description: 'Premium cocktail catering for wedding receptions and celebrations',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Corporate Event Services',
      description: 'Professional bar services for corporate events and business gatherings',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Private Party Services',
      description: 'Exclusive bar and entertainment services for private parties',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Birthday Party Services',
      description: 'Customized cocktail experiences for birthday celebrations',
    },
  ],
};