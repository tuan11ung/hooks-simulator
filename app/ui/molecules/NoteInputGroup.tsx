import React, { useState } from 'react';
import { Input } from '../atoms/input';
import { Button } from '../atoms/button';
import { useNotes } from '@/app/contexts/NoteContext';
import { Note } from '@/app/reducers/noteReducer';

type NoteInputGroupProps = {
  inputText: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
  

export const NoteInputGroup = () => {
  const [inputText, setInputText] = useState<string>('');
  const { dispatch } = useNotes();

  const handleAddNote = () => {
    if (!inputText.trim()) return;
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: 'Ghi chú nhanh',
      content: inputText,
      createdAt: Date.now(),
    };
    dispatch({ type: 'ADD_NOTE', payload: newNote });
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Ngăn hành vi mặc định (như reload form nếu có)
      handleAddNote();
    }
  };

  return (
    <div className='flex gap-2.5 mb-5'>
      <Input value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleKeyDown} placeholder="Nhập nội dung ghi chú..." />
      <Button onClick={handleAddNote}  variant="primary">Thêm</Button>
    </div>
  );
};