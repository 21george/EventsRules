import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Users as UsersIcon } from 'lucide-react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export function ContactSection() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    serviceInterest: [] as string[],
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    serviceInterest: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const eventTypes = [
    { value: '', labelKey: 'contact.selectEventType' },
    { value: 'wedding', labelKey: 'contact.weddingReception' },
    { value: 'birthday', labelKey: 'contact.birthdayParty' },
    { value: 'corporate', labelKey: 'contact.corporateEvent' },
    { value: 'anniversary', labelKey: 'contact.anniversary' },
    { value: 'graduation', labelKey: 'contact.graduationParty' },
    { value: 'other', labelKey: 'contact.other' },
  ];

  const guestRanges = [
    { value: '', labelKey: 'contact.selectGuestCount' },
    { value: '1-25', labelKey: 'contact.guests1_25' },
    { value: '26-50', labelKey: 'contact.guests26_50' },
    { value: '51-100', labelKey: 'contact.guests51_100' },
    { value: '101-200', labelKey: 'contact.guests101_200' },
    { value: '200+', labelKey: 'contact.guests200plus' },
  ];

  const services = [
    { value: 'Cocktail Catering', labelKey: 'contact.cocktailCatering' },
    { value: 'Event Planning', labelKey: 'contact.eventPlanning' },
    { value: 'Entertainment/DJ', labelKey: 'contact.entertainmentDJ' },
    { value: 'Food Catering', labelKey: 'contact.foodCatering' },
    { value: 'Bar Setup', labelKey: 'contact.barSetup' },
    { value: 'Custom Drinks', labelKey: 'contact.customDrinks' },
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phone.length >= 10 && phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      eventType: '',
      serviceInterest: '',
      subject: '',
      message: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
      isValid = false;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = t('contact.phoneInvalid');
      isValid = false;
    }

    if (!formData.eventDate) {
      newErrors.eventDate = t('contact.eventDateRequired');
      isValid = false;
    } else {
      const selectedDate = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.eventDate = t('contact.eventDateFuture');
        isValid = false;
      }
    }

    if (!formData.guestCount) {
      newErrors.guestCount = t('contact.guestCountRequired');
      isValid = false;
    }

    if (!formData.eventType) {
      newErrors.eventType = t('contact.eventTypeRequired');
      isValid = false;
    }

    if (formData.serviceInterest.length === 0) {
      newErrors.serviceInterest = t('contact.serviceRequired');
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.subjectRequired');
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.messageMinLength');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitError) {
      setSubmitError('');
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const newServices = prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter((s) => s !== service)
        : [...prev.serviceInterest, service];
      
      return {
        ...prev,
        serviceInterest: newServices,
      };
    });

    // Clear error when user selects a service
    if (errors.serviceInterest) {
      setErrors((prev) => ({
        ...prev,
        serviceInterest: '',
      }));
    }

    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitError) {
      setSubmitError('');
    }

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const result = await axios.post(`${import.meta.env.VITE_API_URL}/eventinfos`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        let resultData: any = null;
        try {
          resultData = result.data;
        } catch {
          resultData = null;
        }

        if (!result.status || !resultData?.success) {
          setSubmitError(
            resultData?.error ||
              `Failed to submit form (status ${result.status}). Please try again.`
          );
          setIsSubmitting(false);
          return;
        }

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          guestCount: '',
          eventType: '',
          serviceInterest: [],
          subject: '',
          message: '',
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError("Something went wrong submitting the form. Please try again.");
        setIsSubmitting(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      titleKey: 'contact.phone',
      details: '+4915563012884',
      link: 'tel:+4915563012884',
    },
    {
      icon: <Mail size={20} />,
      titleKey: 'contact.email',
      details: 'info@eventsrules.com',
      link: 'mailto:info@eventsrules.com',
    },
    {
      icon: <MapPin size={20} />,
      titleKey: 'contact.location',
      details: 'München',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="ContactSection" className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl text-white tracking-[0.3em] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xl mb-4">{t('contact.letsTalk')}</h3>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8">
                {t('contact.description')}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 border border-[#d4a574]/20 rounded-lg hover:border-[#d4a574] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 border border-[#d4a574] flex items-center justify-center text-[#d4a574] flex-shrink-0 group-hover:bg-[#d4a574] group-hover:text-black transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-sm mb-1">{t(info.titleKey)}</h4>
                    <p className="text-gray-400 text-sm group-hover:text-[#d4a574] transition-colors">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-zinc-900/50 border border-[#d4a574]/20 rounded-lg">
              <h4 className="text-white text-sm mb-4">{t('contact.businessHours')}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>{t('contact.mondayFriday')}</span>
                  <span className="text-[#d4a574]">9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>{t('contact.saturdaySunday')}</span>
                  <span className="text-[#d4a574]">10:00 AM - 2:00 AM</span>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            
          </div>

          {/* Right - Contact Form */}
          <div className="relative">
            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute top-0 left-0 right-0 bg-green-900/90 border border-green-700 rounded-lg p-4 flex items-center gap-3 z-10 animate-fade-in">
                <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.messageSentTitle')}</h4>
                  <p className="text-green-200 text-sm">{t('contact.messageSentDescription')}</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {!isSubmitted && submitError && (
              <div className="absolute top-0 left-0 right-0 bg-zinc-900/80 border border-red-500 rounded-lg p-4 z-10 animate-fade-in">
                <h4 className="text-white font-medium mb-1">{t('contact.errorTitle')}</h4>
                <p className="text-red-500 text-sm">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                     {t('contact.nameLabel')} <span className="text-[#d4a574]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                      errors.name ? 'border-red-500' : 'border-[#d4a574]/20'
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] transition-colors`}
                    placeholder={t('contact.namePlaceholder')}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                    {t('contact.emailLabel')} <span className="text-[#d4a574]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                      errors.email ? 'border-red-500' : 'border-[#d4a574]/20'
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] transition-colors`}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-300 text-sm mb-2">
                  {t('contact.phoneLabel')} <span className="text-gray-500 text-xs">({t('contact.optional')})</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                    errors.phone ? 'border-red-500' : 'border-[#d4a574]/20'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] transition-colors`}
                  placeholder={t('contact.phonePlaceholder')}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Event Date and Guest Count Row */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-gray-300 text-sm mb-2">
                    <Calendar size={14} className="inline mr-1" />
                    {t('contact.eventDate')} <span className="text-[#d4a574]">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                      errors.eventDate ? 'border-red-500' : 'border-[#d4a574]/20'
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] transition-colors`}
                  />
                  {errors.eventDate && (
                    <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>
                  )}
                </div>

                {/* Guest Count */}
                <div>
                  <label htmlFor="guestCount" className="block text-gray-300 text-sm mb-2">
                    <UsersIcon size={14} className="inline mr-1" />
                    {t('contact.numberOfGuests')} <span className="text-[#d4a574]">*</span>
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                      errors.guestCount ? 'border-red-500' : 'border-[#d4a574]/20'
                    } rounded-lg text-white focus:outline-none focus:border-[#d4a574] transition-colors`}
                  >
                    {guestRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {t(range.labelKey)}
                      </option>
                    ))}
                  </select>
                  {errors.guestCount && (
                    <p className="text-red-500 text-xs mt-1">{errors.guestCount}</p>
                  )}
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="eventType" className="block text-gray-300 text-sm mb-2">
                  {t('contact.eventType')} <span className="text-[#d4a574]">*</span>
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                    errors.eventType ? 'border-red-500' : 'border-[#d4a574]/20'
                  } rounded-lg text-white focus:outline-none focus:border-[#d4a574] transition-colors`}
                >
                  {eventTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {t(type.labelKey)}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>
                )}
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-gray-300 text-sm mb-3">
                  {t('contact.servicesInterested')} <span className="text-[#d4a574]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service.value}
                      className={`flex items-center gap-2 p-3 border ${
                        formData.serviceInterest.includes(service.value)
                          ? 'border-[#d4a574] bg-[#d4a574]/10'
                          : 'border-[#d4a574]/20'
                      } rounded-lg cursor-pointer hover:border-[#d4a574] transition-colors`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.serviceInterest.includes(service.value)}
                        onChange={() => handleServiceToggle(service.value)}
                        className="w-4 h-4 accent-[#d4a574]"
                      />
                      <span className="text-gray-300 text-sm">{t(service.labelKey)}</span>
                    </label>
                  ))}
                </div>
                {errors.serviceInterest && (
                  <p className="text-red-500 text-xs mt-1">{errors.serviceInterest}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm mb-2">
                  {t('contact.subject')} <span className="text-[#d4a574]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                    errors.subject ? 'border-red-500' : 'border-[#d4a574]/20'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] transition-colors`}
                  placeholder={t('contact.subjectPlaceholder')}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                  {t('contact.message')} <span className="text-[#d4a574]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-zinc-900/50 border ${
                    errors.message ? 'border-red-500' : 'border-[#d4a574]/20'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] transition-colors resize-none`}
                  placeholder={t('contact.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-[#d4a574] text-black rounded-full hover:bg-[#c49564] transition-all duration-300 text-sm tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.sendMessage')}
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        
      </div>
    </section>
  );
}