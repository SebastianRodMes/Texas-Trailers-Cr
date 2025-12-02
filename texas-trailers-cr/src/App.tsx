import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FirebaseTestPage from './pages/FirebaseTestPage';
import PageTransitionLoader from './components/ui/PageTransitionLoader';

export default function App() {
  return (
    <BrowserRouter>
      <PageTransitionLoader />
      <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#c41e3a] selection:text-white">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/test" element={<FirebaseTestPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}