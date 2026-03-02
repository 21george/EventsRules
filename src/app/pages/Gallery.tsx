import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import { StructuredData, imageGallerySchema, breadcrumbSchema } from '../components/StructuredData';

interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1767954825607-b4b979fb4a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNyb3dkJTIwcmVkJTIwbGlnaHRpbmclMjBldmVudHxlbnwxfHx8fDE3NzIwMjU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'activity',
    title: "Steve's Party",
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1699616041100-2e1b3950584e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHBhcnR5JTIwcHVycGxlJTIwbGlnaHRzJTIwZGFuY2luZ3xlbnwxfHx8fDE3NzIwMjU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'activity',
    title: 'DJ Night',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1669135325840-590177566f89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBwb3VyaW5nJTIwY29ja3RhaWwlMjBnbGFzc2VzfGVufDF8fHx8MTc3MjAyNTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'services',
    title: 'Cocktail Service',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1643005498149-c7684a669bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwY2xvc2UlMjB1cCUyMGRhcmt8ZW58MXx8fHwxNzcyMDI1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'cocktails',
    title: 'Signature Drink',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1765615202714-e9c809896e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGV2ZW50JTIwY2VsZWJyYXRpb24lMjBwZW9wbGV8ZW58MXx8fHwxNzcyMDI1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'activity',
    title: 'Celebration Night',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1562548726-7efdb4f84326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwY29ja3RhaWxzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIwMjUyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'cocktails',
    title: 'Wedding Reception',
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('activity');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'services', label: 'Services' },
    { id: 'activity', label: 'Activity' },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentImage = filteredImages[currentImageIndex] || filteredImages[0];
  
  const allImageUrls = galleryImages.map(img => img.url);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-black">
     
      <StructuredData data={imageGallerySchema(allImageUrls)} />
      <StructuredData data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Gallery', url: '/gallery' },
      ])} />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1768508948990-f5866f800fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXIlMjBldmVudCUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBjaGFtcGFnbmV8ZW58MXx8fHwxNzcyMDI2NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="VIP Bar Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl lg:text-6xl text-white tracking-[0.3em] mb-4">
              GALLERY
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore moments of elegance and celebration from our premium events
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentImageIndex(0);
              }}
              className={`text-sm tracking-wider transition-colors relative ${
                selectedCategory === category.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {category.label}
              {selectedCategory === category.id && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#d4a574]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Image with Thumbnails */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Large Featured Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full h-full object-cover"
              />
              {/* Title Overlay on Mobile */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <h2 className="text-white text-xl mb-2">{currentImage.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                  nonummy eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut wisi enim ad minim veniam.
                </p>
              </div>
            </div>

            {/* Text Content - Desktop Only */}
            <div className="hidden lg:block">
              <h2 className="text-white text-2xl mb-4">{currentImage.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                consequat.
              </p>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {filteredImages.slice(0, 5).map((image, index) => (
              <div
                key={image.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer transition-all ${
                  currentImageIndex === index
                    ? 'ring-2 ring-[#d4a574]'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full border border-[#d4a574]/30 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`transition-all ${
                    currentImageIndex === index
                      ? 'w-8 h-2 bg-[#d4a574]'
                      : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                  } rounded-full`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#d4a574]/30 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

         
        </div>
      </div>
    </div>
  );
}