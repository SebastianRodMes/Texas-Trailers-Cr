// ============================================
// ACCESSORY SERVICE - Firebase Operations
// ============================================

import {
    collection,
    getDocs,
    query,
    where,
    orderBy
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Accessory } from '../types/types';

const COLLECTION_NAME = 'accessories';

/**
 * Get all accessories
 */
export const getAllAccessories = async (): Promise<Accessory[]> => {
    try {
        const q = query(collection(db, COLLECTION_NAME), orderBy('name', 'asc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Accessory));
    } catch (error) {
        console.error('Error fetching accessories:', error);
        throw error;
    }
};

/**
 * Get accessories by category type
 */
export const getAccessoriesByType = async (categoryType: string): Promise<Accessory[]> => {
    try {
        const q = query(
            collection(db, COLLECTION_NAME),
            where('categoryType', '==', categoryType),
            orderBy('name', 'asc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Accessory));
    } catch (error) {
        console.error('Error fetching accessories by type:', error);
        throw error;
    }
};

/**
 * Get in-stock accessories only
 */
export const getInStockAccessories = async (): Promise<Accessory[]> => {
    try {
        const q = query(
            collection(db, COLLECTION_NAME),
            where('inStock', '==', true),
            orderBy('name', 'asc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Accessory));
    } catch (error) {
        console.error('Error fetching in-stock accessories:', error);
        throw error;
    }
};
