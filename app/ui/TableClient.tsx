'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface ClientTableProps {
  initialData: Post[];
  currentPage: number;
  totalPages: number;
}

export default function ClientTable({ initialData, currentPage, totalPages }: ClientTableProps) {
  // 1. Khởi tạo state với dữ liệu SSR truyền xuống
  const [data, setData] = useState<Post[]>(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUserId, setFilterUserId] = useState('');

  // 2. Lifecycle: Kiểm tra Component Mount / Unmount
  useEffect(() => {
    console.log('=== CLIENT MOUNTED - Table loaded ===');
    return () => {
      console.log('=== CLIENT UNMOUNTED - Trang died! ===');
    };
  }, []);

  // 3. Gọi Axios lấy toàn bộ 100 records ngầm dưới background (CSR)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data);
        console.log('=== Axios fetched 100 records ===');
      })
      .catch((err) => console.error(err));
  }, []);

  // 4. Logic Filter & Search (Thuần Client)
  // Nếu người dùng đang gõ tìm kiếm, ta dùng tập 100 records (data).
  // Nếu không tìm kiếm gì, ta chỉ hiện 10 records của trang hiện tại (initialData).
  const isSearching = searchTerm !== '' || filterUserId !== '';
  const sourceData = isSearching ? data : initialData;

  const filteredData = sourceData.filter((post) => {
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchUser = filterUserId === '' || post.userId.toString() === filterUserId;
    return matchSearch && matchUser;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-gray-700">
      
      {/* KHU VỰC TÌM KIẾM & LỌC (Tương tác CSR) */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm theo tiêu đề..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <select
          value={filterUserId}
          onChange={(e) => setFilterUserId(e.target.value)}
          className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Tất cả User</option>
          {/* Mock ra 10 user IDs */}
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              User {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* KHU VỰC BẢNG DỮ LIỆU */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">User ID</th>
              <th className="px-4 py-3 border-b w-1/2">Tiêu đề (Title)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{post.id}</td>
                  <td className="px-4 py-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">
                      {post.userId}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">{post.title}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-gray-500">
                  Không tìm thấy kết quả nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* KHU VỰC PHÂN TRANG (Điều hướng SSR) */}
      {/* Ẩn phân trang nếu đang search để tránh nhầm lẫn logic */}
      {!isSearching && (
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Đang hiển thị trang <span className="font-bold text-gray-900">{currentPage}</span> / {totalPages}
          </p>
          <div className="flex gap-2">
            {currentPage > 1 ? (
              <Link
                href={`/home/table/${currentPage - 1}`}
                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Trang trước
              </Link>
            ) : (
              <button disabled className="rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
                Trang trước
              </button>
            )}

            {currentPage < totalPages ? (
              <Link
                href={`/home/table/${currentPage + 1}`}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Trang sau
              </Link>
            ) : (
              <button disabled className="rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">
                Trang sau
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}