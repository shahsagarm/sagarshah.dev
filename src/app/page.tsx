import HeroSection from '@/app/sections/hero';
import ContactSection from '@/app/sections/contact';
import AboutMeSection from '@/app/sections/about-me';
import SkillsSection from '@/app/sections/skills';
import ExperienceSection from '@/app/sections/experiences';
import TestimonialsSection from '@/app/sections/testimonials';
import WorkSection from '@/app/sections/work';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
