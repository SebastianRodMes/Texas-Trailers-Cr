import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';

const MOCK_CATEGORIES = [
    { id: '1', name: 'Ganaderos', slug: 'ganaderos', icon: 'cow', imageUrl: 'https://images.unsplash.com/photo-1544228088-44f144474d22?auto=format&fit=crop&q=80&w=800', order: 1 },
    { id: '2', name: 'Plataforma', slug: 'plataforma', icon: 'flatbed', imageUrl: 'https://images.unsplash.com/photo-1626806775351-538af710221e?auto=format&fit=crop&q=80&w=800', order: 2 },
    { id: '3', name: 'Carga Cerrada', slug: 'carga-cerrada', icon: 'box', imageUrl: 'https://images.unsplash.com/photo-1580901067606-890810e1ac7c?auto=format&fit=crop&q=80&w=800', order: 3 },
    { id: '4', name: 'Volquetas', slug: 'volquetas', icon: 'dump', imageUrl: 'https://images.unsplash.com/photo-1586953628893-c6e2874d7200?auto=format&fit=crop&q=80&w=800', order: 4 },
    { id: '5', name: 'Dollys', slug: 'dollys', icon: 'dolly', imageUrl: 'https://images.unsplash.com/photo-1605218427368-c4eb6535b132?auto=format&fit=crop&q=80&w=800', order: 5 },
];

const useCategories = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Intenta cargar desde Firebase
                const q = query(collection(db, "categories"), orderBy("order"));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                if (data.length > 0) {
                    setCategories(data);
                } else {
                    // Si no hay datos en Firebase, usa mock
                    setCategories(MOCK_CATEGORIES);
                }
            } catch (error) {
                console.log("Usando datos mock para Categorías (Modo Demo)");
                setCategories(MOCK_CATEGORIES);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    return { categories, loading };
};

export default useCategories;