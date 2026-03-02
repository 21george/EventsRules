import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 h-80 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80"
                  alt="Bartender at work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Two smaller images */}
              <div className="h-48 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80"
                  alt="Cocktail detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-48 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80"
                  alt="Bar setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#C9A84C]/20 rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A84C]/10 rounded-full -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-6">
              <h2
                className="text-2xl md:text-3xl text-white tracking-[0.15em] font-light mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                ABOUT US
              </h2>
              <div className="w-12 h-[1px] bg-[#C9A84C]" />
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
              Top Level Bartending is a premium mobile bartending service dedicated to bringing 
              exceptional cocktail experiences to your events. With years of expertise in mixology 
              and event services, we pride ourselves on delivering professional, sophisticated, and 
              memorable beverage solutions.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
              Our team of skilled bartenders combines passion, creativity, and precision to craft 
              signature cocktails that perfectly complement your occasion. Whether it's an intimate 
              gathering or a grand celebration, we ensure every detail exceeds your expectations.
            </p>
            <div className="mt-10">
              <a
                href="AboutSection"
                className="inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-xs tracking-[0.2em] hover:bg-[#C9A84C] hover:text-black transition-all duration-500 rounded-sm"
              >
                More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}