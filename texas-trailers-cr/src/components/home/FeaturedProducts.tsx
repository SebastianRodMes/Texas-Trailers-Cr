import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import ProductCardSkeleton from '../ui/ProductCardSkeleton';
import type { Product } from '../../types/types';

const FeaturedProducts = () => {
  const { products, loading } = useProducts(true);

  // Formateador de precio
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Modelos Destacados"
          subtitle="Remolques importados listos para entrega inmediata. Calidad certificada."
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => <ProductCardSkeleton key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product: Product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-100 flex flex-col">
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden bg-zinc-200">
                  <img
                    src={product.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.onSale && (
                    <div className="absolute top-4 right-4 bg-[#c41e3a] text-white text-xs font-bold px-3 py-1 uppercase rounded shadow-md">
                      Oferta
                    </div>
                  )}
                  {/* Quick Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-sm py-2">Ver Detalles</Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Ref: {product.id}</span>
                    <h3 className="text-lg font-black text-zinc-900 uppercase leading-tight mt-1 group-hover:text-[#c41e3a] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Specs Grid (Mini CURT style) */}
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-zinc-600 mb-6 bg-zinc-50 p-3 rounded">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-[#c41e3a]" />
                      <span>{product.specs.length}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-[#c41e3a]" />
                      <span>{product.specs.gvwr}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-[#c41e3a]" />
                      <span>{product.specs.axles}</span>
                    </div>
                    {product.specs.color && (
                      <div className="flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-[#c41e3a]" />
                        <span>{product.specs.color}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex items-end justify-between border-t border-zinc-100 pt-4">
                    <div>
                      {product.onSale && product.salePrice && (
                        <p className="text-xs text-zinc-400 line-through mb-0.5">{formatPrice(product.price)}</p>
                      )}
                      <p className="text-xl font-black text-[#c41e3a]">
                        {formatPrice(product.salePrice || product.price)}
                      </p>
                    </div>
                    <button className="bg-zinc-900 text-white p-2 rounded hover:bg-[#c41e3a] transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/catalogo">
            <Button variant="primary">Ver Catálogo Completo</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
