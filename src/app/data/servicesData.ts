import { Martini, Users, Music, UtensilsCrossed } from 'lucide-react';
import  RohtImage from '../Image/PHOTO-2026-02-10-00-47-20.jpg';

export interface ServiceDetail {
  id: string;
  titleKey: string;
  slug: string;
  shortDescriptionKey: string;
  icon: any;
  image: string;
  heroImage: string;
  detailedDescriptionKey: string;
  benefitKeys: string[];
  process: {
    step: number;
    titleKey: string;
    descriptionKey: string;
  }[];
 
  caseStudy?: {
    titleKey: string;
    client: string;
    challengeKey: string;
    solutionKey: string;
    resultKeys: string[];
    image: string;
    testimonialKey: string;
    clientRoleKey: string;
  };
  faq: {
    questionKey: string;
    answerKey: string;
  }[];

}

export const servicesData: ServiceDetail[] = [
  {
    id: '1',
    titleKey: 'serviceData.barStaff.title',
    slug: 'bar-staff-placement',
    shortDescriptionKey: 'serviceData.barStaff.shortDescription',
    icon: Martini,
    image: 'https://images.unsplash.com/photo-1698054239930-1a96f42f87da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBjb2NrdGFpbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzcyMDI0ODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: RohtImage,
    detailedDescriptionKey: 'serviceData.barStaff.detailedDescription',
    benefitKeys: [
      'serviceData.barStaff.benefits.0',
      'serviceData.barStaff.benefits.1',
      'serviceData.barStaff.benefits.2',
      'serviceData.barStaff.benefits.3',
      'serviceData.barStaff.benefits.4',
      'serviceData.barStaff.benefits.5',
      'serviceData.barStaff.benefits.6',
      'serviceData.barStaff.benefits.7',
    ],
    process: [
      {
        step: 1,
        titleKey: 'serviceData.barStaff.process.0.title',
        descriptionKey: 'serviceData.barStaff.process.0.description',
      },
      {
        step: 2,
        titleKey: 'serviceData.barStaff.process.1.title',
        descriptionKey: 'serviceData.barStaff.process.1.description',
      },
      {
        step: 3,
        titleKey: 'serviceData.barStaff.process.2.title',
        descriptionKey: 'serviceData.barStaff.process.2.description',
      },
      {
        step: 4,
        titleKey: 'serviceData.barStaff.process.3.title',
        descriptionKey: 'serviceData.barStaff.process.3.description',
      },
      {
        step: 5,
        titleKey: 'serviceData.barStaff.process.4.title',
        descriptionKey: 'serviceData.barStaff.process.4.description',
      },
      {
        step: 6,
        titleKey: 'serviceData.barStaff.process.5.title',
        descriptionKey: 'serviceData.barStaff.process.5.description',
      },
    ],
 
    faq: [
      {
        questionKey: 'serviceData.barStaff.faq.0.question',
        answerKey: 'serviceData.barStaff.faq.0.answer',
      },
      {
        questionKey: 'serviceData.barStaff.faq.1.question',
        answerKey: 'serviceData.barStaff.faq.1.answer',
      },
      {
        questionKey: 'serviceData.barStaff.faq.2.question',
        answerKey: 'serviceData.barStaff.faq.2.answer',
      },
      {
        questionKey: 'serviceData.barStaff.faq.3.question',
        answerKey: 'serviceData.barStaff.faq.3.answer',
      },
      {
        questionKey: 'serviceData.barStaff.faq.4.question',
        answerKey: 'serviceData.barStaff.faq.4.answer',
      },
      {
        questionKey: 'serviceData.barStaff.faq.5.question',
        answerKey: 'serviceData.barStaff.faq.5.answer',
      },
    ],
  
  },

  {
    id: '2',
    titleKey: 'serviceData.eventStaff.title',
    slug: 'event-service-staff',
    shortDescriptionKey: 'serviceData.eventStaff.shortDescription',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1768508660861-16b3b4272e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvY2t0YWlsc3xlbnwxfHx8fDE3NzIwMjQ4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1770140304105-bf10bee60999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwc2V0dXAlMjBlbGVnYW50JTIwdGFibGV8ZW58MXx8fHwxNzcyMDI2MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedDescriptionKey: 'serviceData.eventStaff.detailedDescription',
    benefitKeys: [
      'serviceData.eventStaff.benefits.0',
      'serviceData.eventStaff.benefits.1',
      'serviceData.eventStaff.benefits.2',
      'serviceData.eventStaff.benefits.3',
      'serviceData.eventStaff.benefits.4',
      'serviceData.eventStaff.benefits.5',
      'serviceData.eventStaff.benefits.6',
      'serviceData.eventStaff.benefits.7',
    ],
    process: [
      {
        step: 1,
        titleKey: 'serviceData.eventStaff.process.0.title',
        descriptionKey: 'serviceData.eventStaff.process.0.description',
      },
      {
        step: 2,
        titleKey: 'serviceData.eventStaff.process.1.title',
        descriptionKey: 'serviceData.eventStaff.process.1.description',
      },
      {
        step: 3,
        titleKey: 'serviceData.eventStaff.process.2.title',
        descriptionKey: 'serviceData.eventStaff.process.2.description',
      },
      {
        step: 4,
        titleKey: 'serviceData.eventStaff.process.3.title',
        descriptionKey: 'serviceData.eventStaff.process.3.description',
      },
      {
        step: 5,
        titleKey: 'serviceData.eventStaff.process.4.title',
        descriptionKey: 'serviceData.eventStaff.process.4.description',
      },
      {
        step: 6,
        titleKey: 'serviceData.eventStaff.process.5.title',
        descriptionKey: 'serviceData.eventStaff.process.5.description',
      },
    ],
   
    
    faq: [
      {
        questionKey: 'serviceData.eventStaff.faq.0.question',
        answerKey: 'serviceData.eventStaff.faq.0.answer',
      },
      {
        questionKey: 'serviceData.eventStaff.faq.1.question',
        answerKey: 'serviceData.eventStaff.faq.1.answer',
      },
      {
        questionKey: 'serviceData.eventStaff.faq.2.question',
        answerKey: 'serviceData.eventStaff.faq.2.answer',
      },
      {
        questionKey: 'serviceData.eventStaff.faq.3.question',
        answerKey: 'serviceData.eventStaff.faq.3.answer',
      },
      {
        questionKey: 'serviceData.eventStaff.faq.4.question',
        answerKey: 'serviceData.eventStaff.faq.4.answer',
      },
      {
        questionKey: 'serviceData.eventStaff.faq.5.question',
        answerKey: 'serviceData.eventStaff.faq.5.answer',
      },
    ],
    
  },
  {
    id: '3',
    titleKey: 'serviceData.entertainment.title',
    slug: 'entertainment',
    shortDescriptionKey: 'serviceData.entertainment.shortDescription',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1663668567002-6190b578c308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG11c2ljJTIwcGFydHklMjBsaWdodHN8ZW58MXx8fHwxNzcyMDI0ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1763630055072-70b8b56ee0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBhcnR5JTIwbmlnaHRjbHViJTIwZW50ZXJ0YWlubWVudCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIwMjYwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedDescriptionKey: 'serviceData.entertainment.detailedDescription',
    benefitKeys: [
      'serviceData.entertainment.benefits.0',
      'serviceData.entertainment.benefits.1',
      'serviceData.entertainment.benefits.2',
      'serviceData.entertainment.benefits.3',
      'serviceData.entertainment.benefits.4',
      'serviceData.entertainment.benefits.5',
      'serviceData.entertainment.benefits.6',
      'serviceData.entertainment.benefits.7',
    ],
    process: [
      {
        step: 1,
        titleKey: 'serviceData.entertainment.process.0.title',
        descriptionKey: 'serviceData.entertainment.process.0.description',
      },
      {
        step: 2,
        titleKey: 'serviceData.entertainment.process.1.title',
        descriptionKey: 'serviceData.entertainment.process.1.description',
      },
      {
        step: 3,
        titleKey: 'serviceData.entertainment.process.2.title',
        descriptionKey: 'serviceData.entertainment.process.2.description',
      },
      {
        step: 4,
        titleKey: 'serviceData.entertainment.process.3.title',
        descriptionKey: 'serviceData.entertainment.process.3.description',
      },
      {
        step: 5,
        titleKey: 'serviceData.entertainment.process.4.title',
        descriptionKey: 'serviceData.entertainment.process.4.description',
      },
      {
        step: 6,
        titleKey: 'serviceData.entertainment.process.5.title',
        descriptionKey: 'serviceData.entertainment.process.5.description',
      },
    ],
    
    faq: [
      {
        questionKey: 'serviceData.entertainment.faq.0.question',
        answerKey: 'serviceData.entertainment.faq.0.answer',
      },
      {
        questionKey: 'serviceData.entertainment.faq.1.question',
        answerKey: 'serviceData.entertainment.faq.1.answer',
      },
      {
        questionKey: 'serviceData.entertainment.faq.2.question',
        answerKey: 'serviceData.entertainment.faq.2.answer',
      },
      {
        questionKey: 'serviceData.entertainment.faq.3.question',
        answerKey: 'serviceData.entertainment.faq.3.answer',
      },
      {
        questionKey: 'serviceData.entertainment.faq.4.question',
        answerKey: 'serviceData.entertainment.faq.4.answer',
      },
    ],
  },
  {
    id: '4',
    titleKey: 'serviceData.catering.title',
    slug: 'catering-services',
    shortDescriptionKey: 'serviceData.catering.shortDescription',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1760001553414-5634201efc36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBjYXRlcmluZyUyMHNlcnZpY2UlMjBmb29kfGVufDF8fHx8MTc3MjAyNDg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1751651054936-db23f5d67160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGdvdXJtZXQlMjBmb29kJTIwcGxhdHRlciUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMDI2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedDescriptionKey: 'serviceData.catering.detailedDescription',
    benefitKeys: [
      'serviceData.catering.benefits.0',
      'serviceData.catering.benefits.1',
      'serviceData.catering.benefits.2',
      'serviceData.catering.benefits.3',
      'serviceData.catering.benefits.4',
      'serviceData.catering.benefits.5',
      'serviceData.catering.benefits.6',
      'serviceData.catering.benefits.7',
    ],
    process: [
      {
        step: 1,
        titleKey: 'serviceData.catering.process.0.title',
        descriptionKey: 'serviceData.catering.process.0.description',
      },
      {
        step: 2,
        titleKey: 'serviceData.catering.process.1.title',
        descriptionKey: 'serviceData.catering.process.1.description',
      },
      {
        step: 3,
        titleKey: 'serviceData.catering.process.2.title',
        descriptionKey: 'serviceData.catering.process.2.description',
      },
      {
        step: 4,
        titleKey: 'serviceData.catering.process.3.title',
        descriptionKey: 'serviceData.catering.process.3.description',
      },
      {
        step: 5,
        titleKey: 'serviceData.catering.process.4.title',
        descriptionKey: 'serviceData.catering.process.4.description',
      },
      {
        step: 6,
        titleKey: 'serviceData.catering.process.5.title',
        descriptionKey: 'serviceData.catering.process.5.description',
      },
    ],
   
    caseStudy: {
      titleKey: 'serviceData.catering.caseStudy.title',
      client: 'Robert & Linda Thompson',
      challengeKey: 'serviceData.catering.caseStudy.challenge',
      solutionKey: 'serviceData.catering.caseStudy.solution',
      resultKeys: [
        'serviceData.catering.caseStudy.results.0',
        'serviceData.catering.caseStudy.results.1',
        'serviceData.catering.caseStudy.results.2',
        'serviceData.catering.caseStudy.results.3',
        'serviceData.catering.caseStudy.results.4',
      ],
      image: 'https://images.unsplash.com/photo-1751651054936-db23f5d67160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGdvdXJtZXQlMjBmb29kJTIwcGxhdHRlciUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyMDI2MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonialKey: 'serviceData.catering.caseStudy.testimonial',
      clientRoleKey: 'serviceData.catering.caseStudy.clientRole',
    },
    faq: [
      {
        questionKey: 'serviceData.catering.faq.0.question',
        answerKey: 'serviceData.catering.faq.0.answer',
      },
      {
        questionKey: 'serviceData.catering.faq.1.question',
        answerKey: 'serviceData.catering.faq.1.answer',
      },
      {
        questionKey: 'serviceData.catering.faq.2.question',
        answerKey: 'serviceData.catering.faq.2.answer',
      },
      {
        questionKey: 'serviceData.catering.faq.3.question',
        answerKey: 'serviceData.catering.faq.3.answer',
      },
      {
        questionKey: 'serviceData.catering.faq.4.question',
        answerKey: 'serviceData.catering.faq.4.answer',
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