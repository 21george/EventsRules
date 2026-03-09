import React from "react";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

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

        <Button className="bg-transparent border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-500 px-10 py-6 text-xs tracking-[0.2em] rounded-sm">
          {t('makeParty.cta')}
        </Button>

        
      </div>
    </section>
  );
}