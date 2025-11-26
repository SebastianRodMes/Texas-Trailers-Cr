import { Phone, Container } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500 via-zinc-900 to-black"></div>
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#c41e3a] opacity-5 skew-x-[-20deg] transform translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6">
            ¿No encuentras lo que <span className="text-[#c41e3a]">buscas?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-8 font-light">
            Si no tenemos el remolque que necesitas en stock, lo traemos por ti. Gestionamos pedidos especiales directamente con la fábrica según tus requerimientos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="primary">Solicitar Pedido Especial</Button>
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-800">
              <Phone className="mr-2" size={18} /> 8730 9666
            </Button>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hidden md:block relative">
          <div className="w-64 h-64 border-4 border-[#c41e3a] rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
            <div className="w-56 h-56 border-2 border-zinc-700 rounded-full border-dashed"></div>
          </div>
          <Container size={64} className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
