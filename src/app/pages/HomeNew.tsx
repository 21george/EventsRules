import { useState, useEffect } from 'react';
import { Facebook, Instagram, Martini, Users } from 'lucide-react';
import { Link } from 'react-router';
import { StructuredData, organizationSchema, servicesSchema } from '../components/StructuredData';
import { FAQSchema } from '../components/FAQSchema';
import PartyEventsSection from '../components/TogetherParty';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import { ContactSection } from '../components/ContactSection';
import { motion } from "framer-motion";
import PrivateEventsSection from '../components/PrivateEventsSection';

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

  return (
    <div className="min-h-screen bg-black">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >

        <StructuredData data={organizationSchema} />
        <StructuredData data={{ '@graph': servicesSchema }} />
        <FAQSchema />

        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img
              src="https://images.unsplash.com/photo-1729863254208-2fdc172a0bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Professional bartender making cocktails"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
              
              {/* Logo */}
              <motion.img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
                alt="Event Rules Logo"
                className="h-20 sm:h-24 lg:h-32 w-auto object-contain brightness-0 invert mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              />

              {/* Subtitle */}
              <p className="text-white text-base sm:text-lg lg:text-2xl font-light">
                Für <span className="font-semibold">Messen</span>, private <span className="font-semibold">Events</span>, sowie <span className="font-semibold">Firmen- und Weihnachtsfeiern</span>
              </p>

              {/* CTA Button */}
              <a
                href="#ContactSection"
                className="inline-block border border-[#C9A84C] text-[#C9A84C] px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm tracking-[0.15em] hover:bg-[#C9A84C] hover:text-black transition-all duration-500 rounded-sm"
              >
                JETZT KOSTENLOSES ANGEBOT ANFRAGEN
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <section id="services" className="bg-black py-12 sm:py-16 lg:py-24 flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-12">
            
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 tracking-wide">Our Services</h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                Discover our comprehensive range of luxury bar and event services designed to make your celebration unforgettable
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
              
              {/* Card 1 */}
              <Link
                to="/services/bar-staff-placement"
                className="group relative flex w-full max-w-md flex-col overflow-hidden rounded-lg bg-zinc-900 border border-[#d4a574]/20 hover:border-[#d4a574] transition-all duration-300"
              >
                <div className="relative h-48 sm:h-[220px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1698054239930-1a96f42f87da?w=500"
                    alt="Bar Staff Placement"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d4a574]/20 border border-[#d4a574] flex items-center justify-center text-[#d4a574]">
                    <Martini size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl text-white group-hover:text-[#d4a574] transition-colors">Bar Staff Placement</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Professional bartenders ready to work at your venue or event
                  </p>
                  <div className="mt-auto text-[#d4a574] text-sm sm:text-base">Learn More →</div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link
                to="/services/event-service-staff"
                className="group relative flex w-full max-w-md flex-col overflow-hidden rounded-lg bg-zinc-900 border border-[#d4a574]/20 hover:border-[#d4a574] transition-all duration-300"
              >
                <div className="relative h-48 sm:h-[220px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1768508660861-16b3b4272e6f?w=500"
                    alt="Event Service Staff"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d4a574]/20 border border-[#d4a574] flex items-center justify-center text-[#d4a574]">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl text-white group-hover:text-[#d4a574] transition-colors">Event Service Staff</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Trained service personnel for events, parties, and special occasions
                  </p>
                  <div className="mt-auto text-[#d4a574] text-sm sm:text-base">Learn More →</div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Team Section */}
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <TeamSection />
        </div>

        {/* Party Section */}
        <PartyEventsSection />

        {/* Contact Section */}
        <ContactSection />

      </motion.div>
    </div>
  );
}