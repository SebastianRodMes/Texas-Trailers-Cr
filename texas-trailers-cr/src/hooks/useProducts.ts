import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";

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

const MOCK_PRODUCTS = [
  {
    id: '101',
    name: 'Remolque Ganadero Heavy Duty 16ft',
    slug: 'ganadero-16ft-hd',
    price: 4500000,
    salePrice: 4200000,
    onSale: true,
    categoryId: '1',
    specs: { gvwr: '7000 lbs', axles: '2x 3500lb', length: '16 ft', color: 'Negro Mate' },
    imageUrl: 'https://images.unsplash.com/photo-1543465305-156326e192f6?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: '102',
    name: 'Plataforma Multiuso Tandem',
    slug: 'plataforma-tandem-12ft',
    price: 1800000,
    onSale: false,
    categoryId: '2',
    specs: { gvwr: '5000 lbs', axles: '2x 3500lb', length: '12 ft', color: 'Rojo Texas' },
    imageUrl: 'https://images.unsplash.com/photo-1626806775351-538af710221e?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
  {
    id: '103',
    name: 'Cargo Trailer Cerrado 6x12',
    slug: 'cargo-6x12',
    price: 3200000,
    onSale: false,
    categoryId: '3',
    specs: { gvwr: '2990 lbs', axles: '1x 3500lb', length: '12 ft', color: 'Blanco' },
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000',
    featured: false
  },
  {
    id: '104',
    name: 'Volqueta Hidráulica 10ft',
    slug: 'volqueta-10ft',
    price: 5100000,
    onSale: false,
    categoryId: '4',
    specs: { gvwr: '10000 lbs', axles: '2x 5200lb', length: '10 ft', color: 'Negro' },
    imageUrl: 'https://images.unsplash.com/photo-1616406429137-9582b8923142?auto=format&fit=crop&q=80&w=1000',
    featured: true
  },
];

const useProducts = (featuredOnly = false) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // INTENTO DE CARGA REAL
        // let q = collection(db, "products");
        // if (featuredOnly) {
        //   q = query(q, where("featured", "==", true), limit(4));
        // }
        // const snapshot = await getDocs(q);
        // const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        throw new Error("No data");
      } catch (error) {
        console.log("Usando datos mock para Productos (Modo Demo)");
        setTimeout(() => {
          const data = featuredOnly ? MOCK_PRODUCTS.filter(p => p.featured) : MOCK_PRODUCTS;
          setProducts(data);
          setLoading(false);
        }, 1000);
      }
    };
    fetchProducts();
  }, [featuredOnly]);

  return { products, loading };
};

export default useProducts;