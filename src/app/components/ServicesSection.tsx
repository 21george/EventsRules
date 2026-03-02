import { Martini, Users, Music, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  slug?: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  // Map service titles to slugs
  const getServiceSlug = (title: string) => {
    const slugMap: Record<string, string> = {
      'Cocktail Catering': 'cocktail-catering',
      'Event Planning': 'event-planning',
      'Entertainment': 'entertainment',
      'Catering Services': 'catering-services',
    };
    return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section id="services" className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl text-white tracking-[0.3em] mb-4">
            OUR SERVICES
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
            We offer a comprehensive range of premium bar and event services to make your celebration unforgettable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const slug = service.slug || getServiceSlug(service.title);
            return (
              <Link
                key={service.id}
                to={`/services/${slug}`}
                className="group relative overflow-hidden rounded-lg bg-zinc-900/50 border border-[#d4a574]/20 hover:border-[#d4a574] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#d4a574]/20 backdrop-blur-sm border border-[#d4a574] flex items-center justify-center text-[#d4a574]">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-white text-lg group-hover:text-[#d4a574] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#d4a574] text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}