'use client'; // Có dùng hook thì phải có dòng này trong Next.js

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { noteReducer, initialState, Note, NoteAction } from '@/app/reducers/noteReducer'

// 1. Định nghĩa kiểu dữ liệu mà cục Wi-Fi này sẽ phát ra
type NoteContextType = {
  notes: Note[];
  dispatch: React.Dispatch<NoteAction>; // Phát luôn cái bộ đàm đi khắp nơi
};

// 2. Khởi tạo Trạm phát sóng (Context)
const NoteContext = createContext<NoteContextType | undefined>(undefined);

// 3. Tạo Cục phát Wi-Fi (Provider) để bọc các component lại
export const NoteProvider = ({ children }: { children: ReactNode }) => {
  // Mang ông thủ kho từ page.tsx về đây
  const [notes, dispatch] = useReducer(noteReducer, initialState);

  return (
    // Bật máy phát sóng, ném notes và dispatch vào mạng
    <NoteContext.Provider value={{ notes, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

// 4. Cấp "Mật khẩu Wi-Fi" (Custom Hook) để các component khác dễ dàng kết nối
export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNotes phải được sử dụng bên trong NoteProvider!');
  }
  return context; // Trả về { notes, dispatch }
};