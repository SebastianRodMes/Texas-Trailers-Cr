// ============================================
// PRODUCT SERVICE - Firebase Operations
// ============================================

import {
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    orderBy,
    Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Product } from '../types/types';

const COLLECTION_NAME = 'products';

/**
 * Convert Firestore Timestamp to Date
 */
const convertTimestamps = (data: any): Product => {
    return {
        ...data,
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : data.createdAt,
        updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : data.updatedAt,
    } as Product;
};

/**
 * Get all products
 * WORKAROUND: Fetch all and sort in JS to avoid index issues
 */
export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const snapshot = await getDocs(collection(db, COLLECTION_NAME));
        console.log(`🔍 Raw fetch: Found ${snapshot.size} total products`);

        const products = snapshot.docs.map(doc => convertTimestamps({ id: doc.id, ...doc.data() }));

        // Sort by createdAt in JavaScript
        products.sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA; // Descending (newest first)
        });

        console.log(`✅ Loaded ${products.length} products`);
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

/**
 * Get featured products only
 * WORKAROUND: Fetch all and filter in JS to avoid index issues
 */
export const getFeaturedProducts = async (): Promise<Product[]> => {
    try {
        const snapshot = await getDocs(collection(db, COLLECTION_NAME));
        console.log(`🔍 Raw fetch: Found ${snapshot.size} total products`);

        const allProducts = snapshot.docs.map(doc => convertTimestamps({ id: doc.id, ...doc.data() }));

        // Filter featured products in JavaScript
        const featured = allProducts.filter(p => p.isFeatured === true);

        // Sort by createdAt in JavaScript
        featured.sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA; // Descending (newest first)
        });

        console.log(`✅ Filtered to ${featured.length} featured products`);
        return featured;
    } catch (error) {
        console.error('Error fetching featured products:', error);
        throw error;
    }
};

/**
 * Get product by ID
 */
export const getProductById = async (id: string): Promise<Product | null> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return convertTimestamps({ id: docSnap.id, ...docSnap.data() });
        }
        return null;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

/**
 * Get product by slug (for SEO-friendly URLs)
 */
export const getProductBySlug = async (slug: string): Promise<Product | null> => {
    try {
        const q = query(collection(db, COLLECTION_NAME), where('slug', '==', slug));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            return convertTimestamps({ id: doc.id, ...doc.data() });
        }
        return null;
    } catch (error) {
        console.error('Error fetching product by slug:', error);
        throw error;
    }
};

/**
 * Get products by category
 */
export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
    try {
        const q = query(
            collection(db, COLLECTION_NAME),
            where('categoryId', '==', categoryId),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => convertTimestamps({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};

/**
 * Get products on sale
 */
export const getProductsOnSale = async (): Promise<Product[]> => {
    try {
        const q = query(
            collection(db, COLLECTION_NAME),
            where('onSale', '==', true),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => convertTimestamps({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching sale products:', error);
        throw error;
    }
};
