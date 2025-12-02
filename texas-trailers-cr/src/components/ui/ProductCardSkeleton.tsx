// ============================================
// PRODUCT CARD SKELETON LOADER
// ============================================

const ProductCardSkeleton = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-sm animate-pulse">
            {/* Image Skeleton */}
            <div className="h-56 bg-zinc-200"></div>

            {/* Content Skeleton */}
            <div className="p-5 space-y-4">
                {/* Category + Title */}
                <div className="space-y-2">
                    <div className="h-4 bg-zinc-200 rounded w-20"></div>
                    <div className="h-6 bg-zinc-200 rounded w-3/4"></div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="h-3 bg-zinc-100 rounded"></div>
                    <div className="h-3 bg-zinc-100 rounded"></div>
                    <div className="h-3 bg-zinc-100 rounded"></div>
                    <div className="h-3 bg-zinc-100 rounded"></div>
                </div>

                {/* Price + Button */}
                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                    <div className="h-8 bg-zinc-200 rounded w-24"></div>
                    <div className="h-10 w-10 bg-zinc-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
