import { useParams, Link } from 'react-router';
import { getServiceBySlug } from '../data/servicesData';
import { StructuredData, breadcrumbSchema } from '../components/StructuredData';
import { 
  ArrowLeft, 
  Check, 
  Phone, 
  Mail, 
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Video1 from '../Video/VIDEO-2026-02-10-00-45-16 2.mp4';
import Video3 from '../Video/1bd4d7f6e87142558c9a565dda6f29fc.mp4';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl text-white mb-4">{t('serviceDetail.notFound')}</h1>
          <Link to="/" className="text-[#d4a574] hover:underline">
            {t('serviceDetail.returnHome')}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: t(service.titleKey),
    provider: {
      '@type': 'Organization',
      name: 'Event Rules',
    },
    description: t(service.detailedDescriptionKey),
    areaServed: {
      '@type': 'State',
      name: 'Munich',
    },
   
  };

  return (
    <div className="min-h-screen bg-black">
      
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema([
        { name: t('nav.home'), url: '/' },
        { name: t('nav.services'), url: '/#services' },
        { name: t(service.titleKey), url: `/services/${service.slug}` },
      ])} />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={t(service.titleKey)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#d4a574] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>{t('serviceDetail.backToHome')}</span>
            </Link>
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#d4a574]/20 backdrop-blur-sm border border-[#d4a574] flex items-center justify-center text-[#d4a574]">
                  <Icon size={32} />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl text-white mb-4">
                {t(service.titleKey)}
              </h1>
              <p className="text-xl text-gray-300">
                {t(service.shortDescriptionKey)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 lg:py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white mb-6">{t('serviceDetail.aboutThisService')}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t(service.detailedDescriptionKey)}
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 lg:py-24 bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
           
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <div className="relative rounded-xl overflow-hidden w-[50rem] bg-black aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={Video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="relative rounded-xl overflow-hidden w-[40rem] bg-black aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={Video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white mb-8 text-center">
              {t('serviceDetail.whatsIncluded')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefitKeys.map((benefitKey, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-black/50 border border-[#d4a574]/10"
                >
                  <Check className="text-[#d4a574] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{t(benefitKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white mb-12 text-center">
              {t('serviceDetail.ourProcess')}
            </h2>
            <div className="space-y-8">
              {service.process.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#d4a574] flex items-center justify-center text-black font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl text-white mb-2">{t(step.titleKey)}</h3>
                    <p className="text-gray-400">{t(step.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
     

      {/* Case Study */}
      {service.caseStudy && (
        <section className="py-16 lg:py-24 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl text-white mb-12 text-center">
                {t('serviceDetail.successStory')}
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src={service.caseStudy.image}
                    alt={t(service.caseStudy.titleKey)}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl text-white mb-2">
                      {t(service.caseStudy.titleKey)}
                    </h3>
                    <p className="text-[#d4a574]">{t('serviceDetail.client')}: {service.caseStudy.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t('serviceDetail.theChallenge')}</h4>
                    <p className="text-gray-400">{t(service.caseStudy.challengeKey)}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t('serviceDetail.ourSolution')}</h4>
                    <p className="text-gray-400">{t(service.caseStudy.solutionKey)}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t('serviceDetail.results')}</h4>
                    <ul className="space-y-2">
                      {service.caseStudy.resultKeys.map((resultKey, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <Star className="text-[#d4a574] flex-shrink-0 mt-0.5" size={16} />
                          <span>{t(resultKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-[#d4a574] pl-6 py-4">
                    <p className="text-gray-300 italic mb-2">
                      {t(service.caseStudy.testimonialKey)}
                    </p>
                    <p className="text-sm text-gray-500">
                      — {t(service.caseStudy.clientRoleKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-white mb-12 text-center">
              {t('serviceDetail.faq')}
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#d4a574]/20 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
                  >
                    <span className="text-white font-medium pr-4">
                      {t(item.questionKey)}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="text-[#d4a574] flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-[#d4a574] flex-shrink-0" size={20} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-400">
                      {t(item.answerKey)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-white mb-6">
              {t('serviceDetail.readyToStart')}
            </h2>
            <p className="text-gray-400 mb-8">
              {t('serviceDetail.contactUsToday', { service: t(service.titleKey).toLowerCase() })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+41 556301 2884"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#d4a574] text-black rounded-full hover:bg-[#c49564] transition-all duration-300"
              >
                <Phone size={20} />
                {t('serviceDetail.callUsNow')}
              </a>
              <a
                href="mailto:info@eventsrules.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#d4a574] text-[#d4a574] rounded-full hover:bg-[#d4a574] hover:text-black transition-all duration-300"
              >
                <Mail size={20} />
                {t('serviceDetail.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}