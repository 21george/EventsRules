import React from "react";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";

export default function PartyEventsSection() {
  const { t } = useTranslation();


   
  
  return (
    <section className="bg-black py-20 md:py-28 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=80"
          alt="Party celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-6 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {t('makeParty.title')}
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t('makeParty.description')}
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
    </section>
  );
}