import { StructuredData } from './StructuredData';

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does VIP Bar offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VIP Bar offers premium cocktail catering, complete event planning, live entertainment and DJ services, and gourmet catering services for weddings, corporate events, birthday parties, and private celebrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide bartenders for private events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide professional bartenders for all types of private events including weddings, corporate functions, birthday celebrations, and exclusive parties. Our bartenders are experienced in crafting premium cocktails and providing exceptional service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We primarily serve the New York area and surrounding regions. Contact us to discuss your specific location and event needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book VIP Bar services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking at least 4-6 weeks in advance for most events. For large events like weddings or corporate functions, booking 2-3 months ahead is ideal to ensure availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer customized cocktail menus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We specialize in creating custom cocktail menus tailored to your event theme, preferences, and guest profiles. Our mixologists work with you to design signature drinks that make your event unique.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in your event planning service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our event planning service includes complete coordination from concept to execution, bar setup and design, beverage selection and procurement, professional staffing, entertainment coordination, and day-of management to ensure everything runs smoothly.',
      },
    },
  ],
};

export function FAQSchema() {
  return <StructuredData data={faqData} />;
}
