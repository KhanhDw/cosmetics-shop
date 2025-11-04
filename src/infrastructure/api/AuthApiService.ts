import { BaseApiService } from './BaseApiService';
import { API_ENDPOINTS } from '@/shared/constants';
import { User } from '@/shared/types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export class AuthApiService extends BaseApiService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return this.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);
  }

  async register(userData: RegisterData): Promise<AuthResponse> {
    return this.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, userData);
  }

  async logout(): Promise<void> {
    await this.post(API_ENDPOINTS.AUTH.LOGOUT);
    // Remove token from local storage after logout
    localStorage.removeItem('authToken');
  }

  async getMe(): Promise<User> {
    return this.get<User>(API_ENDPOINTS.AUTH.ME);
  }
}