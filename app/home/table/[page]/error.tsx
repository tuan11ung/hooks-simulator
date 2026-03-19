'use client'; // Bắt buộc đối với error boundary

import { useEffect } from 'react';

export default function ErrorTable({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  // Log lỗi ra console để dev dễ debug
  useEffect(() => {
    console.error('Lỗi khi tải Table:', error);
  }, [error]);

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-100 bg-red-50 rounded-lg border border-red-100 mt-6">
      <h2 className="text-2xl font-bold text-red-600 mb-2">Ôi hỏng! Có lỗi xảy ra.</h2>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Không thể tải dữ liệu của trang này. Máy chủ có thể đang bận hoặc đường truyền mạng bị gián đoạn.
      </p>
      
      {/* Nút reset giúp thử gọi lại Server Component một lần nữa */}
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
      >
        Thử tải lại (Try again)
      </button>
    </div>
  );
}