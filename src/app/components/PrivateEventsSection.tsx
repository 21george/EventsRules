import { Check } from 'lucide-react';

interface PrivateEventsSectionProps {
  privateEventImage: string;
}

export function PrivateEventsSection({ privateEventImage }: PrivateEventsSectionProps) {
  const packages = [
    {
      id: 1,
      name: 'Bronze',
      price: '$999',
      features: [
        'Up to 25 guests',
        '3 hours event duration',
        'Standard cocktail menu',
        'Professional bartender',
        'Basic bar setup',
      ],
    },
    {
      id: 2,
      name: 'Silver',
      price: '$1,999',
      features: [
        'Up to 50 guests',
        '4 hours event duration',
        'Premium cocktail menu',
        '2 Professional bartenders',
        'Deluxe bar setup',
        'Custom drink creation',
      ],
      featured: true,
    },
    {
      id: 3,
      name: 'Gold',
      price: '$3,999',
      features: [
        'Up to 100 guests',
        '6 hours event duration',
        'Exclusive cocktail menu',
        '3 Professional bartenders',
        'VIP bar setup',
        'Custom drink creation',
        'Catering service',
        'Event coordinator',
      ],
    },
  ];

  return (
    <section className="bg-zinc-950 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl text-white tracking-[0.3em] mb-4">
            PRIVATE EVENTS
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
            Book our exclusive VIP service for your private celebration. Choose from our carefully curated packages
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-12 lg:mb-16 overflow-hidden rounded-lg">
          <img
            src={privateEventImage}
            alt="Private VIP event"
            className="w-full h-64 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/40 to-transparent"></div>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-lg p-6 lg:p-8 ${
                pkg.featured
                  ? 'bg-[#d4a574]/10 border-2 border-[#d4a574] scale-105'
                  : 'bg-zinc-900/50 border border-[#d4a574]/20 hover:border-[#d4a574]'
              } transition-all duration-300`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4a574] text-black text-xs tracking-wider rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-[#d4a574] text-xl tracking-wider mb-2">
                  {pkg.name}
                </h3>
                <div className="text-white text-3xl lg:text-4xl mb-2">
                  {pkg.price}
                </div>
                <p className="text-gray-400 text-xs">per event</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-[#d4a574] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full text-sm tracking-wider transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-[#d4a574] text-black hover:bg-[#c49564]'
                    : 'border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-black'
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-12 lg:mt-16 p-8 border border-[#d4a574]/20 rounded-lg">
          <h3 className="text-white text-xl mb-3">Need a Custom Package?</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
            Contact us to discuss your specific requirements and we'll create a tailored package for your special event
          </p>
          <button className="px-8 py-3 border border-[#d4a574] text-[#d4a574] rounded-full hover:bg-[#d4a574] hover:text-black transition-all duration-300 text-sm tracking-wider">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
