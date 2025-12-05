// ============================================
// CATEGORY SERVICE - Firebase Operations
// ============================================

import {
    collection,
    getDocs,
    getDoc,
    doc
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Category } from '../types/types';

const COLLECTION_NAME = 'categories';

/**
 * Get all active categories ordered by display order
 * WORKAROUND: Fetching all and filtering in JS to avoid index issues
 */
export const getAllCategories = async (): Promise<Category[]> => {
    try {
        // Fetch ALL categories without filtering
        const snapshot = await getDocs(collection(db, COLLECTION_NAME));
        console.log(`🔍 Raw fetch: Found ${snapshot.size} total categories`);

        // Filter active categories in JavaScript instead of Firestore
        const allCategories = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            isActive: doc.data().active  // Map Firebase 'active' to TypeScript 'isActive'
        } as Category));

        const activeCategories = allCategories
            .filter(cat => cat.isActive)
            .sort((a, b) => a.order - b.order);

        console.log(`✅ Filtered to ${activeCategories.length} active categories`);
        return activeCategories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

/**
 * Get category by ID
 */
export const getCategoryById = async (id: string): Promise<Category | null> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data(),
                isActive: docSnap.data().active
            } as Category;
        }
        return null;
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        throw error;
    }
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = async (slug: string): Promise<Category | null> => {
    try {
        const snapshot = await getDocs(collection(db, COLLECTION_NAME));
        const found = snapshot.docs.find(doc => doc.data().slug === slug);

        if (found) {
            return {
                id: found.id,
                ...found.data(),
                isActive: found.data().active
            } as Category;
        }
        return null;
    } catch (error) {
        console.error('Error fetching category by slug:', error);
        throw error;
    }
};