
import React from 'react';

export const RekapNilai: React.FC = () => {
  const grades = [
    { name: 'Ahmad Faisal', tugas: 85, uts: 78, uas: 88, rata: 84 },
    { name: 'Bunga Citra', tugas: 92, uts: 85, uas: 90, rata: 89 },
    { name: 'Charlie Van Houten', tugas: 70, uts: 65, uas: 75, rata: 70 },
    { name: 'Diana Ross', tugas: 88, uts: 92, uas: 85, rata: 88 },
    { name: 'Eko Prasetyo', tugas: 82, uts: 80, uas: 84, rata: 82 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Rekap Nilai Siswa</h3>
          <p className="text-sm text-slate-500">Evaluasi performa akademik siswa secara keseluruhan.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2.5 bg-green-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-green-100 hover:bg-green-700 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <span>Export Excel</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Semua Kelas</option>
              <option>12 IPA 1</option>
              <option>12 IPA 2</option>
            </select>
            <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Semester Ganjil</option>
              <option>Semester Genap</option>
            </select>
          </div>
          <div className="relative">
             <input type="text" className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64" placeholder="Cari nama siswa..." />
             <svg className="w-4 h-4 absolute left-4 top-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">
              <tr>
                <th className="px-6 py-5">Nama Siswa</th>
                <th className="px-6 py-5">Rerata Tugas</th>
                <th className="px-6 py-5">UTS</th>
                <th className="px-6 py-5">UAS</th>
                <th className="px-6 py-5">Nilai Akhir</th>
                <th className="px-6 py-5">Grade</th>
                <th className="px-6 py-5">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {grades.map((g, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                       <div className="w-7 h-7 bg-indigo-50 text-indigo-600 text-[10px] font-bold flex items-center justify-center rounded-lg mr-3">
                         {g.name.split(' ').map(n => n[0]).join('')}
                       </div>
                       <span className="font-semibold text-slate-900">{g.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{g.tugas}</td>
                  <td className="px-6 py-4 text-slate-600">{g.uts}</td>
                  <td className="px-6 py-4 text-slate-600">{g.uas}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-md">{g.rata}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-lg font-bold text-xs ${
                      g.rata >= 85 ? 'bg-green-100 text-green-700' :
                      g.rata >= 75 ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {g.rata >= 85 ? 'A' : g.rata >= 75 ? 'B' : 'C'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-blue-600">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
