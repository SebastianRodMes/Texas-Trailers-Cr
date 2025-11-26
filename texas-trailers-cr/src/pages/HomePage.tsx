import Hero from '../components/home/Hero';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <CallToAction />
    </>
  );
};

export default HomePage;
