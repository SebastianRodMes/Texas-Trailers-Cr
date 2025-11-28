import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Button from '../ui/Button';
import imgLogo from '../../assets/logoApp.png';
import imgLogoWhite from '../../assets/logoAppWhite.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md shadow-xl py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-4'}`}>
      {/* Top Bar Info (Desktop) */}
      <div className={`hidden md:flex justify-between container mx-auto px-6 mb-2 text-sm font-medium tracking-wide transition-opacity ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 text-zinc-300'}`}>
        <div className="flex gap-6">
          <span className="flex items-center gap-2 hover:text-[#c41e3a] transition-colors cursor-pointer">
            <MapPin size={18} className="text-[#c41e3a]" /> Orotina, Ruta 27, Costa Rica
          </span>
          <span className="flex items-center gap-2 hover:text-[#c41e3a] transition-colors cursor-pointer">
            <Phone size={18} className="text-[#c41e3a]" /> 8730-9666
          </span>
        </div>
        <div className="flex gap-4">
          <span>Importadores Directos desde 2010</span>
          <div className="flex gap-3 border-l border-zinc-600 pl-4">
            <Facebook size={18} className="hover:text-[#c41e3a] cursor-pointer" />
            <Instagram size={18} className="hover:text-[#c41e3a] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`container mx-auto px-4 md:px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20 mt-0' : 'h-16 md:h-20 mt-8'}`}>

        {/* Logo dinámico según scroll */}
        <div className="flex items-center h-full transition-all duration-300 -ml-5">
          {!isScrolled ? (
            // LOGO GRANDE (Inicio de página)
            <img 
              src={imgLogo}
              alt="Texas Trailers Logo Grande"
              className="
                h-12 md:h-14
                w-auto
                object-contain
                scale-[5.4] md:scale-[6]
                origin-left
                transition-all duration-300
              "
            />
          ) : (
            // LOGO PEQUEÑO (Navbar al hacer scroll)
            <img 
              src={imgLogoWhite}
              alt="Texas Trailers Logo Nav"
              className="
                h-10 md:h-12
                w-auto
                object-contain
                scale-[4.8] md:scale-[5.5]
                origin-left
                transition-all duration-300
              "
            />
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Inicio', 'Catálogo', 'Accesorios', 'Nosotros'].map((item) => (
            <a key={item} href="#" className="text-sm font-bold text-white uppercase tracking-wider hover:text-[#c41e3a] transition-colors relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#c41e3a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button variant="primary" className="py-2 px-4 text-xs">
            Contactar Vendedor
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-in slide-in-from-top-5">
          {['Inicio', 'Catálogo', 'Accesorios', 'Nosotros', 'Contacto'].map((item) => (
            <a key={item} href="#" className="text-lg font-bold text-white uppercase border-b border-zinc-800 pb-2" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <Button className="w-full mt-4">Llamar Ahora</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
