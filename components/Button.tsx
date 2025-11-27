import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'luxury';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "text-transform uppercase letter-spacing-wide transition-all duration-300 ease-in-out border rounded-none cursor-pointer tracking-[0.1em] text-sm font-bold py-4 px-8 md:px-12";
  
  const variants = {
    primary: "bg-white text-primary border-white hover:bg-accent hover:text-white hover:border-accent shadow-sm hover:translate-y-[-2px] hover:shadow-[0_10px_20px_-5px_rgba(197,160,89,0.3)]",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-primary hover:border-white",
    // Luxury text-link style: No border box, clear underline, color transition
    luxury: "bg-transparent border-0 !border-transparent hover:border-transparent underline decoration-1 underline-offset-8 hover:text-accent hover:decoration-accent shadow-none hover:shadow-none hover:translate-y-0",
    // Special variant for the dark section offer (handled via className override usually, but keeping logic consistent)
    accent: "bg-accent text-white border-accent hover:bg-white hover:text-primary hover:border-white shadow-lg shadow-accent/20"
  };

  // Check if className implies an accent override or use the passed variant
  const variantClass = className.includes('bg-accent') ? variants.accent : variants[variant];

  return (
    <button 
      className={`${baseStyles} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;