'use client'

import { useState } from "react"

export default function UseStateDemo() {
  const [count, setCount] = useState<number>(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }
  
  return (
    // SỬA Ở ĐÂY: Dùng h-screen và overflow-hidden thay vì min-h-screen
    <div className="inset-0 overflow-hidden bg-slate-50 flex flex-col items-center justify-center p-4">
      
      {/* Thẻ Card bao quanh nội dung */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-slate-100">
        
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
          useState Demo
        </h1>
        <p className="text-slate-500 mb-8 text-sm">
          Thử nghiệm tăng giảm giá trị bằng React Hook
        </p>

        {/* Khu vực hiển thị con số */}
        <div className="mb-10">
          <span className={`text-7xl font-black transition-all duration-300 ${count >= 0 ? 'text-blue-600' : 'text-red-500'}`}>
            {count}
          </span>
        </div>

        {/* Khu vực nút bấm */}
        <div className="flex gap-4 justify-center">
          <button 
            onClick={handleDecrease}
            className="flex-1 bg-white border-2 border-slate-200 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all"
          >
            Giảm (−)
          </button>
          
          <button 
            onClick={handleIncrease}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
          >
            Tăng (+)
          </button>
        </div>

        {/* Nút Reset */}
        <button 
          onClick={() => setCount(0)}
          className="mt-6 text-slate-400 text-sm hover:text-slate-600 underline underline-offset-4"
        >
          Đặt lại về 0
        </button>

      </div>
    </div>
  )
}