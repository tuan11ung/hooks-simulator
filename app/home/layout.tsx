'use client'; // Cần thiết để dùng hook usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  DocumentDuplicateIcon, 
  UserGroupIcon,
  PowerIcon
} from '@heroicons/react/24/outline';

// Danh sách các menu
const navLinks = [
  { name: 'useState', href: '/home/usestate' },
  { name: 'useEffect', href: '/home/useeffect' }
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-50">
      
      {/* CỘT SIDEBAR */}
      <div className="w-full flex-none md:w-64 bg-white border-r border-gray-200">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          
          {/* Logo / Header của Sidebar */}
          <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4"
            href="/"
          >
            <div className="text-white text-2xl font-bold">My App</div>
          </Link>

          {/* Danh sách Links */}
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            {navLinks.map((link) => {
              // Kiểm tra xem link này có phải là trang hiện tại không
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium 
                    md:flex-none md:justify-start md:p-2 md:px-3 transition-colors
                    ${isActive 
                      ? 'bg-blue-100 text-blue-600' // Nổi bật nếu đang ở trang này
                      : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600' // Trạng thái bình thường
                    }
                  `}
                >
                  {/* Ẩn text trên mobile, chỉ hiện icon. Trên màn lớn (md) thì hiện đủ chữ */}
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              );
            })}
            
            {/* Khoảng trống đẩy nút Đăng xuất xuống đáy */}
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            
            {/* Nút Đăng xuất */}
            <form>
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3 transition-colors">
                <PowerIcon className="w-6 h-6" />
                <div className="hidden md:block">Đăng xuất</div>
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* CỘT NỘI DUNG CHÍNH (MAIN CONTENT) */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>

    </div>
  );
}