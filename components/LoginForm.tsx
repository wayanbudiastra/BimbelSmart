
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginFormProps {
  onLoginSuccess: (role: UserRole) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('siswa');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi delay login
    setTimeout(() => {
      onLoginSuccess(role);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 relative">
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700"></div>

      <form onSubmit={handleSubmit} className="p-8 space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Email Peserta / Staf
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
            placeholder="contoh@bimbelsmart.id"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Password
            </label>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Masuk Sebagai
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['superadmin', 'guru', 'siswa'] as UserRole[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`py-2 px-1 text-[10px] font-bold uppercase rounded-lg border transition-all ${
                  role === r 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100' 
                  : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300'
                }`}
              >
                {r === 'superadmin' ? 'Admin' : r}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <span>Mulai Belajar</span>
          )}
        </button>

        <div className="pt-4 text-center">
          <p className="text-xs text-slate-400">
            Butuh bantuan akses? <a href="#" className="text-blue-600 font-bold hover:underline">Hubungi Admin</a>
          </p>
        </div>
      </form>
    </div>
  );
};
