
export type UserRole = 'superadmin' | 'guru' | 'siswa';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
