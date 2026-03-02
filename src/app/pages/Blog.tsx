import { useState } from 'react';
import { StructuredData, blogPostSchema, breadcrumbSchema } from '../components/StructuredData';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Meet Our New Bartender',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://images.unsplash.com/photo-1682629906883-76eaa5e03693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBibHVlJTIwY29ja3RhaWwlMjBnbGFzc3xlbnwxfHx8fDE3NzIwMjQ2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'February 20, 2026',
  },
  {
    id: 2,
    title: 'Meet Our New Cocktail',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1643005498149-c7684a669bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwY2xvc2UlMjB1cCUyMGRhcmt8ZW58MXx8fHwxNzcyMDI1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'February 18, 2026',
  },
  {
    id: 3,
    title: 'Free Flow',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1563312416-4ca09c8ba9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2NrdGFpbCUyMGRyaW5rJTIwZ29sZHxlbnwxfHx8fDE3NzIwMjUyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'February 15, 2026',
  },
  {
    id: 4,
    title: "Steve's Party",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1767954825607-b4b979fb4a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNyb3dkJTIwcmVkJTIwbGlnaHRpbmclMjBldmVudHxlbnwxfHx8fDE3NzIwMjU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'February 10, 2026',
  },
  {
    id: 5,
    title: 'Opening Party',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1699616041100-2e1b3950584e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBhcnR5JTIwcHVycGxlJTIwbGlnaHRzJTIwZGFuY2luZ3xlbnwxfHx8fDE3NzIwMjU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'February 5, 2026',
  },
];

export function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-black">
      
      <StructuredData data={blogPostSchema(
        featuredPost.title,
        featuredPost.description,
        featuredPost.image,
        featuredPost.date
      )} />
      <StructuredData data={breadcrumbSchema(
        [
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]
      )} />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567724066312-8dd87bca051e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMHN0b3JpZXMlMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NzIwMjY0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="VIP Bar Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl lg:text-6xl text-white tracking-[0.3em] mb-4">
              BLOG
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stories, insights, and inspiration from the world of luxury cocktails
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-white text-2xl mb-4">{featuredPost.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {featuredPost.description}
              </p>
              <button className="self-start px-6 py-2 bg-[#d4a574] text-black rounded-full hover:bg-[#c49564] transition-colors text-sm tracking-wider">
                Read More
              </button>
            </div>
          </div>

          {/* Other Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {otherPosts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer"
              >
                {/* Post Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Post Title */}
                <h3 className="text-white text-base mb-2 group-hover:text-[#d4a574] transition-colors">
                  {post.title}
                </h3>

                {/* Post Description - Hidden on Mobile */}
                <p className="hidden lg:block text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {post.description}
                </p>

                {/* Read More Link */}
                <button className="text-[#d4a574] text-sm hover:text-[#c49564] transition-colors">
                  Read More →
                </button>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`transition-all ${
                  currentPage === index
                    ? 'w-8 h-2 bg-[#d4a574]'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                } rounded-full`}
              />
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#d4a574]/30 flex items-center justify-center text-gray-400 hover:text-[#d4a574] hover:border-[#d4a574] transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#d4a574]/30 flex items-center justify-center text-gray-400 hover:text-[#d4a574] hover:border-[#d4a574] transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#d4a574]/30 flex items-center justify-center text-gray-400 hover:text-[#d4a574] hover:border-[#d4a574] transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://book.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#d4a574]/30 flex items-center justify-center text-gray-400 hover:text-[#d4a574] hover:border-[#d4a574] transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}