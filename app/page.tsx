'use client';

import AboutSection from '@/components/AboutSection/AboutSection';
import ProductsSection from '@/components/ProductsSection/ProductsSection';
import OverviewSection from '@/components/OverviewSection/OverviewSection';
import TopNavBar from '@/components/TopNavBar/TopNavBar';
import { useHome } from '@/hooks/useHome';

export default function HomePage() {
  const {
    navbarRef,
    overviewRef,
    aboutRef,
    projectsRef,
    scrollToSection
  } = useHome()

  return (
    <div>
      <TopNavBar
        navbarRef={navbarRef!}
        overviewRef={overviewRef!}
        aboutRef={aboutRef!}
        projectsRef={projectsRef!}
        scrollToSection={scrollToSection}
      />

      <div className='mt-[60px] h-screen-minus-header'>
        <section
          ref={overviewRef}
          className='min-h-full w-full'
        >
          <OverviewSection />
        </section>

        <section
          ref={aboutRef}
          className="min-h-full"
        >
          <AboutSection />
        </section>

        <section
          ref={projectsRef}
          className="min-h-full"
        >
          <ProductsSection />
        </section>
      </div>
    </div>
  );
}