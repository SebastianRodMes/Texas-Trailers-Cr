import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";

// NOTA: Reemplaza esto con tus credenciales reales de Firebase
const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "texas-trailers-cr.firebaseapp.com",
    projectId: "texas-trailers-cr",
    storageBucket: "texas-trailers-cr.appspot.com",
    messagingSenderId: "...",
    appId: "..."
};

// Inicialización segura para la demo (evita errores si no hay credenciales reales)
let db: any;
try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch (e) {
    console.warn("Firebase no pudo iniciarse (esperado en demo sin credenciales reales). Se usarán datos mock.");
}

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
                // INTENTO DE CARGA REAL DE FIREBASE
                // const q = query(collection(db, "categories"), orderBy("order"), where("active", "==", true));
                // const querySnapshot = await getDocs(q);
                // const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // if (data.length > 0) {
                //   setCategories(data);
                // } else {
                throw new Error("No data"); // Forzar mock si no hay datos
                // }
            } catch (error) {
                console.log("Usando datos mock para Categorías (Modo Demo)");
                // Simular delay de red
                setTimeout(() => setCategories(MOCK_CATEGORIES), 800);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    return { categories, loading };
};

export default useCategories;