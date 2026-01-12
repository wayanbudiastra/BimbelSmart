
import React, { useState } from 'react';

type MaterialType = 'PDF' | 'IMAGE' | 'VIDEO' | 'QUIZ';

interface Material {
  id: number;
  title: string;
  type: MaterialType;
  date: string;
  status: 'Terbit' | 'Draft';
  description: string;
}

export const MateriPembelajaran: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedType, setSelectedType] = useState<MaterialType>('PDF');
  
  const [materials, setMaterials] = useState<Material[]>([
    { id: 1, title: 'Modul 1: Logaritma & Eksponen', type: 'PDF', date: '12 Jan 2025', status: 'Terbit', description: 'Materi dasar matematika peminatan kelas 12.' },
    { id: 2, title: 'Video Tutorial: Persamaan Kuadrat', type: 'VIDEO', date: '15 Jan 2025', status: 'Draft', description: 'Penjelasan mendalam menggunakan metode cepat.' },
    { id: 3, title: 'Rumus Trigonometri Lengkap', type: 'IMAGE', date: '20 Jan 2025', status: 'Terbit', description: 'Cheat sheet rumus cepat untuk persiapan UTBK.' },
  ]);

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi penambahan data
    setIsAdding(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Materi Pembelajaran</h3>
          <p className="text-sm text-slate-500">Kelola dan publikasikan materi edukasi Anda.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-100 flex items-center hover:bg-indigo-700 transition-all"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          Buat Materi Baru
        </button>
      </div>

      {isAdding ? (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
            <h4 className="font-bold text-slate-800">Setup Materi Baru</h4>
            <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <form onSubmit={handleAddMaterial} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Pilih Tipe Konten</label>
                  <div className="grid grid-cols-4 gap-2">
                    {([
                      { id: 'PDF', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'red' },
                      { id: 'IMAGE', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'green' },
                      { id: 'VIDEO', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', color: 'blue' },
                      { id: 'QUIZ', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: 'purple' },
                    ] as const).map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedType(t.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${selectedType === t.id ? `bg-${t.color}-50 border-${t.color}-200 ring-2 ring-${t.color}-100` : 'bg-white border-slate-100'}`}
                      >
                        <svg className={`w-6 h-6 mb-1 ${selectedType === t.id ? `text-${t.color}-600` : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={t.icon} /></svg>
                        <span className={`text-[10px] font-bold ${selectedType === t.id ? `text-${t.color}-700` : 'text-slate-500'}`}>{t.id}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Judul Materi</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" placeholder="Masukkan judul materi..." required />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Deskripsi Singkat</label>
                  <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white h-24" placeholder="Apa isi modul ini?"></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-700 mb-2">Media & Konfigurasi</label>
                
                {/* Conditional Content based on Type */}
                <div className="p-6 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[250px] bg-slate-50/50">
                   {selectedType === 'PDF' && (
                     <>
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-slate-600">Seret file PDF ke sini atau klik untuk pilih file</p>
                        <p className="text-xs text-slate-400">Max size 20MB</p>
                     </>
                   )}
                   {selectedType === 'IMAGE' && (
                     <>
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-slate-600">Unggah Gambar (JPG/PNG)</p>
                        <p className="text-xs text-slate-400">Rekomendasi rasio 16:9 atau 4:3</p>
                     </>
                   )}
                   {selectedType === 'VIDEO' && (
                     <div className="w-full space-y-4 p-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        </div>
                        <input type="url" className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://youtube.com/watch?v=..." />
                        <p className="text-[10px] text-slate-400 italic">Masukkan link video tutorial Anda</p>
                     </div>
                   )}
                   <button type="button" className="text-blue-600 font-bold text-sm hover:underline">Pilih dari Galeri</button>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-700">Terbitkan Materi?</p>
                    <p className="text-xs text-slate-500">Materi akan langsung terlihat oleh siswa.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end space-x-4">
              <button type="button" onClick={() => setIsAdding(false)} className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">Batalkan</button>
              <button type="submit" className="px-8 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg">Simpan & Terbitkan</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((m) => (
            <div key={m.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm relative group overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
              <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase rounded-bl-xl ${m.status === 'Terbit' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                {m.status}
              </div>
              <div className="p-6 flex-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  m.type === 'PDF' ? 'bg-red-50 text-red-500' : 
                  m.type === 'VIDEO' ? 'bg-blue-50 text-blue-500' : 
                  'bg-green-50 text-green-500'
                }`}>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={
                       m.type === 'PDF' ? 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' :
                       m.type === 'VIDEO' ? 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' :
                       'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                     } />
                   </svg>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{m.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">{m.description}</p>
                <div className="flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>{m.type}</span>
                  <span className="mx-2">•</span>
                  <span>{m.date}</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex space-x-2">
                <button className="flex-1 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-white hover:text-blue-600 transition-all">Ubah</button>
                <button className="flex-1 py-2 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all">Lihat Materi</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
