
import React from 'react';

export const OverviewGuru: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Jadwal Mengajar Hari Ini</h3>
          <div className="space-y-4">
            {[
              { time: '08:00 - 10:00', class: 'Matematika - Kelas 12 IPA', room: 'Zoom Room A' },
              { time: '13:00 - 15:00', class: 'Fisika - Kelas 11 IPA', room: 'Offline Room 302' },
            ].map((item, i) => (
              <div key={i} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-slate-800">{item.class}</p>
                  <p className="text-sm text-slate-500">{item.time} • {item.room}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl text-white shadow-lg">
          <h3 className="text-xl font-bold mb-4">Statistik Kehadiran</h3>
          <p className="opacity-80 mb-8">Rata-rata kehadiran siswa di kelas Anda bulan ini adalah 94%.</p>
          <div className="flex items-end space-x-4 h-32">
            {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-white/20 rounded-t-lg hover:bg-white/40 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold uppercase opacity-60">
            <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
          </div>
        </div>
      </div>
    </div>
  );
};
