'use client';

import React from 'react';
import { NoteInputGroup } from '@/app/ui/molecules/NoteInputGroup';
import { NoteList } from '@/app/ui/organisms/NoteList';
import { NoteProvider } from '@/app/contexts/NoteContext';

export default function NoteApp() {
  return (
    <NoteProvider>
      <div className='p-5 max-w-100 mx-auto text-black'>
        <h2>Sổ Tay Của Bro</h2>
        
        {/* Giao diện nhập liệu đã được bọc gọn trong Molecule */}
        <NoteInputGroup/>

        {/* Danh sách ghi chú đã được bọc gọn trong Organism */}
        <NoteList/>
      </div>
    </NoteProvider>
  );
}