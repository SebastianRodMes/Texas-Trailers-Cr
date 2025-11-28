import {Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import imgLogo from '../../assets/logoApp.png';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-6">
              <div className="bg-white px-12 py-6 rounded-xl shadow-lg flex items-center justify-center w-[320px] h-[160px] overflow-hidden">
                <img 
                  src={imgLogo} 
                  alt="Texas Trailers Logo" 
                  className="
                    h-full 
                    w-auto 
                    object-contain 
                    scale-[2.5]
                  "
                />
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-center md:text-left">
              Importadores de remolques de alta calidad. Procesos avanzados de diseño y ensamblaje garantizados por las mejores marcas americanas.
            </p>
            
            <div className="flex gap-3 justify-center md:justify-start">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#c41e3a] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-[#c41e3a] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-base font-bold uppercase mb-5 text-white tracking-wider">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Catálogo Completo
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Accesorios
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Pedidos Especiales
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-base font-bold uppercase mb-5 text-white tracking-wider">Categorías</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Ganaderos
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Plataformas
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Carga Cerrada
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#c41e3a] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Volquetas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold uppercase mb-5 text-white tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-[#c41e3a] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-400 leading-relaxed">
                  600 metros norte de la intersección a Orotina, en Ruta 27, Orotina, Costa Rica
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-[#c41e3a] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:87309666" className="text-zinc-400 hover:text-[#c41e3a] transition-colors">
                  8730 9666
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Clock size={18} className="text-[#c41e3a] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-400">Atención 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p className="text-center md:text-left">
            © 2025 Texas Trailers CR. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
              Privacidad
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;