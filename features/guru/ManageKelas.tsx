
import React, { useState } from 'react';

export const ManageKelas: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classes = [
    { id: '12-IPA-1', name: 'Kelas 12 IPA 1', totalSiswa: 32, schedule: 'Senin & Rabu' },
    { id: '12-IPA-2', name: 'Kelas 12 IPA 2', totalSiswa: 28, schedule: 'Selasa & Kamis' },
    { id: '11-IPA-1', name: 'Kelas 11 IPA 1', totalSiswa: 30, schedule: 'Jumat' },
  ];

  const students = [
    { id: '1', name: 'Ahmad Faisal', nisn: '0012345', status: 'Hadir' },
    { id: '2', name: 'Bunga Citra', nisn: '0012346', status: 'Izin' },
    { id: '3', name: 'Charlie Van Houten', nisn: '0012347', status: 'Hadir' },
    { id: '4', name: 'Diana Ross', nisn: '0012348', status: 'Alpa' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-800">Manajemen Kelas</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-100">+ Tambah Kelas</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classes.map((c) => (
          <button 
            key={c.id} 
            onClick={() => setSelectedClass(c.id)}
            className={`p-6 rounded-2xl border text-left transition-all ${selectedClass === c.id ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-100 shadow-sm' : 'bg-white border-slate-100 hover:border-blue-200'}`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${selectedClass === c.id ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h4 className="font-bold text-slate-900">{c.name}</h4>
            <p className="text-sm text-slate-500 mb-1">{c.totalSiswa} Siswa Terdaftar</p>
            <p className="text-xs text-blue-600 font-medium">{c.schedule}</p>
          </button>
        ))}
      </div>

      {selectedClass && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-300">
          <div className="p-6 border-b border-slate-100 bg-white sticky top-0 z-10 flex justify-between items-center">
            <h4 className="font-bold text-slate-800 text-lg">Mapping Siswa - {selectedClass}</h4>
            <div className="flex space-x-2">
               <button className="px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Cetak Presensi</button>
               <button className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">Simpan Perubahan</button>
            </div>
          </div>
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Siswa</th>
                <th className="px-6 py-4">NISN</th>
                <th className="px-6 py-4">Status Hari Ini</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mr-3 text-xs font-bold uppercase">{s.name.charAt(0)}</div>
                      <span className="font-medium text-slate-900">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{s.nisn}</td>
                  <td className="px-6 py-4">
                    <select className={`text-xs font-bold py-1.5 px-3 rounded-lg border-none focus:ring-0 cursor-pointer ${
                      s.status === 'Hadir' ? 'bg-green-100 text-green-700' : 
                      s.status === 'Izin' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                    }`}>
                      <option>Hadir</option>
                      <option>Izin</option>
                      <option>Sakit</option>
                      <option>Alpa</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-bold flex items-center">
                       <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                       Profil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
