'use client';

import { useState, useEffect } from 'react';

export default function UseEffectDemo() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 className='text-black' style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Mô phỏng useEffect trong Next.js
      </h1>
      
      <button 
        onClick={() => setShowTimer(!showTimer)}
        style={{
          padding: '10px 20px',
          backgroundColor: showTimer ? '#ef4444' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {showTimer ? 'Tắt đồng hồ (Unmount)' : 'Bật đồng hồ (Mount)'}
      </button>

      <hr style={{ margin: '2rem 0' }} />

      {/* Component con chỉ xuất hiện khi showTimer = true */}
      {showTimer && <TimerWidget />}
    </div>
  );
}

// --- COMPONENT CON ---
function TimerWidget() {
  const [seconds, setSeconds] = useState(0);

  // 1. Effect chạy 1 lần lúc Mount và chạy Cleanup lúc Unmount
  useEffect(() => {
    console.log('✅ [Mount]: TimerWidget đã được gắn vào giao diện!');

    // Cài đặt một bộ đếm chạy ngầm mỗi 1 giây
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // HÀM CLEANUP: Chạy khi component bị gỡ khỏi giao diện
    return () => {
      console.log('❌ [Unmount]: TimerWidget sắp bị gỡ! Đang dọn dẹp interval...');
      clearInterval(intervalId); // Xóa bộ đếm để tránh rò rỉ bộ nhớ
    };
  }, []); // Mảng rỗng [] nghĩa là chỉ chạy setup 1 lần duy nhất

  // 2. Effect chạy lại mỗi khi biến 'seconds' thay đổi
  useEffect(() => {
    if (seconds > 0 && seconds % 5 === 0) {
      console.log(`⏱️ [Update]: Đồng hồ đã chạy được ${seconds} giây.`);
    }
  }, [seconds]); // Dependency là [seconds]

  return (
    <div className='text-black' style={{ padding: '1rem', border: '2px solid #22c55e', borderRadius: '8px', backgroundColor: '#f0fdf4' }}>
      <h2>Đồng hồ đang chạy:</h2>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0' }}>{seconds}s</p>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        👉 Hãy mở <strong>Console (F12)</strong> trên trình duyệt để xem các log của useEffect!
      </p>
    </div>
  );
}