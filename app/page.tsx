import { redirect } from 'next/navigation';

export default function RootPage() {
  // Chuyển hướng người dùng sang /home ngay lập tức ở phía Server
  redirect('/home');
}