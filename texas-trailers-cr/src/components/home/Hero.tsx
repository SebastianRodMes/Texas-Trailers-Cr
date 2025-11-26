import { ChevronRight, Shield, Container, Clock } from 'lucide-react';
import Button from '../ui/Button';
import heroBackgroundImage from '../../assets/background_hero_image.png';

const Hero = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackgroundImage}
          alt="Texas Trailers Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c41e3a] rounded mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">Importadores Directos</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            LAS MEJORES <br />
            MARCAS <br />
            <span className="text-zinc-300">EN UN SOLO</span> <br />
            <span className="text-zinc-300">LUGAR</span>
            <span className="text-[#c41e3a]">.</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Traemos los mejores remolques con ingeniería americana a Costa Rica.
            Venta directa y respaldo garantizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button variant="primary" className="group uppercase font-bold tracking-wide">
              Ver Inventario Disponible
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" className="uppercase font-bold tracking-wide">
              Pedidos Especiales
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Stats Strip */}
      <div className="absolute bottom-0 w-full bg-black/90 border-t border-zinc-800 backdrop-blur-sm py-6 hidden md:block">
        <div className="container mx-auto px-6 flex justify-around text-zinc-400">
          <div className="flex items-center gap-3">
            <Button variant="primary" className="!p-2 !rounded-full pointer-events-none">
              <Shield size={20} />
            </Button>
            <div>
              <p className="text-white font-bold uppercase text-sm">Garantía de Fábrica</p>
              <p className="text-xs">Respaldo internacional</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" className="!p-2 !rounded-full pointer-events-none">
              <Container size={20} />
            </Button>
            <div>
              <p className="text-white font-bold uppercase text-sm">Importación Directa</p>
              <p className="text-xs">Sin intermediarios</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" className="!p-2 !rounded-full pointer-events-none">
              <Clock size={20} />
            </Button>
            <div>
              <p className="text-white font-bold uppercase text-sm">Entrega Inmediata</p>
              <p className="text-xs">Amplio stock disponible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
