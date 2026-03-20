import React from 'react';
import { Input } from '../atoms/input';
import { Button } from '../atoms/button';

type NoteInputGroupProps = {
  inputText: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  onKeyDown: () => void
};

export const NoteInputGroup = ({ inputText, onInputChange, onAdd, onKeyDown }: NoteInputGroupProps) => {
  return (
    <div className='flex gap-2.5 mb-5'>
      <Input value={inputText} onChange={onInputChange} onKeyDown={onKeyDown} placeholder="Nhập nội dung ghi chú..." />
      <Button onClick={onAdd}  variant="primary">Thêm</Button>
    </div>
  );
};