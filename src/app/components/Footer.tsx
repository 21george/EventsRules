import React from "react";
import { useTranslation } from "react-i18next";

export default function FooterSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-[140px]  border-t border-[#d4a574]/20">
        <div className="max-w-[1630px] px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-10  justify-between items-start pb-10 sm:pb-12 lg:pb-[90px]">
            {/* Left Content - Logo & Address */}
            <div className="flex flex-col w-full lg:max-w-[400px]">
              {/* Logo */}
              <a href="/" className="inline-block mb-6 sm:mb-8">
                <img
                  width="189"
                  height="100"
                  alt="Event Rules Logo"
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
                  className="h-auto w-[150px] object-contain brightness-0 invert sm:w-[170px] md:w-[189px]"
                />
              </a>
            </div>

            {/* Right Content - Contact */}
            <div className="flex flex-col sm:flex-row lg:flex-row gap-6 sm:gap-8 lg:gap-[72px] justify-start lg:justify-end items-start w-full lg:w-auto mt-6 lg:mt-0">
              <div className="flex flex-col justify-start items-start w-full sm:w-auto">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h6 className="text-white text-left uppercase font-poppins text-base sm:text-lg md:text-xl font-medium leading-normal">
                    {t("footer.hours")}
                  </h6>

                  <div className="space-y-2 text-gray-400">
                    <p>{t("footer.mondayThursday")}</p>
                    <p>{t("footer.fridaySaturday")}</p>
                    <p>{t("footer.sunday")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-[#d4a574]/20 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Event Rules.{" "}
            {t("footer.allRightsReserved") || "All rights reserved."}
          </div>
        </div>
      </section>
    </>
  );
}
