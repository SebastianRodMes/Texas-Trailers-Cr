import { Star, Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#c41e3a] p-1 rounded transform skew-x-[-10deg]">
                <Star className="text-white fill-current transform skew-x-[10deg]" size={20} />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">Texas<span className="text-[#c41e3a]">Trailers</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Importadores de remolques de alta calidad. Procesos avanzados de diseño y ensamblaje garantizados por las mejores marcas americanas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#c41e3a] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#c41e3a] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-white">Navegación</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Inicio</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Catálogo Completo</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Accesorios</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Pedidos Especiales</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-white">Categorías</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Ganaderos</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Plataformas</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Carga Cerrada</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">Volquetas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-white">Contacto</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c41e3a] mt-0.5 shrink-0" />
                <span>600 metros norte de la intersección a Orotina, en Ruta 27, Orotina, Costa Rica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#c41e3a] shrink-0" />
                <span>8730 9666</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#c41e3a] shrink-0" />
                <span>Atención 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>© 2025 Texas Trailers CR. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-zinc-600 hover:text-zinc-400">Privacidad</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
