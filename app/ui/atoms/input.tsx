import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, onKeyDown, placeholder }: InputProps) => {
  return (
    <input 
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className='flex-1 p-2 rounded border border-gray-300'
    />
  );
};