import { User as UserInterface } from '@/shared/types';

export class UserEntity implements UserInterface {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';

  constructor(data: UserInterface) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.avatar = data.avatar;
    this.role = data.role;
  }

  /**
   * Check if user is an admin
   */
  isAdmin(): boolean {
    return this.role === 'admin';
  }

  /**
   * Get user's display name
   */
  getDisplayName(): string {
    return this.name || this.email.split('@')[0]; // Use email username if name is not provided
  }

  /**
   * Validate user data
   */
  isValid(): boolean {
    return this.id > 0 && 
           this.name.trim().length > 0 && 
           this.email.includes('@') && 
           ['user', 'admin'].includes(this.role);
  }
}