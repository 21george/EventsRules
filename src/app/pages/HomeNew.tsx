import { useState, useEffect } from 'react';
import {  Facebook, Instagram, Martini, Users, Music, UtensilsCrossed, Image } from 'lucide-react';
import { Link } from 'react-router';
import { 
  StructuredData, 
  organizationSchema, 
  servicesSchema,
  localBusinessSchema,
  websiteSchema,
  restaurantSchema,
  eventTypesSchema,
  aggregateRatingSchema
} from '../components/StructuredData';
import { FAQSchema } from '../components/FAQSchema';
import PartyEventsSection from '../components/TogetherParty';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import { ContactSection } from '../components/ContactSection';

export function HomeNew() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      
      <StructuredData data={organizationSchema} />
      <StructuredData data={{ '@graph': servicesSchema }} />
      <FAQSchema />

      {/* Hero Section - Full Screen with Centered Content */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1729863254208-2fdc172a0bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Professional bartender making cocktails"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            {/* Main Heading */}
            <div className="inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center space-y-6">
            {/* Event Rules Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
                alt="Event Rules Logo"
                className="h-24 lg:h-32 w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
            {/* Subtitle */}
            <p className="text-white text-lg sm:text-xl lg:text-2xl mb-10 font-light">
              Für <span className="font-semibold">Messen</span>, private <span className="font-semibold">Events</span>, sowie <span className="font-semibold">Firmen- und Weihnachtsfeiern</span>
            </p>
            
            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#services"
                className="inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-xs tracking-[0.2em] hover:bg-[#C9A84C] hover:text-black transition-all duration-500 rounded-sm"
              >
              JETZT KOSTENLOSES ANGEBOT ANFRAGEN
              </a>
            </div>
          </div>
        </div>
      </section>
 


      {/* Our Story Section */}
      <AboutSection />

      {/* Services Detail Section */}
      <section id="services" className="bg-black py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-white mb-4 tracking-wide">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of luxury bar and event services designed to make your celebration unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1: Bar Staff Placement */}
            <Link 
              to="/services/bar-staff-placement"
              className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-[#d4a574]/20 hover:border-[#d4a574] transition-all duration-300"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1698054239930-1a96f42f87da?w=500"
                  alt="Bar Staff Placement"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 border border-[#d4a574] flex items-center justify-center text-[#d4a574]">
                  <Martini size={24} />
                </div>
                <h3 className="text-xl text-white group-hover:text-[#d4a574] transition-colors">
                  Bar Staff Placement
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Professional bartenders ready to work at your venue or event
                </p>
                <div className="flex items-center text-[#d4a574] text-sm">
                  <span>Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Service 2: Event Service Staff */}
            <Link 
              to="/services/event-service-staff"
              className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-[#d4a574]/20 hover:border-[#d4a574] transition-all duration-300"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1768508660861-16b3b4272e6f?w=500"
                  alt="Event Service Staff"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 border border-[#d4a574] flex items-center justify-center text-[#d4a574]">
                  <Users size={24} />
                </div>
                <h3 className="text-xl text-white group-hover:text-[#d4a574] transition-colors">
                  Event Service Staff
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Trained service personnel for events, parties, and special occasions
                </p>
                <div className="flex items-center text-[#d4a574] text-sm">
                  <span>Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Service 3: Private Bar Services */}
            <Link 
              to="/services/entertainment"
              className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-[#d4a574]/20 hover:border-[#d4a574] transition-all duration-300"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1663668567002-6190b578c308?w=500"
                  alt="Entertainment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 border border-[#d4a574] flex items-center justify-center text-[#d4a574]">
                  <Music size={24} />
                </div>
                <h3 className="text-xl text-white group-hover:text-[#d4a574] transition-colors">
                  Entertainment
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Live DJ services and entertainment to keep guests engaged
                </p>
                <div className="flex items-center text-[#d4a574] text-sm">
                  <span>Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Service 4: Club & Concert Staffing */}
           
          </div>
        </div>
      </section>

      {/* Team Section - Bartender Spotlights */}
      <TeamSection/>

      {/* Make Unforgettable Party Together Section */}
     
   <PartyEventsSection />
      {/* Contact Form Section */}
     <ContactSection />
    </div>
  );
}