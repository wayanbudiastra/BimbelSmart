
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { User } from '../types';

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, onLogout, children, activeTab, setActiveTab }) => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        role={user.role} 
        userName={user.name} 
        onLogout={onLogout} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <h2 className="text-lg font-semibold text-slate-800">
            {user.role === 'superadmin' ? 'Admin Central' : user.role === 'guru' ? 'Teacher Portal' : 'Learning Hub'}
          </h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <span className="text-sm font-medium text-slate-700">Tahun Ajaran 2024/2025</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-20 -z-10"></div>
          {children}
        </main>
      </div>
    </div>
  );
};
