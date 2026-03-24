import React from 'react';

// Định nghĩa Props: Nút này cần nhận vào những gì?
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'danger'; // Giúp nút có nhiều màu khác nhau
};

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const baseClasses = "px-5 py-2.5 rounded-lg font-medium text-white transition-all active:scale-95 shadow-md cursor-pointer";

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700",
    danger: "bg-red-500 hover:bg-red-600",
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};