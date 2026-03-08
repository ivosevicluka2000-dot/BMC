'use client';

import React, { useEffect, useRef } from 'react';
import OptimizedImage from '../OptimizedImage';
import { useLanguage } from '@/lib/i18n';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Use lower threshold on mobile for earlier reveal and better performance
    const isMobile = window.innerWidth < 768;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother class addition
            requestAnimationFrame(() => {
              entry.target.classList.add('visible');
            });
          }
        });
      },
      { threshold: isMobile ? 0.1 : 0.2, rootMargin: '50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 lg:py-40 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 relative reveal">
            <div className="aspect-[3/4] overflow-hidden border border-white/5">
              <img 
                src="/gallery/gallery-1.jpg" 
                alt="The Machine" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-12 -left-6 lg:-left-12 flex flex-col space-y-4 items-center">
                <span className="[writing-mode:vertical-lr] uppercase tracking-[1em] text-[10px] text-white/20 font-light">{t('about.established')}</span>
                <div className="w-px h-32 bg-white/10" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-24 reveal delay-200">
            <div className="mb-12 inline-flex items-center space-x-4">
                <span className="text-white/50 uppercase tracking-[0.5em] text-[10px] font-bold">{t('about.sectionLabel')}</span>
                <div className="h-px w-12 bg-white/20" />
            </div>
            
            <h2 className="serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 md:mb-12 leading-[1.1] font-extralight tracking-tight">
              {t('about.heading1')} <span className="italic">{t('about.headingTrust')}</span>, <br />
              {t('about.heading2')} <span className="italic">{t('about.headingSteel')}</span>
            </h2>
            
            <div className="max-w-xl space-y-6 md:space-y-10 text-white/70 text-base md:text-lg leading-relaxed font-light">
              <p>
                {t('about.paragraph1')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
              
              <div className="pt-6 md:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-3">{t('about.discipline')}</h4>
                  <p className="text-xs font-light text-white/50 leading-relaxed">{t('about.disciplineDesc')}</p>
                </div>
                <div>
                  <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-3">{t('about.loyalty')}</h4>
                  <p className="text-xs font-light text-white/50 leading-relaxed">{t('about.loyaltyDesc')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
