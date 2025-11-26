import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import CategoriesSection from './components/home/CategoriesSection';
import FeaturedProducts from './components/home/FeaturedProducts';
import CallToAction from './components/home/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#c41e3a] selection:text-white">
      <Header />

      <main>
        <Hero />
        <CategoriesSection />
        <FeaturedProducts />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}