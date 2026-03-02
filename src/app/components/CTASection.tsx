import { Facebook, Instagram, Youtube } from 'lucide-react';

interface CTASectionProps {
  backgroundImage: string;
}

export function CTASection({ backgroundImage }: CTASectionProps) {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-2">
          {/* Left side - Text content */}
          <div className="relative bg-black flex items-center justify-center py-24 px-12">
            <div className="max-w-md space-y-8">
              <h2 className="text-3xl lg:text-4xl text-white leading-tight">
                Make An Unforgettable
                <br />
                Party Together
              </h2>
              <button className="px-10 py-3 border border-[#d4a574] text-[#d4a574] rounded-full hover:bg-[#d4a574] hover:text-black transition-all duration-300 text-sm tracking-wider">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative min-h-[500px]">
            <img
              src={backgroundImage}
              alt="Party celebration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Social Media Icons - Desktop */}
        <div className="bg-black py-8">
          <div className="flex justify-center items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#d4a574]/50 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#d4a574]/50 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#d4a574]/50 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Party celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-[600px] text-center space-y-8">
          <h2 className="text-2xl text-white leading-tight">
            Make An Unforgettable
            <br />
            Party Together
          </h2>
          <button className="px-10 py-3 border border-[#d4a574] text-[#d4a574] rounded-full hover:bg-[#d4a574] hover:text-black transition-all duration-300 text-sm tracking-wider">
            Contact Us
          </button>
        </div>

        {/* Social Media Icons - Mobile */}
        <div className="relative bg-black py-8">
          <div className="flex justify-center items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#d4a574]/50 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#d4a574]/50 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#d4a574]/50 flex items-center justify-center text-[#d4a574] hover:bg-[#d4a574] hover:text-black transition-all"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}