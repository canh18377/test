import OurProcess from "@/app/_utils/process";
import OurServices from "@/app/_utils/our-services";
import ProjectIdea from "@/app/_utils/project-idea-banner";
import HowWeWork from "@/app/_utils/how-we-work";
import Testimonial from "@/app/_utils/testimonial";
import {
  homeFAQ,
  homeFeaturesData,
  homeTestimonialData,
} from "@/lib/data/data";
import HeroSection from "./_utils/herosection";
import Faq from "./_utils/faq";
import { BrandCarousel } from "./_utils/carousel";
import { useTranslations } from 'next-intl';

const HomePage = () => {
  const t = useTranslations('HomePage');

  return (
    <main>
      <HeroSection
        H1={
          <>
            <span dangerouslySetInnerHTML={{ __html: t('heroTitle') }} />
          </>
        }
        P={
          <>
            {t('heroDescription')}
          </>
        }
        videoLink="https://www.youtube.com/embed/04pWB5aj-DE?si=KhMa8PqMC6WmL_K1"
      />
      <BrandCarousel />
      <OurServices FeaturesData={homeFeaturesData.slice(0, 6)} />
      <OurProcess />
      <Testimonial calendly={true} data={homeTestimonialData} />
      <HowWeWork />
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-center bg-cover">
        <Faq data={homeFAQ} />
        <ProjectIdea />
      </div>
    </main>
  );
};

export default HomePage;
