import { useState, useEffect } from 'react';
import { 
  getAllAccessories, 
  getAccessoriesByType, 
  getInStockAccessories 
} from '../services/accessoryService';
import type { Accessory } from '../types/types';

// Mock data fallback for demo mode
const MOCK_ACCESSORIES: Accessory[] = [
  {
    id: '1',
    name: 'Enganche de Bola 2" Chrome',
    description: 'Enganche de bola cromado de 2 pulgadas, capacidad 5000 lbs',
    categoryType: 'hitch',
    price: 45000,
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=500',
    inStock: true
  },
  {
    id: '2',
    name: 'Kit de Luces LED Completo',
    description: 'Kit completo de luces LED para remolque, incluye cables y conectores',
    categoryType: 'lighting',
    price: 85000,
    imageUrl: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=500',
    inStock: true
  },
  {
    id: '3',
    name: 'Candado de Seguridad Premium',
    description: 'Candado de alta seguridad para enganche, resistente al clima',
    categoryType: 'security',
    price: 32000,
    imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=500',
    inStock: true
  },
  {
    id: '4',
    name: 'Gato Hidráulico 5000 lbs',
    description: 'Gato hidráulico de alta capacidad para remolques pesados',
    categoryType: 'tools',
    price: 120000,
    imageUrl: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=500',
    inStock: true
  },
  {
    id: '5',
    name: 'Cubiertas Protectoras Impermeables',
    description: 'Set de cubiertas impermeables para proteger su carga',
    categoryType: 'covers',
    price: 55000,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500',
    inStock: false
  },
  {
    id: '6',
    name: 'Sistema de Frenos Eléctricos',
    description: 'Sistema completo de frenos eléctricos para remolques',
    categoryType: 'brakes',
    price: 450000,
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=500',
    inStock: true
  },
  {
    id: '7',
    name: 'Rampa de Aluminio Plegable',
    description: 'Rampa plegable de aluminio, capacidad 1500 lbs',
    categoryType: 'ramps',
    price: 180000,
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500',
    inStock: true
  },
  {
    id: '8',
    name: 'Cadenas de Seguridad Grado 70',
    description: 'Par de cadenas de seguridad certificadas, 5000 lbs',
    categoryType: 'safety',
    price: 38000,
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500',
    inStock: true
  }
];

interface UseAccessoriesOptions {
  categoryType?: string;
  inStockOnly?: boolean;
}

const useAccessories = (options: UseAccessoriesOptions = {}) => {
  const { categoryType, inStockOnly } = options;
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        setLoading(true);
        setError(null);

        let data: Accessory[];

        // Fetch based on filters
        if (categoryType) {
          data = await getAccessoriesByType(categoryType);
        } else if (inStockOnly) {
          data = await getInStockAccessories();
        } else {
          data = await getAllAccessories();
        }

        if (data.length > 0) {
          console.log(`🔧 Loaded ${data.length} accessories from Firebase`);
          setAccessories(data);
        } else {
          // Fallback to mock data if Firebase is empty
          console.log('⚠️ Using mock accessories data (Firebase collection empty)');
          let mockData = MOCK_ACCESSORIES;
          
          if (categoryType) {
            mockData = mockData.filter(a => a.categoryType === categoryType);
          }
          if (inStockOnly) {
            mockData = mockData.filter(a => a.inStock);
          }
          
          setAccessories(mockData);
        }
      } catch {
        // Fallback to mock data on error
        console.log('⚠️ Using mock accessories data (Firebase error)');
        let mockData = MOCK_ACCESSORIES;
        
        if (categoryType) {
          mockData = mockData.filter(a => a.categoryType === categoryType);
        }
        if (inStockOnly) {
          mockData = mockData.filter(a => a.inStock);
        }
        
        setAccessories(mockData);
        setError('Running in demo mode');
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, [categoryType, inStockOnly]);

  return { accessories, loading, error };
};

export default useAccessories;
