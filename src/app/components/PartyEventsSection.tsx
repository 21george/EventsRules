import { ArrowRight } from 'lucide-react';
import { StructuredData, eventSchema } from './StructuredData';

interface PartyEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface PartyEventsSectionProps {
  events: PartyEvent[];
}

export function PartyEventsSection({ events }: PartyEventsSectionProps) {
  return (
    <section className="bg-black py-16 lg:py-24">
      {/* Add structured data for each event */}
      {events.map((event) => (
        <StructuredData 
          key={`event-schema-${event.id}`}
          data={eventSchema('Party Event', event.title)} 
        />
      ))}
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl text-white tracking-[0.3em] mb-4">
            PARTY EVENTS
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
            From birthdays to corporate celebrations, we specialize in creating memorable party experiences
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-12 lg:space-y-16">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-white text-2xl lg:text-3xl">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  {event.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {event.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a574]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#d4a574] text-sm hover:gap-3 transition-all pt-2"
                >
                  Book This Event
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}