
import React from 'react';
import { AdminOverview } from './AdminOverview';
import { UserManagement } from './UserManagement';
import { IncomeReports } from './IncomeReports';
import { UserActivity } from './UserActivity';
import { TeacherStats } from './TeacherStats';

interface AdminDashboardProps {
  activeTab: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'users':
      return <UserManagement />;
    case 'finance':
      return <IncomeReports />;
    case 'activity':
      return <UserActivity />;
    case 'stats':
      return <TeacherStats />;
    default:
      return <AdminOverview />;
  }
};
