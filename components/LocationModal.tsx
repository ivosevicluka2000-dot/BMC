'use client';

import React, { useEffect } from 'react';
import { Location } from '../data/locations';
import { useLanguage } from '@/lib/i18n';

interface LocationModalProps {
  location: Location;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ location, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Compact Modal */}
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black border border-white/20 transition-colors"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-4">
            <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest border ${
              location.type === 'shop' 
                ? 'bg-brand/20 border-brand/40 text-brand' 
                : 'bg-white/10 border-white/20 text-white/80'
            }`}>
              {location.type === 'shop' ? t('locationModal.shop') : t('locationModal.service')}
            </span>
          </div>

          {/* Name */}
          <h2 className="serif text-2xl text-white mb-1">{location.name}</h2>
          <p className="text-white/50 text-xs uppercase tracking-widest mb-6">{location.city}</p>

          {/* Details */}
          <div className="space-y-4 mb-6">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/20">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-0.5">{t('locationModal.address')}</span>
                <span className="text-white text-sm">{location.address}, {location.city}</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/20">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-0.5">{t('locationModal.hours')}</span>
                <span className="text-white text-sm">{location.hours}</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/20">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-0.5">{t('locationModal.phone')}</span>
                <a 
                  href={`tel:${location.phone}`}
                  className="text-white text-sm hover:text-brand transition-colors"
                >
                  {location.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a 
              href={`tel:${location.phone}`}
              className="flex-1 bg-brand text-white flex items-center justify-center gap-2 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('locationModal.callUs')}
            </a>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 border border-white/30 text-white/80 flex items-center justify-center gap-2 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {t('locationModal.directions')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
