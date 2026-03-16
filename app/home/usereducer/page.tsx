'use client';

import React, { useReducer, useState } from 'react';
import { noteReducer, initialState, Note } from '@/app/reducers/noteReducer';
import { NoteInputGroup } from '@/app/ui/molecules/note-input-group';
import { NoteList } from '@/app/ui/organisms/node-list';

export default function NoteApp() {
  const [notes, dispatch] = useReducer(noteReducer, initialState);
  const [inputText, setInputText] = useState('');

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

  const handleDeleteNote = (id: string) => {
    dispatch({ type: 'DELETE_NOTE', payload: { id } });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }} className='p-5 max-w-100 mx-auto text-black'>
      <h2>Sổ Tay Của Bro</h2>
      
      {/* Giao diện nhập liệu đã được bọc gọn trong Molecule */}
      <NoteInputGroup 
        inputText={inputText} 
        onInputChange={(e) => setInputText(e.target.value)} 
        onAdd={handleAddNote} 
      />

      {/* Danh sách ghi chú đã được bọc gọn trong Organism */}
      <NoteList 
        notes={notes} 
        onDeleteNote={handleDeleteNote} 
      />
    </div>
  );
}