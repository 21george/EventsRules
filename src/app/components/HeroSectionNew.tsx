import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Herovideo from '../Video/VIDEO-2026-02-10-00-45-16.mp4';

const slides = [
  {
    title: "Our Services",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    cta: "See Services",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1400&q=80",
  },
  {
    title: "Premium Cocktails",
    description:
      "Experience the art of mixology with our handcrafted cocktails made from the finest ingredients and served with elegance.",
    cta: "Explore Menu",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1400&q=80",
  },
  {
    title: "Private Events",
    description:
      "Transform your special occasions into unforgettable experiences with our bespoke bartending services.",
    cta: "Book Now",
    image: "https://images.unsplash.com/photo-1574006852626-31d1137ce tried?w=1400&q=80",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={Herovideo}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
          alt="Event Rules Logo"
          className="w-72 md:w-96 object-contain brightness-0 invert opacity-90"
        />
      </div>

      {/* Bottom content */}
      <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-6 md:px-12 pb-16">
        {/* Carousel controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#C9A84C] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "w-6 h-2 bg-[#C9A84C]"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center hover:bg-[#C9A84C]/10 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#C9A84C]" />
          </button>
        </div>
      </div>
    </section>
  );
}