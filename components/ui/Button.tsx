import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden";
  
  const variants = {
    primary: "bg-slaq-green text-slaq-black hover:bg-[#8CC526] hover:scale-105 active:scale-95 shadow-lg shadow-slaq-green/20 group",
    secondary: "bg-slaq-black text-white hover:bg-gray-800",
    outline: "border border-gray-200 bg-transparent hover:bg-gray-50 text-slaq-black",
    ghost: "bg-transparent hover:bg-gray-100 text-slaq-black",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
      )}
      <span className="relative z-20 flex items-center">{children}</span>
    </button>
  );
};