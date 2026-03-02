import { ArrowRight } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface StoriesSectionProps {
  stories: Story[];
  featuredImage: string;
}

export function StoriesSection({ stories, featuredImage }: StoriesSectionProps) {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-center text-2xl lg:text-3xl text-white tracking-[0.3em] mb-12 lg:mb-16">
          STORIES
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Featured Image */}
          <div className="relative aspect-[4/5]">
            <img
              src={featuredImage}
              alt="Featured cocktails"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right - Story Cards */}
          <div className="space-y-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="group flex gap-6"
              >
                <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-white text-lg group-hover:text-[#d4a574] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {story.description}
                  </p>
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#d4a574] text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Featured Image on Mobile */}
          <div className="relative aspect-[4/3] mb-8">
            <img
              src={featuredImage}
              alt="Featured cocktails"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Story Cards */}
          {stories.map((story) => (
            <div key={story.id} className="group">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-white text-base group-hover:text-[#d4a574] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {story.description}
                  </p>
                </div>
              </div>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-[#d4a574] text-sm hover:gap-3 transition-all"
              >
                Read More
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}