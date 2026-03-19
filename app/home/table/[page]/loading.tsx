export default function LoadingTable() {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-100">
      {/* Vòng tròn xoay xoay (Spinner) */}
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      
      <div className="text-xl font-medium text-gray-600">
        Đang tải dữ liệu bảng...
      </div>
      <p className="text-sm text-gray-400 mt-2">Vui lòng đợi trong giây lát</p>
    </div>
  );
}