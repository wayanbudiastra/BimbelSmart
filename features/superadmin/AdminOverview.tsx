
import React from 'react';

export const AdminOverview: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Siswa', value: '1.240', change: '+12%', color: 'blue' },
          { label: 'Total Guru', value: '45', change: '+2', color: 'indigo' },
          { label: 'Pendapatan Bulan Ini', value: 'Rp 45.2M', change: '+8%', color: 'green' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-all">
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              <span className="text-xs font-semibold text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Pendaftaran Terbaru</h3>
            <button className="text-sm text-blue-600 font-semibold hover:underline">Lihat Semua</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Nama Siswa</th>
                  <th className="px-6 py-4">Program</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {[
                  { name: 'Budi Santoso', program: 'Intensive UTBK', status: 'Aktif' },
                  { name: 'Siti Aminah', program: 'Reguler SMA', status: 'Menunggu' },
                  { name: 'Rizky Pratama', program: 'English Camp', status: 'Aktif' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                    <td className="px-6 py-4 text-slate-600">{row.program}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${row.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
           <h3 className="font-bold text-slate-800 mb-4">Pengumuman Terkini</h3>
           <div className="space-y-4">
             {[
               { title: 'Persiapan Try Out Akbar', date: '25 Jan 2025', urgent: true },
               { title: 'Update Kurikulum Semester Genap', date: '20 Jan 2025', urgent: false },
             ].map((msg, i) => (
               <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                 <div>
                   <h4 className="text-sm font-bold text-slate-800">{msg.title}</h4>
                   <p className="text-xs text-slate-500">{msg.date}</p>
                 </div>
                 {msg.urgent && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};
