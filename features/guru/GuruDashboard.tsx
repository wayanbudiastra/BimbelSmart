
import React from 'react';
import { OverviewGuru } from './OverviewGuru';
import { ManageKelas } from './ManageKelas';
import { MateriPembelajaran } from './MateriPembelajaran';
import { AssessmentManager } from './AssessmentManager';
import { RekapNilai } from './RekapNilai';

interface GuruDashboardProps {
  activeTab: string;
}

export const GuruDashboard: React.FC<GuruDashboardProps> = ({ activeTab }) => {
  // Render sub-halaman berdasarkan tab aktif dengan delegasi ke file terpisah
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
