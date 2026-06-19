import BackgroundSystem from '../components/layout/BackgroundSystem';
import HeroSection from '../components/sections/HeroSection';
import TrustedByParents from '../components/sections/TrustedByParents';
import WorkshopHighlights from '../components/sections/WorkshopHighlights';
import LearningJourney from '../components/sections/LearningJourney';
import Curriculum from '../components/sections/Curriculum';
import ProjectShowcase from '../components/sections/ProjectShowcase';
import WhyLearnAIToday from '../components/sections/WhyLearnAIToday';
import InstructorSection from '../components/sections/InstructorSection';
import WorkshopGallery from '../components/sections/WorkshopGallery';
import Testimonials from '../components/sections/Testimonials';
import ParentBenefits from '../components/sections/ParentBenefits';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';

const Home = () => {
  return (
    <div className="relative">
      <BackgroundSystem />
      <HeroSection />
      <TrustedByParents />
      <WorkshopHighlights />
      <LearningJourney />
      <Curriculum />
      <ProjectShowcase />
      <WhyLearnAIToday />
      <InstructorSection />
      <WorkshopGallery />
      <Testimonials />
      <ParentBenefits />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Home;
