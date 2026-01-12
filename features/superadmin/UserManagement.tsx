
import React, { useState } from 'react';

export const UserManagement: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'guru' | 'siswa'>('all');
  
  const users = [
    { id: 1, name: 'Ibu Ratih', role: 'guru', email: 'ratih@bimbel.id', status: true, date: '12 Jan 2024' },
    { id: 2, name: 'Pak Bambang', role: 'guru', email: 'bambang@bimbel.id', status: false, date: '15 Jan 2024' },
    { id: 3, name: 'Ananda Putra', role: 'siswa', email: 'ananda@gmail.com', status: true, date: '20 Jan 2024' },
    { id: 4, name: 'Siti Sarah', role: 'siswa', email: 'sarah@gmail.com', status: true, date: '22 Jan 2024' },
  ];

  const filteredUsers = filter === 'all' ? users : users.filter(u => u.role === filter);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Kelola User</h3>
          <p className="text-sm text-slate-500">Manajemen akses guru dan peserta didik.</p>
        </div>
        <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">+ Tambah User</button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex bg-white p-1 rounded-xl border border-slate-200 w-fit">
              <button onClick={() => setFilter('all')} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${filter === 'all' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Semua</button>
              <button onClick={() => setFilter('guru')} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${filter === 'guru' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Guru</button>
              <button onClick={() => setFilter('siswa')} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${filter === 'siswa' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Siswa</button>
           </div>
           <div className="relative">
              <input type="text" className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64" placeholder="Cari user..." />
              <svg className="w-4 h-4 absolute left-3.5 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
              <tr>
                <th className="px-6 py-4">User Info</th>
                <th className="px-6 py-4">Akses</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Terdaftar Pada</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold text-xs ${user.role === 'guru' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'}`}>
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${user.role === 'guru' ? 'text-blue-600 bg-blue-50' : 'text-indigo-600 bg-indigo-50'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={user.status} />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                      <span className="ml-2 text-xs font-semibold text-slate-500">{user.status ? 'Aktif' : 'Non-aktif'}</span>
                    </label>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs font-medium">{user.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                       <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                       </button>
                       <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                       </button>
                    </div>
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
