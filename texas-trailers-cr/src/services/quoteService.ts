// ============================================
// QUOTE SERVICE - Firebase Operations
// ============================================

import {
    collection,
    addDoc,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { QuoteRequest } from '../types/types';

const COLLECTION_NAME = 'quotes';

/**
 * Submit a new quote request
 * Flow: Web (customer) → Firebase → Mobile (admin reads)
 */
export const submitQuoteRequest = async (
    quoteData: Omit<QuoteRequest, 'id' | 'requestDate' | 'status'>
): Promise<string> => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...quoteData,
            requestDate: serverTimestamp(),
            status: 'pending'
        });

        return docRef.id;
    } catch (error) {
        console.error('Error submitting quote request:', error);
        throw error;
    }
};
