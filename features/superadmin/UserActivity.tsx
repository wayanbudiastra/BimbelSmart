
import React from 'react';

export const UserActivity: React.FC = () => {
  const activities = [
    { id: 1, user: 'Ibu Ratih', action: 'Mengunggah materi baru', target: 'Logaritma & Eksponen', time: '5 menit yang lalu', type: 'upload' },
    { id: 2, user: 'Ananda Putra', action: 'Menyelesaikan kuis', target: 'Matematika Dasar', time: '12 menit yang lalu', type: 'quiz' },
    { id: 3, user: 'Admin Utama', action: 'Mengubah status user', target: 'Pak Bambang', time: '1 jam yang lalu', type: 'admin' },
    { id: 4, user: 'Siti Sarah', action: 'Mendaftar program baru', target: 'English Camp', time: '2 jam yang lalu', type: 'register' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'upload': return 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12';
      case 'quiz': return 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2';
      default: return 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Aktivitas User</h3>
          <p className="text-sm text-slate-500">Pantau interaksi real-time di dalam platform.</p>
        </div>
        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50">Hapus Log</button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-slate-200 before:to-transparent">
          {activities.map((act) => (
            <div key={act.id} className="relative flex items-center justify-between group">
              <div className="flex items-center">
                <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-blue-500 z-10 transition-transform group-hover:scale-110">
                   <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={getIcon(act.type)} /></svg>
                </div>
                <div className="ml-14">
                  <p className="text-sm text-slate-800">
                    <span className="font-bold">{act.user}</span> {act.action} <span className="font-bold text-blue-600">{act.target}</span>
                  </p>
                  <p className="text-xs text-slate-400 font-medium">{act.time}</p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
           <button className="text-sm font-bold text-blue-600 hover:underline">Muat Aktivitas Lainnya</button>
        </div>
      </div>
    </div>
  );
};
