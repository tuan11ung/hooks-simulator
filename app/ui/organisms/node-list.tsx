import React from 'react';
import { NoteCard } from '../molecules/note-card';
import { Note } from '@/app/reducers/noteReducer';

type NoteListProps = {
  notes: Note[];
  onDeleteNote: (id: string) => void;
};

export const NoteList = ({ notes, onDeleteNote }: NoteListProps) => {
  if (notes.length === 0) {
    return <p style={{ color: 'gray' }}>Chưa có ghi chú nào. Hãy thêm đi bro!</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDeleteNote} />
      ))}
    </div>
  );
};