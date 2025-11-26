import { Truck, CheckCircle2, Box, ShoppingCart, Settings, ArrowRight } from 'lucide-react';
import useCategories from '../../hooks/useCategories';

const CategoriesSection = () => {
  const { categories, loading } = useCategories();

  // Icon Map para renderizar iconos dinámicos basados en string
  const iconMap: any = {
    cow: Truck,
    flatbed: CheckCircle2, // Usando Check como placeholder, idealmente un icono flatbed
    box: Box,
    dump: ShoppingCart, // Placeholder
    dolly: Settings
  };

  return (
    <section className="py-16 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h3 className="text-[#c41e3a] font-bold uppercase tracking-widest text-sm mb-2">Explora por tipo</h3>
            <h2 className="text-4xl font-black text-zinc-900 uppercase">Nuestras Categorías</h2>
          </div>
          <a href="/catalog" className="text-zinc-900 font-bold border-b-2 border-[#c41e3a] pb-1 hover:text-[#c41e3a] transition-colors mt-4 md:mt-0">
            Ver Todo el Catálogo
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c41e3a]"></div></div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat: any) => {
              const IconComponent = iconMap[cat.icon] || Truck;
              return (
                <div key={cat.id} className="group relative overflow-hidden rounded-lg bg-zinc-100 hover:bg-zinc-900 transition-colors duration-500 cursor-pointer h-48 flex flex-col items-center justify-center border border-zinc-200 hover:border-zinc-800 shadow-sm hover:shadow-xl">
                  {/* Background Image on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                    <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover grayscale" />
                  </div>

                  <div className="z-10 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="p-4 bg-white group-hover:bg-[#c41e3a] rounded-full mb-3 shadow-md transition-colors duration-300">
                      <IconComponent size={32} className="text-zinc-900 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-zinc-800 group-hover:text-white uppercase tracking-wider text-sm text-center px-2">{cat.name}</h3>
                  </div>

                  <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs text-white font-bold uppercase flex items-center gap-1">
                      Ver Modelos <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
