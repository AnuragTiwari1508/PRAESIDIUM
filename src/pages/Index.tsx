import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import VotingSection from '@/components/VotingSection';
import SubsidySection from '@/components/SubsidySection';
import IdentitySection from '@/components/IdentitySection';
import TransparencySection from '@/components/TransparencySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesOverview />
      <VotingSection />
      <SubsidySection />
      <IdentitySection />
      <TransparencySection />
      <Footer />
    </div>
  );
};

export default Index;
