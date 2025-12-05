import { useState } from 'react';
import useAccessories from '../hooks/useAccessories';
import SectionTitle from '../components/ui/SectionTitle';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import type { Accessory } from '../types/types';

const AccessoriesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [showInStockOnly, setShowInStockOnly] = useState(false);

    const { accessories, loading, error } = useAccessories({
        categoryType: selectedCategory || undefined,
        inStockOnly: showInStockOnly,
    });

    // Extract unique categories from accessories
    const categories = Array.from(
        new Set(accessories.map((acc) => acc.categoryType))
    ).sort();

    const getCategoryLabel = (categoryType: string) => {
        const labels: Record<string, string> = {
        hitch: 'Enganches',
        lighting: 'Iluminación',
        security: 'Seguridad',
        tools: 'Herramientas',
        covers: 'Cubiertas',
        brakes: 'Frenos',
        ramps: 'Rampas',
        safety: 'Seguridad',
        };
        return labels[categoryType] || categoryType;
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white pt-45 pb-8">
                <div className="container mx-auto px-4 flex items-center justify-center min-h-full">
                    <SectionTitle
                        title="Accesorios para Remolques"
                        subtitle="Todo lo que necesitas para equipar y mantener tu remolque en perfectas condiciones"
                        dark
                    />
                </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white border-b border-zinc-200 sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        {/* Category Dropdown */}
                        <div className="w-full sm:w-auto">
                            <label htmlFor="category-select" className="block text-sm font-medium text-zinc-700 mb-2">
                                Categoría
                            </label>
                            <select
                                id="category-select"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full sm:w-64 px-4 py-2 border border-zinc-300 rounded-lg font-medium text-zinc-700 bg-white hover:border-[#c41e3a] focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent transition-all"
                            >
                                <option value="">Todas las categorías</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {getCategoryLabel(category)}
                                    </option>
                                ))}
                            </select>
                        </div>
            
                        {/* Stock Filter */}
                        <div className="w-full sm:w-auto flex items-center">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={showInStockOnly}
                                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                                    className="w-5 h-5 text-[#c41e3a] border-zinc-300 rounded focus:ring-[#c41e3a] cursor-pointer"
                                />
                                <span className="text-sm font-medium text-zinc-700">Solo en stock</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {loading ? (
                <div className="py-20">
                    <LoadingSpinner size="lg" />
                </div>
                ) : error ? (
                <div className="text-center py-12">
                    <p className="text-zinc-600 mb-2">{error}</p>
                    <p className="text-sm text-zinc-500">
                    Mostrando datos de demostración
                    </p>
                </div>
                ) : accessories.length === 0 ? (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                    No se encontraron accesorios
                    </h3>
                    <p className="text-zinc-600">
                    Intenta ajustar los filtros de búsqueda
                    </p>
                </div>
                ) : (
                <>
                    {/* Results Count */}
                    <div className="mb-8">
                    <p className="text-zinc-600">
                        Mostrando{' '}
                        <span className="font-bold text-zinc-900">
                        {accessories.length}
                        </span>{' '}
                        {accessories.length === 1 ? 'accesorio' : 'accesorios'}
                    </p>
                    </div>

                    {/* Accessories Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {accessories.map((accessory) => (
                        <AccessoryCard key={accessory.id} accessory={accessory} />
                    ))}
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

// Accessory Card Component
interface AccessoryCardProps {
accessory: Accessory;
}

const AccessoryCard = ({ accessory }: AccessoryCardProps) => {
const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    minimumFractionDigits: 0,
    }).format(price);
};

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
        {/* Image */}
        <div className="relative h-48 bg-zinc-100 overflow-hidden">
            {accessory.imageUrl ? (
            <img
                src={accessory.imageUrl}
                alt={accessory.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            ) : (
            <div className="w-full h-full flex items-center justify-center">
                <span className="text-zinc-400 text-4xl">🔧</span>
            </div>
            )}

            {/* Stock Badge */}
            <div className="absolute top-3 right-3">
            {accessory.inStock ? (
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                En Stock
                </span>
            ) : (
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Agotado
                </span>
            )}
            </div>
        </div>

        {/* Content */}
        <div className="p-5">
            <h3 className="font-bold text-lg text-zinc-900 mb-2 line-clamp-2 min-h-[3.5rem]">
            {accessory.name}
            </h3>

            {accessory.description && (
            <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
                {accessory.description}
            </p>
            )}

            {/* Price */}
            <div className="mt-4 pt-4 border-t border-zinc-100">
            <p className="text-2xl font-black text-[#c41e3a]">
                {formatPrice(accessory.price)}
            </p>
            </div>

            {/* Action Button */}
            <button
            disabled={!accessory.inStock}
            className={`mt-4 w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all ${
                accessory.inStock
                ? 'bg-[#c41e3a] text-white hover:bg-[#a01830] active:scale-95'
                : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
            }`}
            >
            {accessory.inStock ? 'Agregar al Carrito' : 'No Disponible'}
            </button>
        </div>
    </div>
  );
};

export default AccessoriesPage;