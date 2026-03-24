import { notFound } from "next/navigation";
import ClientTable from "@/app/ui/TableClient";
import allPosts from '@/data/posts.json' assert { type: 'json' };

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const posts = allPosts as Post[];


export async function generateStaticParams() {
  console.log("=== GENERATE STATIC PARAMS (SSG) ===");
  const totalPages = 20; // chỉ demo 20 trang SSG, trang sau sẽ SSR
  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1)
  }));
}

export default async function TablePage({ params }: { params: { page: string } }) {
  const { page } = await params
  const currentPage = parseInt(page, 10);
  console.log(`page: ${page}`)

  const limit = 10;
  const totalPages = Math.ceil(100000 / limit);

  if (currentPage > totalPages) {
    notFound();
  }

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const initialData: Post[] = posts.slice(startIndex, endIndex);

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-6">Trang {currentPage} / {totalPages} (SSG)</h1> */}
      
      {/* 3. Truyền data xuống Client Component để xử lý UI/Tương tác */}
      <ClientTable 
        initialData={initialData} 
        currentPage={currentPage} 
        totalPages={totalPages} 
      />
    </div>
  );

}