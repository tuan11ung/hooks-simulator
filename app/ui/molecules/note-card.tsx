import React from 'react';
import { Button } from '../atoms/button';
import { Note } from '@/app/reducers/noteReducer'; // Import Type Note từ file reducer

type NoteCardProps = {
  note: Note;
  onDelete: (id: string) => void;
};

export const NoteCard = ({ note, onDelete }: NoteCardProps) => {
  return (
    <div className='border border-gray-300 p-2.5 rounded'>
      <h4 className='mb-1'>{note.title}</h4>
      <p className='mb-2.5'>{note.content}</p>
      
      {/* Gọi lại hàm onDelete và truyền id của note này lên trên */}
      <Button onClick={() => onDelete(note.id)} variant="danger">
        Xóa ghi chú
      </Button>
    </div>
  );
};