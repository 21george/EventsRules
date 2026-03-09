import React from 'react'
import { useTranslation } from 'react-i18next';

export default function FooterSection() {
  const { t } = useTranslation();
  
  return (
<section className="bg-black py-16 lg:py-24 border-t border-[#d4a574]/20">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-3 gap-12">
      
      {/* Hours Section */}
      <div className="flex flex-col items-center text-center lg:col-start-2">
        <h3 className="text-white text-xl mb-6 tracking-[0.2em]">{t('footer.hours')}</h3>
        <div className="space-y-2 text-gray-400">
          <p>{t('footer.mondayThursday')}</p>
          <p>{t('footer.fridaySaturday')}</p>
          <p>{t('footer.sunday')}</p>
        </div>
      </div>

    </div>

    <div className="mt-12 pt-8 border-t border-[#d4a574]/20 text-center text-gray-500 text-sm">
      {t('footer.copyright')}
    </div>
  </div>
</section>  )
}
