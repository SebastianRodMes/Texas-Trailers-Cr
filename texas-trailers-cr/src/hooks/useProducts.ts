import { useState, useEffect } from 'react';
import { getFeaturedProducts, getAllProducts } from '../services/productService';
import type { Product } from '../types/types';

// Mock data fallback for demo mode
const MOCK_PRODUCTS: Product[] = [
  {
    id: '101',
    name: 'Remolque Ganadero Heavy Duty 16ft',
    slug: 'ganadero-16ft-hd',
    price: 4500000,
    salePrice: 4200000,
    onSale: true,
    categoryId: 'ganaderos',
    specs: { gvwr: '7000 lbs', axles: '2x 3500lb', length: '16 ft', color: 'Negro Mate' },
    images: ['https://images.unsplash.com/photo-1543465305-156326e192f6?auto=format&fit=crop&q=80&w=1000'],
    isFeatured: true
  },
  {
    id: '102',
    name: 'Plataforma Multiuso Tandem',
    slug: 'plataforma-tandem-12ft',
    price: 1800000,
    onSale: false,
    categoryId: 'plataforma',
    specs: { gvwr: '5000 lbs', axles: '2x 3500lb', length: '12 ft', color: 'Rojo Texas' },
    images: ['https://images.unsplash.com/photo-1626806775351-538af710221e?auto=format&fit=crop&q=80&w=1000'],
    isFeatured: true
  },
  {
    id: '103',
    name: 'Cargo Trailer Cerrado 6x12',
    slug: 'cargo-6x12',
    price: 3200000,
    onSale: false,
    categoryId: 'carga-cerrada',
    specs: { gvwr: '2990 lbs', axles: '1x 3500lb', length: '12 ft', color: 'Blanco' },
    images: ['https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000'],
    isFeatured: false
  },
  {
    id: '104',
    name: 'Volqueta Hidráulica 10ft',
    slug: 'volqueta-10ft',
    price: 5100000,
    onSale: false,
    categoryId: 'volquetas',
    specs: { gvwr: '10000 lbs', axles: '2x 5200lb', length: '10 ft', color: 'Negro' },
    images: ['https://images.unsplash.com/photo-1616406429137-9582b8923142?auto=format&fit=crop&q=80&w=1000'],
    isFeatured: true
  },
];

const useProducts = (featuredOnly = false) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch from Firebase
        const data = featuredOnly ? await getFeaturedProducts() : await getAllProducts();

        if (data.length > 0) {
          console.log(`📦 Loaded ${data.length} products from Firebase`);
          setProducts(data);
        } else {
          // Fallback to mock data if Firebase is empty
          console.log('⚠️ Using mock data (Firebase collection empty)');
          const mockData = featuredOnly ? MOCK_PRODUCTS.filter(p => p.isFeatured) : MOCK_PRODUCTS;
          setProducts(mockData);
        }
      } catch (err) {
        // Fallback to mock data on error
        console.log('⚠️ Using mock data (Firebase error - check indexes)');
        const mockData = featuredOnly ? MOCK_PRODUCTS.filter(p => p.isFeatured) : MOCK_PRODUCTS;
        setProducts(mockData);
        setError('Running in demo mode');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [featuredOnly]);

  return { products, loading, error };
};

export default useProducts;