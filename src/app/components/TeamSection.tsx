import RohitImage from '../Image/PHOTO-2026-02-10-00-47-20.jpg';
import GeorgeImage from '../Image/IMG_0807 - Edited.jpg';
import { useTranslation } from 'react-i18next';
  
  
export default function TeamSection() {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      name: 'George Alsag',
      roleKey: 'team.headBartender',
      image: GeorgeImage,
    },
    {
      name: 'Rohit Joshi',
      roleKey: 'team.seniorBartender',
      image: RohitImage,
    },
  ] as const;

  return (
    <section className="bg-black py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="space-y-4 text-center max-w-sm"
            >
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-white text-xl">{member.name}</h3>
              <p className="text-gray-500 text-sm">{t(member.roleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}