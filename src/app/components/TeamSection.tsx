import RohitImage from '../Image/PHOTO-2026-02-10-00-47-20.jpg';
//import GeorgeImage from '../Image/PHOTO-2026-02-10-00-47-19.jpg';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'George Alsag',
      role: 'Head Bartender',
      image: undefined,
      // image: GeorgeImage,
    },
    {
      name: 'Rohit Joshi',
      role: 'Senior Bartender',
      image: RohitImage,
    },
  ] as const;

  return (
    <div className=" ">
          <section className="bg-black py-16 lg:py-24 items-center justify-center flex">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="space-y-4 text-center">
                <div className="relative h-[350px] overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-white text-xl">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
