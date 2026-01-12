
import React from 'react';

export const AssessmentManager: React.FC = () => {
  const assessments = [
    { id: 1, title: 'Tugas Mingguan 3: Aljabar', category: 'Tugas', dueDate: 'Feb 10', submitted: 28, total: 32 },
    { id: 2, title: 'Ujian Tengah Semester Ganjil', category: 'UTS', dueDate: 'Mar 15', submitted: 0, total: 32 },
    { id: 3, title: 'Ujian Akhir Semester Ganjil', category: 'UAS', dueDate: 'Jun 20', submitted: 0, total: 32 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Tugas & Ujian</h3>
          <p className="text-sm text-slate-500">Kelola evaluasi mingguan dan ujian formal.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all">Buat Tugas</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-100 hover:bg-blue-700 transition-all">Buat Ujian Baru</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex space-x-6">
            <button className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-2">Semua</button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pb-2">Aktif</button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pb-2">Terjadwal</button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pb-2">Selesai</button>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {assessments.map((a) => (
            <div key={a.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xs ${
                  a.category === 'Tugas' ? 'bg-green-100 text-green-700' :
                  a.category === 'UTS' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                }`}>
                  {a.category}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{a.title}</h4>
                  <p className="text-xs text-slate-500">Batas Waktu: <span className="font-semibold">{a.dueDate}</span></p>
                </div>
              </div>
              <div className="flex items-center space-x-12">
                <div className="text-right">
                  <p className="text-lg font-bold text-slate-900">{a.submitted} / {a.total}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Siswa Terkumpul</p>
                </div>
                <div className="flex space-x-2">
                   <button className="p-2 text-slate-400 hover:text-blue-600 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button className="p-2 text-slate-400 hover:text-blue-600 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
