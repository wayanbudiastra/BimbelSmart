
import React, { useState, useEffect } from 'react';
import { LoginForm } from './components/LoginForm';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { DashboardLayout } from './layouts/DashboardLayout';
import { AdminDashboard } from './features/superadmin/AdminDashboard';
import { GuruDashboard } from './features/guru/GuruDashboard';
import { SiswaDashboard } from './features/siswa/SiswaDashboard';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogin = (role: UserRole) => {
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: role === 'superadmin' ? 'Admin Utama' : role === 'guru' ? 'Ibu Ratih' : 'Ananda Putra',
      email: 'user@bimbel.com',
      role: role
    };
    setCurrentUser(mockUser);
    setActiveTab('overview');
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen w-full relative overflow-hidden bg-white flex items-center justify-center p-4">
        <BackgroundDecorations />
        <div className="relative z-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-200"></div>
              <span className="text-2xl font-bold text-slate-800">BimbelSmart</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-1">Pusat Belajar Digital</h1>
            <p className="text-slate-500 text-sm">Akses materi dan manajemen pembelajaran terbaik</p>
          </div>
          <LoginForm onLoginSuccess={handleLogin} />
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout user={currentUser} onLogout={handleLogout} activeTab={activeTab} setActiveTab={setActiveTab}>
      {currentUser.role === 'superadmin' && <AdminDashboard />}
      {currentUser.role === 'guru' && <GuruDashboard activeTab={activeTab} />}
      {currentUser.role === 'siswa' && <SiswaDashboard />}
    </DashboardLayout>
  );
};

export default App;
