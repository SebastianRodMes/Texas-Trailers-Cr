// ============================================
// PAGE TRANSITION LOADER
// Full-screen loading overlay for route changes
// ============================================

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransitionLoader = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Show loader on route change
        setLoading(true);

        // Hide loader after a short delay (simulates page load)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400); // 400ms transition

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
            <div className="text-center">
                {/* Spinning Logo/Icon */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 border-4 border-zinc-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#c41e3a] border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* Loading Text */}
                <p className="text-zinc-600 font-semibold text-sm uppercase tracking-wider">
                    Cargando...
                </p>
            </div>
        </div>
    );
};

export default PageTransitionLoader;
