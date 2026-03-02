import { useEffect } from 'react';
import { Link } from 'react-router';
import { StructuredData, breadcrumbSchema } from '../components/StructuredData';
import RohitImage from '../Image/PHOTO-2026-02-10-00-47-20.jpg';



interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  linkedin?: string;
  experience: {
    years: number;
    description: string;
  };
 
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'George Alsag',
    role: 'Founder & CEO',
    title: 'Visionary Leader',
    image: 'https://images.unsplash.com/photo-1472745942893-3990c9b4d7b4?w=800',
    bio: 'George founded VIP Staffing in 2015 with a vision to revolutionize the event staffing industry. With over 7 years of experience in hospitality management and event coordination, he recognized the need for a premium staffing agency that prioritizes both client satisfaction and worker welfare. Under his leadership, VIP Staffing has grown from a small local operation to one of the most trusted names in event staffing across the region.',
    email: 'george@vipstaffing.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/georgealsag',
    experience: {
      years: 7,
      description: 'Over 7 years of experience in hospitality management, event coordination, and staffing operations. Previously served as Director of Operations at luxury hotels and event venues.'
    },
  },

  {
    id: '2',
    name: ' Rohit Joshi',
    role: 'Co-Founder & COO',
    title: 'Operations Specialist',
    image: RohitImage,
    bio: 'Rohit co-founded VIP Staffing alongside George, bringing his extensive background in operations management and human resources. With a passion for creating efficient systems and nurturing talent, he oversees all day-to-day operations, staff training, and quality assurance. His commitment to excellence ensures that every staff member represents the VIP Staffing brand with professionalism and expertise.',
    email: 'rohit@vipstaffing.com',
    phone: '+1 (555) 123-4568',
    linkedin: 'https://linkedin.com/in/joshi',
    experience: {
      years: 8,
      description: '8 years of experience in operations management, human resources, and training development. Previously managed large-scale hospitality operations for Fortune 500 companies.'
    },
  }
];

export function Workers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Schema for team members
 const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VIP Staffing',
    employee: teamMembers.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      email: member.email,
      telephone: member.phone,
      worksFor: {
        '@type': 'Organization',
        name: 'VIP Staffing'
      }
    }))
  };

  return (
    <div className="min-h-screen bg-black">
      
      <StructuredData data={teamSchema} />
      <StructuredData data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Our Team', url: '/workers' }
      ])} />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-tight">
              Meet Our Leadership Team
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
              The visionaries behind VIP Staffing, committed to excellence in event staffing and exceptional service delivery
            </p>
          </div>
        </div>
      </section>

      

      {/* Team Members Section */}
      {teamMembers.map((member, index) => (
        <section key={member.id} className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-black' : 'bg-zinc-900/20'}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="inline-block px-4 py-1 bg-[#d4a574]/20 border border-[#d4a574] rounded-full text-[#d4a574] text-sm mb-4">
                    {member.title}
                  </div>
                  <h2 className="text-4xl lg:text-5xl text-white mb-2">{member.name}</h2>
                  <p className="text-xl text-[#d4a574]">{member.role}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Company Vision Section */}
      {/*<section className="bg-zinc-900/30 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#d4a574]/20 border-2 border-[#d4a574] flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-[#d4a574]" />
            </div>
            <h2 className="text-4xl lg:text-5xl text-white">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Together, Michael and Sarah have built VIP Staffing on a foundation of integrity, excellence, and genuine care for both clients and staff. Their complementary skills – Michael's visionary leadership combined with Sarah's operational expertise – have created a company culture that values professionalism, reliability, and continuous improvement.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Their shared commitment to raising industry standards has positioned VIP Staffing as a trusted partner for venues, event planners, and businesses seeking the very best in professional event staffing. They continue to innovate, expand, and lead the way in transforming how the event staffing industry operates.
            </p>
            
            <div className="pt-8">
              <Link
                to="/#services"
                className="inline-block px-10 py-4 bg-[#d4a574] text-black rounded-full hover:bg-[#c49564] transition-all duration-300 tracking-wider text-lg font-medium"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Join Our Team CTA */}
      {/*<section className="bg-black py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-r from-zinc-900 to-black border border-[#d4a574]/30 rounded-2xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Want to Join Our Growing Team?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented, professional individuals to join our roster of event staff. Work with the best and be part of unforgettable events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@vipstaffing.com"
                className="px-8 py-3 bg-[#d4a574] text-black rounded-full hover:bg-[#c49564] transition-all duration-300 tracking-wider"
              >
                Apply Now
              </a>
              <Link
                to="/"
                className="px-8 py-3 border-2 border-[#d4a574] text-[#d4a574] rounded-full hover:bg-[#d4a574] hover:text-black transition-all duration-300 tracking-wider"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}