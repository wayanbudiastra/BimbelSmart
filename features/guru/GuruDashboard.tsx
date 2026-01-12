
import React, { useState } from 'react';

interface GuruDashboardProps {
  activeTab: string;
}

export const GuruDashboard: React.FC<GuruDashboardProps> = ({ activeTab }) => {
  // Render sub-halaman berdasarkan tab aktif
  switch (activeTab) {
    case 'kelas':
      return <ManageKelas />;
    case 'materi':
      return <MateriPembelajaran />;
    case 'assessment':
      return <AssessmentManager />;
    case 'rekap':
      return <RekapNilai />;
    default:
      return <OverviewGuru />;
  }
};

const OverviewGuru = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Jadwal Mengajar Hari Ini</h3>
        <div className="space-y-4">
          {[
            { time: '08:00 - 10:00', class: 'Matematika - Kelas 12 IPA', room: 'Zoom Room A' },
            { time: '13:00 - 15:00', class: 'Fisika - Kelas 11 IPA', room: 'Offline Room 302' },
          ].map((item, i) => (
            <div key={i} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
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

const ManageKelas = () => {
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-800">Manajemen Kelas</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-100">+ Tambah Kelas</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classes.map((c) => (
          <button 
            key={c.id} 
            onClick={() => setSelectedClass(c.id)}
            className={`p-6 rounded-2xl border text-left transition-all ${selectedClass === c.id ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-100' : 'bg-white border-slate-100 hover:border-blue-200'}`}
          >
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h4 className="font-bold text-slate-900">{c.name}</h4>
            <p className="text-sm text-slate-500 mb-1">{c.totalSiswa} Siswa Terdaftar</p>
            <p className="text-xs text-blue-600 font-medium">{c.schedule}</p>
          </button>
        ))}
      </div>

      {selectedClass && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-4">
          <div className="p-6 border-b border-slate-100">
            <h4 className="font-bold text-slate-800 text-lg">Mapping Siswa - {selectedClass}</h4>
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
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mr-3 text-xs font-bold">{s.name.charAt(0)}</div>
                      <span className="font-medium text-slate-900">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{s.nisn}</td>
                  <td className="px-6 py-4">
                    <select className={`text-xs font-bold py-1 px-2 rounded-lg border-none focus:ring-0 cursor-pointer ${
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
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-bold">Detail Profil</button>
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

const MateriPembelajaran = () => {
  const materials = [
    { id: 1, title: 'Modul 1: Logaritma & Eksponen', type: 'PDF', date: '12 Jan 2025', status: 'Terbit' },
    { id: 2, title: 'Video Tutorial: Persamaan Kuadrat', type: 'Video', date: '15 Jan 2025', status: 'Draft' },
    { id: 3, title: 'Latihan Soal: Trigonometri Dasar', type: 'Kuis', date: '20 Jan 2025', status: 'Terbit' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-800">Materi Pembelajaran</h3>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold">+ Unggah Materi</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((m) => (
          <div key={m.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group overflow-hidden">
            <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase rounded-bl-xl ${m.status === 'Terbit' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
              {m.status}
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${m.type === 'PDF' ? 'bg-red-50 text-red-500' : m.type === 'Video' ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'}`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
            </div>
            <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{m.title}</h4>
            <p className="text-xs text-slate-500 mb-4">Ditambahkan: {m.date}</p>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50">Edit</button>
              <button className="flex-1 py-2 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AssessmentManager = () => {
  const assessments = [
    { id: 1, title: 'Tugas Mingguan 3', category: 'Tugas', dueDate: 'Feb 10', submitted: 28, total: 32 },
    { id: 2, title: 'Ujian Tengah Semester', category: 'UTS', dueDate: 'Mar 15', submitted: 0, total: 32 },
    { id: 3, title: 'Ujian Akhir Semester', category: 'UAS', dueDate: 'Jun 20', submitted: 0, total: 32 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-800">Tugas & Ujian</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold">Buat Tugas</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-100">Buat Ujian</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex space-x-4">
            <button className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-2">Semua</button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pb-2">Aktif</button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-600 pb-2">Selesai</button>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {assessments.map((a) => (
            <div key={a.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[10px] ${
                  a.category === 'Tugas' ? 'bg-green-100 text-green-700' :
                  a.category === 'UTS' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                }`}>
                  {a.category}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{a.title}</h4>
                  <p className="text-xs text-slate-500">Batas Waktu: {a.dueDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{a.submitted} / {a.total}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Siswa Mengumpulkan</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RekapNilai = () => {
  const grades = [
    { name: 'Ahmad Faisal', tugas: 85, uts: 78, uas: 88, rata: 84 },
    { name: 'Bunga Citra', tugas: 92, uts: 85, uas: 90, rata: 89 },
    { name: 'Charlie Van', tugas: 70, uts: 65, uas: 75, rata: 70 },
    { name: 'Diana Ross', tugas: 88, uts: 92, uas: 85, rata: 88 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-800">Rekap Nilai Siswa</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-green-100">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <span>Export Excel</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center space-x-4">
          <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-blue-500">
            <option>Semua Kelas</option>
            <option>12 IPA 1</option>
            <option>12 IPA 2</option>
          </select>
          <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-blue-500">
            <option>Semester Ganjil</option>
            <option>Semester Genap</option>
          </select>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-4">Nama Siswa</th>
              <th className="px-6 py-4">Rerata Tugas</th>
              <th className="px-6 py-4">UTS</th>
              <th className="px-6 py-4">UAS</th>
              <th className="px-6 py-4">Nilai Akhir</th>
              <th className="px-6 py-4">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {grades.map((g, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{g.name}</td>
                <td className="px-6 py-4 text-slate-600">{g.tugas}</td>
                <td className="px-6 py-4 text-slate-600">{g.uts}</td>
                <td className="px-6 py-4 text-slate-600">{g.uas}</td>
                <td className="px-6 py-4 font-bold text-blue-700">{g.rata}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-lg font-bold text-xs ${
                    g.rata >= 85 ? 'bg-green-100 text-green-700' :
                    g.rata >= 75 ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {g.rata >= 85 ? 'A' : g.rata >= 75 ? 'B' : 'C'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
