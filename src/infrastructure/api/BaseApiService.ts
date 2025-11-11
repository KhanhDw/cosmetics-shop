import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { env } from '@/config';
import { ErrorHandler } from '@/shared/utils/ErrorHandler';

export abstract class BaseApiService {
  protected apiClient: AxiosInstance;

  constructor(baseURL?: string) {
    this.apiClient = axios.create({
      baseURL: baseURL || env.API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor
    this.apiClient.interceptors.request.use(
      (config) => this.handleRequest(config),
      this.handleRequestError.bind(this)
    );

    // Add response interceptor
    this.apiClient.interceptors.response.use(
      this.handleResponse.bind(this),
      this.handleResponseError.bind(this)
    );
  }

  private handleRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }

  private handleRequestError(error: AxiosError): Promise<AxiosError> {
    console.error('Request error:', error);
    return Promise.reject(error);
  }

  private handleResponse<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    return response;
  }

  private handleResponseError(error: AxiosError): Promise<AxiosError> {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      // In a real app, you might want to redirect to login
      // window.location.href = '/login';
    }
    
    console.error('Response error:', error);
    return Promise.reject(error);
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.apiClient.get<T>(url, config);
      return response.data;
    } catch (error) {
      const handledError = ErrorHandler.handle(error);
      throw new Error(handledError.message);
    }
  }

  protected async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.apiClient.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      const handledError = ErrorHandler.handle(error);
      throw new Error(handledError.message);
    }
  }

  protected async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.apiClient.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      const handledError = ErrorHandler.handle(error);
      throw new Error(handledError.message);
    }
  }

  protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.apiClient.delete<T>(url, config);
      return response.data;
    } catch (error) {
      const handledError = ErrorHandler.handle(error);
      throw new Error(handledError.message);
    }
  }
}