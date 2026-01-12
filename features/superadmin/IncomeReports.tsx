
import React from 'react';

export const IncomeReports: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Laporan Pendapatan</h3>
          <p className="text-sm text-slate-500">Analisis arus kas dan pertumbuhan bisnis.</p>
        </div>
        <div className="flex space-x-2">
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold flex items-center hover:bg-slate-50">
             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>
             Pilih Periode
           </button>
           <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold shadow-lg">Export Laporan</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
           <div className="flex justify-between items-center mb-8">
              <h4 className="font-bold text-slate-800">Tren Pendapatan 6 Bulan</h4>
              <div className="flex items-center space-x-4">
                 <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span className="text-xs font-semibold text-slate-500">Tahun Ini</span>
                 </div>
              </div>
           </div>
           <div className="flex items-end space-x-4 h-64">
              {[60, 45, 80, 55, 90, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <div className="w-full bg-blue-100 rounded-t-xl group-hover:bg-blue-500 transition-all cursor-pointer relative" style={{ height: `${h}%` }}>
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">
                       Rp{(h * 0.5).toFixed(1)}M
                     </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-wider">{['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'][i]}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-xs font-bold opacity-80 uppercase mb-1">Total Pendapatan Q1</p>
              <h3 className="text-3xl font-bold">Rp 128.4M</h3>
              <div className="mt-4 flex items-center text-xs font-bold bg-white/20 w-fit px-2 py-1 rounded-lg">
                 <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5V3l-5.333 4L12 7zm-2.667 4L4 15V19h12v-4l-5.333-4z" clipRule="evenodd" /></svg>
                 +15.3% dari Q4
              </div>
           </div>
           
           <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-4">Breakdown Program</h4>
              <div className="space-y-4">
                 {[
                   { name: 'Intensive UTBK', val: 45, color: 'blue' },
                   { name: 'Reguler SMA', val: 30, color: 'indigo' },
                   { name: 'English Camp', val: 25, color: 'green' },
                 ].map((p, i) => (
                   <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-600">{p.name}</span>
                        <span className="text-slate-900">{p.val}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full bg-${p.color}-500`} style={{ width: `${p.val}%` }}></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
