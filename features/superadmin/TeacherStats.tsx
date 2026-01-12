
import React from 'react';

export const TeacherStats: React.FC = () => {
  const teachers = [
    { name: 'Ibu Ratih', rating: 4.8, attendance: 98, courses: 4, hours: 24, studentProgress: 85 },
    { name: 'Pak Bambang', rating: 4.5, attendance: 92, courses: 3, hours: 18, studentProgress: 78 },
    { name: 'Pak Sutarman', rating: 4.9, attendance: 100, courses: 2, hours: 12, studentProgress: 92 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Statistik Guru</h3>
          <p className="text-sm text-slate-500">Evaluasi efektivitas mengajar dan kehadiran instruktur.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center space-x-4">
               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 font-bold text-lg">
                 {t.name.split(' ').map(n => n[0]).join('')}
               </div>
               <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <div className="flex items-center text-amber-500 text-xs font-bold">
                     <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                     {t.rating} Rating Rata-rata
                  </div>
               </div>
            </div>
            
            <div className="p-6 space-y-4 flex-1">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Kehadiran</p>
                     <p className="text-lg font-bold text-slate-800">{t.attendance}%</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Jam/Minggu</p>
                     <p className="text-lg font-bold text-slate-800">{t.hours} Jam</p>
                  </div>
               </div>
               
               <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                     <span className="text-slate-500 uppercase tracking-tighter">Kemajuan Belajar Siswa</span>
                     <span className="text-blue-600">{t.studentProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-600 rounded-full" style={{ width: `${t.studentProgress}%` }}></div>
                  </div>
               </div>
            </div>
            
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
               <button className="w-full py-2 bg-white border border-slate-200 text-xs font-bold text-slate-700 rounded-lg hover:bg-white hover:text-blue-600 transition-all">Lihat Detail Mengajar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
