// ============================================
// LOADING SPINNER COMPONENT
// ============================================

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
    const sizeClasses = {
        sm: 'w-6 h-6 border-2',
        md: 'w-12 h-12 border-3',
        lg: 'w-16 h-16 border-4'
    };

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className={`${sizeClasses[size]} border-zinc-200 border-t-[#c41e3a] rounded-full animate-spin`}></div>
        </div>
    );
};

export default LoadingSpinner;
