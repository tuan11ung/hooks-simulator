import { useState } from 'react';
import { Button } from '../atoms/button';
import { Note } from '@/app/reducers/noteReducer'; // Import Type Note từ file reducer

type NoteCardProps = {
  note: Note;
  onDelete: (id: string) => void;
  onUpdate: (updatedNote: Note) => void;
};

export const NoteCard = ({ note, onDelete, onUpdate }: NoteCardProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content)

  const handleSave = () => {
    onUpdate({
      ...note,
      title: title,
      content: content
    });
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className='border border-gray-500 p-2.5 rounded'>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border border-gray-400 p-1 mb-2 w-full'
        />
        <textarea
          placeholder='Nhập nội dung...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='p-1 w-full border border-gray-400 mb-2.5'
        />
        <div className='flex gap-2.5'>
          <Button
            onClick={handleSave}
            variant='primary'  
          >
            Lưu thay đổi
          </Button>
          <Button
            onClick={() => {
              setIsEditing(false);
              setTitle(note.title);
              setContent(note.content);
            }}
            variant='danger'
          >
            Hủy
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className='border border-gray-300 p-2.5 rounded'>
      <h4 className='mb-1'>{note.title}</h4>
      <p className='mb-2.5'>{note.content}</p>
      
      <div className='flex gap-2.5'>
        <Button onClick={() => setIsEditing(true)} variant='primary'>Sửa ghi chú</Button>
        <Button onClick={() => onDelete(note.id)} variant="danger">Xóa ghi chú</Button>
      </div>

    </div>
  );
};