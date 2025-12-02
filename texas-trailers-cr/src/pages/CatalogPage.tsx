import { useState, useMemo } from 'react';
import {
    Search, Filter, ChevronDown, X,
    CheckCircle2, ArrowRight, Truck, SlidersHorizontal,
    LayoutGrid, Star
} from 'lucide-react';
import useProducts from '../hooks/useProducts';
import useCategories from '../hooks/useCategories';
import ProductCardSkeleton from '../components/ui/ProductCardSkeleton';
import type { Product } from '../types/types';

const CatalogPage = () => {
    const { products: allProducts, loading: productsLoading } = useProducts(false);
    const { categories, loading: categoriesLoading } = useCategories();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number>(10000000);
    const [sortBy, setSortBy] = useState('featured');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // --- FILTERING LOGIC ---
    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.categoryId);
            const currentPrice = product.salePrice || product.price;
            const matchesPrice = currentPrice <= priceRange;
            return matchesSearch && matchesCategory && matchesPrice;
        }).sort((a, b) => {
            const priceA = a.salePrice || a.price;
            const priceB = b.salePrice || b.price;
            if (sortBy === 'price-asc') return priceA - priceB;
            if (sortBy === 'price-desc') return priceB - priceA;
            // Featured first by default
            if (a.isFeatured && !b.isFeatured) return -1;
            if (!a.isFeatured && b.isFeatured) return 1;
            return 0;
        });
    }, [allProducts, searchTerm, selectedCategories, priceRange, sortBy]);

    // --- HANDLERS ---
    const toggleCategory = (catId: string) => {
        setSelectedCategories(prev =>
            prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
        );
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 }).format(price);
    };

    const loading = productsLoading || categoriesLoading;

    return (
        <div className="bg-zinc-50 min-h-screen pt-24 pb-20 text-zinc-900 selection:bg-[#c41e3a] selection:text-white font-sans">

            {/* Decorative Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e4e4e7 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            {/* --- HEADER --- */}
            <div className="relative z-10 mb-10 border-b border-zinc-200 pb-10 bg-white">
                <div className="container mx-auto px-6 pt-10">
                    <div className="flex items-center gap-3 mb-4 text-[#c41e3a]">
                        <LayoutGrid className="animate-pulse" size={24} />
                        <span className="text-sm font-bold uppercase tracking-[0.2em]">Inventario Oficial</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none text-zinc-900">
                        Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c41e3a] to-red-600">Premium</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl text-lg font-light">
                        Explora nuestra flota de remolques importados. Utiliza los filtros inteligentes para encontrar la herramienta exacta para tu trabajo.
                    </p>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* === SIDEBAR (FILTERS) === */}
                    <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8 sticky top-28 h-fit">

                        {/* Search */}
                        <div className="relative group">
                            <div className="relative flex items-center bg-white rounded-lg border border-zinc-200 shadow-sm hover:border-[#c41e3a] transition-colors focus-within:border-[#c41e3a] focus-within:ring-1 focus-within:ring-[#c41e3a]">
                                <input
                                    type="text"
                                    placeholder="Buscar modelo..."
                                    className="w-full pl-10 pr-4 py-3 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none rounded-lg"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute left-3 top-3.5 text-zinc-400" size={18} />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                            <h3 className="font-bold uppercase text-zinc-900 mb-4 flex items-center gap-2 tracking-wider text-xs">
                                <Filter size={14} className="text-[#c41e3a]" /> Categorías
                            </h3>
                            <div className="space-y-1">
                                {categories.map(cat => (
                                    <div
                                        key={cat.id}
                                        className={`flex items-center gap-3 cursor-pointer group p-2 rounded-lg transition-all duration-200 ${selectedCategories.includes(cat.id) ? 'bg-[#c41e3a]/10 translate-x-2' : 'hover:bg-zinc-50'}`}
                                        onClick={() => toggleCategory(cat.id)}
                                    >
                                        <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-all duration-300 ${selectedCategories.includes(cat.id) ? 'bg-[#c41e3a] border-[#c41e3a]' : 'border-zinc-300 bg-white group-hover:border-zinc-400'}`}>
                                            {selectedCategories.includes(cat.id) && <CheckCircle2 size={12} className="text-white" />}
                                        </div>
                                        <span className={`text-sm ${selectedCategories.includes(cat.id) ? 'text-zinc-900 font-bold' : 'text-zinc-500 group-hover:text-zinc-900'}`}>
                                            {cat.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
                            <h3 className="font-bold uppercase text-zinc-900 mb-4 tracking-wider text-xs flex justify-between">
                                Precio Máximo
                                <span className="text-[#c41e3a] font-mono font-bold">{formatPrice(priceRange)}</span>
                            </h3>
                            <input
                                type="range"
                                min="0" max="10000000" step="500000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#c41e3a]"
                            />
                            <div className="flex justify-between text-[10px] text-zinc-400 mt-2 font-mono">
                                <span>0</span>
                                <span>10M+</span>
                            </div>
                        </div>

                        {/* Promo Banner */}
                        <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800 relative overflow-hidden group shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c41e3a] opacity-10 blur-2xl rounded-full"></div>
                            <Truck className="mx-auto text-zinc-500 mb-3 group-hover:text-white transition-colors" size={32} />
                            <h4 className="text-white font-bold uppercase mb-2 text-sm relative z-10">Pedidos Especiales</h4>
                            <p className="text-zinc-400 text-xs mb-6 relative z-10">¿Buscas algo específico? Lo traemos directo de fábrica.</p>
                            <button className="bg-[#c41e3a] text-white hover:bg-red-700 text-xs font-bold px-4 py-3 rounded w-full transition-all duration-300 uppercase tracking-wider relative z-10 shadow-lg shadow-red-900/20">
                                Contactar Asesor
                            </button>
                        </div>
                    </aside>

                    {/* === PRODUCT GRID === */}
                    <div className="flex-1">

                        {/* Toolbar */}
                        <div className="flex flex-wrap justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm sticky top-24 z-20 lg:static lg:p-0 lg:border-none lg:bg-transparent lg:shadow-none">
                            <p className="text-zinc-500 text-sm">
                                Mostrando <span className="font-bold text-zinc-900">{filteredProducts.length}</span> remolques
                            </p>

                            <div className="flex gap-3">
                                <button
                                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 rounded text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <SlidersHorizontal size={16} /> Filtros
                                </button>

                                <div className="relative group">
                                    <select
                                        className="pl-4 pr-10 py-2 bg-white border border-zinc-300 rounded-lg text-sm text-zinc-700 focus:outline-none focus:border-[#c41e3a] appearance-none cursor-pointer hover:border-zinc-400 transition-colors shadow-sm"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="featured">Destacados</option>
                                        <option value="price-asc">Precio: Menor a Mayor</option>
                                        <option value="price-desc">Precio: Mayor a Menor</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-3 pointer-events-none text-zinc-400" />
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <ProductCardSkeleton key={i} />
                                ))}
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product: Product) => (
                                    <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-zinc-200 transition-all duration-300 group flex flex-col shadow-sm hover:shadow-2xl hover:border-zinc-300 hover:-translate-y-1">

                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden bg-zinc-100">
                                            <img
                                                src={product.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Badges */}
                                            <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                                                {product.onSale && (
                                                    <div className="bg-[#c41e3a] text-white text-[10px] font-bold px-3 py-1 uppercase rounded shadow-md">
                                                        Oferta
                                                    </div>
                                                )}
                                                {product.isFeatured && (
                                                    <div className="bg-zinc-900 text-white text-[10px] font-bold px-3 py-1 uppercase rounded shadow-md flex items-center gap-1">
                                                        <Star size={10} className="fill-white" /> Destacado
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="p-5 flex-grow flex flex-col relative">
                                            <div className="mb-4">
                                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest border border-zinc-200 px-2 py-0.5 rounded bg-zinc-50 inline-block mb-2 group-hover:border-[#c41e3a]/30 group-hover:text-[#c41e3a] transition-colors">
                                                    {categories.find(c => c.id === product.categoryId)?.name || product.categoryId}
                                                </span>
                                                <h3 className="text-lg font-black text-zinc-900 uppercase leading-tight group-hover:text-[#c41e3a] transition-colors line-clamp-2">
                                                    {product.name}
                                                </h3>
                                            </div>

                                            {/* Specs */}
                                            <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-[11px] text-zinc-500 mb-6 font-mono bg-zinc-50 p-3 rounded border border-zinc-100 group-hover:border-zinc-200">
                                                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#c41e3a] rounded-full"></div> {product.specs.gvwr}</div>
                                                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#c41e3a] rounded-full"></div> {product.specs.axles}</div>
                                                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#c41e3a] rounded-full"></div> {product.specs.length}</div>
                                            </div>

                                            <div className="mt-auto border-t border-zinc-100 pt-4 flex justify-between items-end">
                                                <div>
                                                    {product.onSale && product.salePrice && (
                                                        <p className="text-xs text-zinc-400 line-through mb-0.5">{formatPrice(product.price)}</p>
                                                    )}
                                                    <p className="text-xl font-black text-zinc-900 group-hover:text-[#c41e3a] transition-colors">
                                                        {formatPrice(product.salePrice || product.price)}
                                                    </p>
                                                </div>
                                                <button className="bg-zinc-900 text-white hover:bg-[#c41e3a] p-2.5 rounded-lg transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                                    <ArrowRight size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-zinc-300">
                                <Search className="mx-auto text-zinc-300 mb-4" size={48} />
                                <h3 className="text-xl font-bold text-zinc-900 mb-2 uppercase">Sin Resultados</h3>
                                <p className="text-zinc-500 mb-6 max-w-md mx-auto">Intenta buscar con otros términos o ajusta el rango de precio.</p>
                                <button
                                    onClick={() => { setSearchTerm(''); setSelectedCategories([]); }}
                                    className="text-[#c41e3a] font-bold hover:underline uppercase text-sm tracking-wide"
                                >
                                    Limpiar todos los filtros
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- MOBILE FILTER DRAWER --- */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-end lg:hidden animate-in fade-in duration-200">
                    <div className="w-80 bg-white h-full p-6 overflow-y-auto animate-in slide-in-from-right duration-300 shadow-2xl">
                        <div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-4">
                            <h2 className="text-xl font-black uppercase text-zinc-900">Filtros</h2>
                            <button onClick={() => setMobileFiltersOpen(false)} className="text-zinc-400 hover:text-zinc-900"><X /></button>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="font-bold mb-4 text-zinc-900 uppercase text-sm tracking-wider">Categorías</h3>
                                {categories.map(cat => (
                                    <label key={cat.id} className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => toggleCategory(cat.id)}>
                                        <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedCategories.includes(cat.id) ? 'bg-[#c41e3a] border-[#c41e3a]' : 'border-zinc-300 bg-transparent'}`}>
                                            {selectedCategories.includes(cat.id) && <CheckCircle2 size={14} className="text-white" />}
                                        </div>
                                        <span className="text-zinc-700 text-sm">{cat.name}</span>
                                    </label>
                                ))}
                            </div>

                            <div>
                                <h3 className="font-bold mb-4 text-zinc-900 uppercase text-sm tracking-wider">Precio Máximo</h3>
                                <input
                                    type="range"
                                    min="0" max="10000000" step="500000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#c41e3a]"
                                />
                                <p className="text-right text-[#c41e3a] font-bold font-mono mt-2">{formatPrice(priceRange)}</p>
                            </div>

                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="w-full bg-[#c41e3a] hover:bg-red-700 text-white font-bold py-4 rounded uppercase tracking-wider transition-colors shadow-lg shadow-red-900/30 mt-8"
                            >
                                Ver {filteredProducts.length} Resultados
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CatalogPage;
