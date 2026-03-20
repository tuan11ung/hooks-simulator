import React from 'react';
import { NoteCard } from '../molecules/note-card';
import { Note } from '@/app/reducers/noteReducer';

type NoteListProps = {
  notes: Note[];
  onDeleteNote: (id: string) => void;
  onUpdateNote: (updatedNote: Note) => void
};

export const NoteList = ({ notes, onDeleteNote, onUpdateNote }: NoteListProps) => {
  if (notes.length === 0) {
    return <p className='text-gray-500'>Chưa có ghi chú nào. Hãy thêm đi bro!</p>;
  }

  return (
    <div className='flex flex-col gap-2.5'>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDeleteNote} onUpdate={onUpdateNote}/>
      ))}
    </div>
  );
};