// ============================================
// FIREBASE CONNECTION TEST PAGE
// ============================================
// This page tests Firebase connectivity step by step
// Navigate to /test to see results

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const FirebaseTestPage = () => {
    const [results, setResults] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const addResult = (message: string, isError = false) => {
        setResults(prev => [...prev, `${isError ? '❌' : '✅'} ${message}`]);
        console.log(message);
    };

    useEffect(() => {
        const runTests = async () => {
            setLoading(true);
            setResults([]);

            // Test 1: Firebase Config
            addResult('TEST 1: Checking Firebase configuration...');
            if (db) {
                addResult('Firebase DB instance exists');
            } else {
                addResult('Firebase DB instance NOT found', true);
                setLoading(false);
                return;
            }

            // Test 2: Products Collection
            addResult('\nTEST 2: Fetching products collection...');
            try {
                const productsRef = collection(db, 'products');
                const productsSnapshot = await getDocs(productsRef);
                addResult(`Found ${productsSnapshot.size} documents in products collection`);

                if (productsSnapshot.size > 0) {
                    productsSnapshot.docs.slice(0, 2).forEach(doc => {
                        addResult(`  - Product: ${doc.id} → ${JSON.stringify(doc.data()).substring(0, 100)}...`);
                    });
                } else {
                    addResult('Products collection is EMPTY', true);
                }
            } catch (error: any) {
                addResult(`Products fetch FAILED: ${error.message}`, true);
            }

            // Test 3: Categories Collection
            addResult('\nTEST 3: Fetching categories collection...');
            try {
                const categoriesRef = collection(db, 'categories');
                const categoriesSnapshot = await getDocs(categoriesRef);
                addResult(`Found ${categoriesSnapshot.size} documents in categories collection`);

                if (categoriesSnapshot.size > 0) {
                    categoriesSnapshot.docs.forEach(doc => {
                        addResult(`  - Category: ${doc.id} → ${JSON.stringify(doc.data())}`);
                    });
                } else {
                    addResult('Categories collection is EMPTY', true);
                }
            } catch (error: any) {
                addResult(`Categories fetch FAILED: ${error.message}`, true);
            }

            // Test 4: Featured Products Query (with index)
            addResult('\nTEST 4: Testing featured products query (requires index)...');
            try {
                const { getFeaturedProducts } = await import('../services/productService');
                const featured = await getFeaturedProducts();
                addResult(`Featured products query returned ${featured.length} items`);
            } catch (error: any) {
                addResult(`Featured products query FAILED: ${error.message}`, true);
                if (error.message.includes('index')) {
                    addResult('⚠️ MISSING INDEX - Click the link in the error to create it', true);
                }
            }

            // Test 5: Categories Query (with index)
            addResult('\nTEST 5: Testing categories query (requires index)...');
            try {
                const { getAllCategories } = await import('../services/categoryService');
                const categories = await getAllCategories();
                addResult(`Categories query returned ${categories.length} items`);
            } catch (error: any) {
                addResult(`Categories query FAILED: ${error.message}`, true);
                if (error.message.includes('index')) {
                    addResult('⚠️ MISSING INDEX - Click the link in the error to create it', true);
                }
            }

            setLoading(false);
            addResult('\n🏁 All tests complete!');
        };

        runTests();
    }, []);

    return (
        <div className="min-h-screen bg-zinc-900 text-white p-8 pt-32 font-mono">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-2 text-[#c41e3a]">🔥 Firebase Connection Test</h1>
                <p className="text-zinc-400 mb-8">Testing Firebase connectivity and data retrieval</p>

                {loading && (
                    <div className="mb-4 flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-zinc-600 border-t-[#c41e3a] rounded-full animate-spin"></div>
                        <span className="text-zinc-400">Running tests...</span>
                    </div>
                )}

                <div className="bg-zinc-800 rounded-lg p-6 space-y-1">
                    {results.map((result, i) => (
                        <div
                            key={i}
                            className={`text-sm ${result.includes('❌') ? 'text-red-400' : result.includes('✅') ? 'text-green-400' : 'text-zinc-300'}`}
                        >
                            {result}
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-zinc-800 rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4 text-[#c41e3a]">📋 What to Check:</h2>
                    <ul className="space-y-2 text-sm text-zinc-300">
                        <li>✓ All tests should show ✅ (green checkmarks)</li>
                        <li>✓ Products and categories should have documents</li>
                        <li>✓ Queries should return data (not fail with index errors)</li>
                        <li>✗ If you see ❌ errors, check the console for Firebase index links</li>
                    </ul>
                </div>

                <div className="mt-4 text-center">
                    <a href="/" className="text-[#c41e3a] hover:underline">← Back to Home</a>
                </div>
            </div>
        </div>
    );
};

export default FirebaseTestPage;
