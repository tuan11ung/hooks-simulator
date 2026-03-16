import React from 'react';

// Định nghĩa Props: Nút này cần nhận vào những gì?
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'danger'; // Giúp nút có nhiều màu khác nhau
};

export const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const color = variant === 'danger' ? 'red' : 'blue';
  
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: color }}
      className='py-2 px-4 text-white rounded cursor-pointer'
    >
      {children}
    </button>
  );
};