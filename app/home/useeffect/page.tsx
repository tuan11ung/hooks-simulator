'use client';

import { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  const [showTimer, setShowTimer] = useState<boolean>(false);

  return (
    <div className="p-8 font-sans min-h-screen bg-slate-50">
      <h1 className="text-2xl font-bold mb-4 text-slate-800">
        Mô phỏng useEffect trong Next.js
      </h1>
      
      <button 
        onClick={() => setShowTimer(!showTimer)}
        className={`px-5 py-2.5 rounded-lg font-medium text-white transition-all active:scale-95 shadow-md ${
          showTimer ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {showTimer ? 'Tắt đồng hồ' : 'Bật đồng hồ'}
      </button>

      <hr className="my-8 border-slate-200" />

      {/* Component con chỉ xuất hiện khi showTimer = true */}
      <div className="max-w-md">
        {showTimer && <TimerWidget />}
      </div>
    </div>
  );
}

// --- COMPONENT CON ---
function TimerWidget() {
  const [seconds, setSeconds] = useState(0);

  // 1. Effect chạy 1 lần lúc Mount và chạy Cleanup lúc Unmount
  useEffect(() => {
    console.log('[Mount]: TimerWidget đã được gắn vào giao diện!');

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('[Unmount]: TimerWidget sắp bị gỡ! Đang dọn dẹp interval...');
      clearInterval(intervalId);
    };
  }, []);

  // 2. Effect chạy lại mỗi khi biến 'seconds' thay đổi
  useEffect(() => {
    if (seconds > 0 && seconds % 5 === 0) {
      console.log(`[Update]: Đồng hồ đã chạy được ${seconds} giây.`);
    }
  }, [seconds]);

  return (
    <div className="p-6 border-2 border-green-500 rounded-xl bg-green-50 shadow-inner">
      <h2 className="text-green-800 font-semibold flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Đồng hồ đang chạy:
      </h2>
      
      <p className="text-5xl font-black text-slate-900 my-4 tabular-nums">
        {seconds}s
      </p>
      
    </div>
  );
}