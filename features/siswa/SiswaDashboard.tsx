
import React from 'react';

export const SiswaDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Semangat Belajarnya! 🚀</h2>
          <p className="text-slate-500">Kamu sudah menyelesaikan 75% dari kurikulum bulan ini.</p>
        </div>
        <div className="w-32 h-32 relative">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
            <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="364.4" strokeDashoffset="91.1" className="text-blue-600" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-slate-800">75%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Matematika Dasar', progress: '12/16 Sesi', color: 'blue' },
          { title: 'Bahasa Inggris', progress: '8/12 Sesi', color: 'indigo' },
          { title: 'Fisika Kuantum', progress: '4/10 Sesi', color: 'purple' },
        ].map((course, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className={`w-12 h-12 bg-${course.color}-100 rounded-xl mb-4 flex items-center justify-center text-${course.color}-600`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h4 className="font-bold text-slate-800 mb-1">{course.title}</h4>
            <p className="text-sm text-slate-500 mb-4">{course.progress}</p>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
