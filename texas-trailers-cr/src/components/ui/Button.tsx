import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base";

  const variants = {
    primary: "!bg-[#c41e3a] text-white hover:!bg-red-700 shadow-lg shadow-red-900/20 rounded",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700 rounded",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded",
    white: "!bg-white text-black hover:!bg-zinc-100 shadow-lg shadow-black/20 rounded"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;