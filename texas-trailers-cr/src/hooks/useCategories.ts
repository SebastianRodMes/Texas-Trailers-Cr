import { useState, useEffect } from 'react';
import { getAllCategories } from '../services/categoryService';
import type { Category } from '../types/types';

// Mock categories for demo mode
const MOCK_CATEGORIES: Category[] = [
    { id: 'ganaderos', name: 'Ganaderos', slug: 'ganaderos', order: 1, isActive: true, imageUrl: 'https://images.unsplash.com/photo-1544228088-44f144474d22?auto=format&fit=crop&q=80&w=800' },
    { id: 'plataforma', name: 'Plataformas', slug: 'plataformas', order: 2, isActive: true, imageUrl: 'https://images.unsplash.com/photo-1626806775351-538af710221e?auto=format&fit=crop&q=80&w=800' },
    { id: 'carga-cerrada', name: 'Carga Cerrada', slug: 'carga-cerrada', order: 3, isActive: true, imageUrl: 'https://images.unsplash.com/photo-1580901067606-890810e1ac7c?auto=format&fit=crop&q=80&w=800' },
    { id: 'volquetas', name: 'Volquetas', slug: 'volquetas', order: 4, isActive: true, imageUrl: 'https://images.unsplash.com/photo-1586953628893-c6e2874d7200?auto=format&fit=crop&q=80&w=800' },
    { id: 'dollys', name: 'Dollys', slug: 'dollys', order: 5, isActive: true, imageUrl: 'https://images.unsplash.com/photo-1605218427368-c4eb6535b132?auto=format&fit=crop&q=80&w=800' },
];

const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getAllCategories();

                if (data.length > 0) {
                    console.log(`📦 Loaded ${data.length} categories from Firebase`);
                    setCategories(data);
                } else {
                    console.log('⚠️ No active categories found, using mock data');
                    setCategories(MOCK_CATEGORIES);
                }
            } catch (err: any) {
                console.log('⚠️ Categories error:', err.message);
                console.log('Using mock categories as fallback');
                setCategories(MOCK_CATEGORIES);
                setError('Running in demo mode');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, loading, error };
};

export default useCategories;