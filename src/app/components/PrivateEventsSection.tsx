import React from "react";
import { Check } from "lucide-react";

const eventTypes = [
  "Weddings & Receptions",
  "Corporate Events",
  "Birthday Celebrations",
  "Anniversary Parties",
  "Holiday Gatherings",
  "Fundraisers & Galas",
];

export default function PrivateEventsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="mb-6">
              <h2
                className="text-2xl md:text-3xl text-white tracking-[0.15em] font-light mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                PRIVATE EVENTS
              </h2>
              <div className="w-12 h-[1px] bg-[#C9A84C]" />
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              Transform your private events into extraordinary experiences with our bespoke bartending 
              services. We specialize in creating custom cocktail menus and providing professional service 
              that elevates any occasion.
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="text-white text-lg font-light mb-4">Perfect For:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eventTypes.map((type, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#C9A84C]" />
                    </div>
                    <span className="text-gray-400 text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block text-center border border-[#C9A84C] bg-[#C9A84C] text-black px-8 py-3 text-xs tracking-[0.2em] hover:bg-transparent hover:text-[#C9A84C] transition-all duration-500 rounded-sm"
              >
                BOOK YOUR EVENT
              </a>
              <a
                href="/gallery"
                className="inline-block text-center border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-xs tracking-[0.2em] hover:bg-[#C9A84C] hover:text-black transition-all duration-500 rounded-sm"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>

          {/* Right - Image with overlay */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80"
                alt="Private event"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/90 backdrop-blur-sm border border-[#C9A84C]/30 p-6 rounded-sm">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#C9A84C] text-xl font-light">★</div>
                      <div className="text-[#C9A84C] text-[8px] tracking-[0.15em]">PREMIUM</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-sm font-light mb-1">Customized Packages</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Tailored to your specific needs, guest count, and budget
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#C9A84C]/30 rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#C9A84C]/30 rounded-bl-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}