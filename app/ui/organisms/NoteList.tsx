import React from 'react';
import { NoteCard } from '../molecules/NoteCard';
import { useNotes } from '@/app/contexts/NoteContext';

export const NoteList = () => {
  const { notes } = useNotes();

  if (notes.length === 0) {
    return <p className='text-gray-500'>Chưa có ghi chú nào. Hãy thêm đi bro!</p>;
  }

  return (
    <div className='flex flex-col gap-2.5'>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note}/>
      ))}
    </div>
  );
};