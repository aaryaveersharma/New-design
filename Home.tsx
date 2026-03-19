import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeaturesChess from '@/components/FeaturesChess';
import FeaturesGrid from '@/components/FeaturesGrid';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTAFooter from '@/components/CTAFooter';

/**
 * AI Design Agency Landing Page
 * Dark Premium Minimalism with Liquid Glass Morphism
 * 
 * Design Philosophy:
 * - Pure black background as canvas
 * - Liquid glass effects for depth and sophistication
 * - Video backgrounds for cinematic motion
 * - Precision typography with Instrument Serif (headings) + Barlow (body)
 * - Animations guide attention and create narrative flow
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesChess />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <CTAFooter />
    </div>
  );
}
