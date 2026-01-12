
import React from 'react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Soft Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>

      {/* Requested Gradient Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-blue-500 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-px h-1/2 bg-gradient-to-b from-blue-400 to-transparent"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-20 animate-pulse">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDuration: '3s' }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="26" height="26" rx="4" stroke="#6366F1" strokeWidth="2" />
        </svg>
      </div>

      {/* Decorative Gradient Bar in corner */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 clip-path-diagonal rotate-45 transform -translate-x-16 -translate-y-16 opacity-10"></div>
    </div>
  );
};
