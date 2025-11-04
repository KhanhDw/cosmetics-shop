import { AxiosError } from 'axios';

export interface ApiErrorInfo {
  message: string;
  status?: number;
  code?: string;
  details?: any;
}

export class ApiErrorHandler {
  static handle(error: unknown): ApiErrorInfo {
    if (error instanceof Error) {
      // Handle Axios errors specifically
      if (this.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const response = axiosError.response;

        if (response) {
          // Server responded with error status
          return {
            message: response.data?.message || this.getStatusText(response.status),
            status: response.status,
            code: `HTTP_${response.status}`,
            details: response.data
          };
        } else if (axiosError.request) {
          // Request was made but no response received
          return {
            message: 'Network error. Please check your connection.',
            code: 'NETWORK_ERROR'
          };
        } else {
          // Something else happened while setting up the request
          return {
            message: axiosError.message || 'An error occurred while making the request',
            code: 'REQUEST_ERROR'
          };
        }
      }

      // Handle other types of errors
      return {
        message: error.message,
        code: error.constructor.name
      };
    }

    // Handle non-error objects
    return {
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR'
    };
  }

  private static isAxiosError(error: Error): error is AxiosError {
    return (error as AxiosError).isAxiosError === true;
  }

  private static getStatusText(status: number): string {
    const statusTexts: { [key: number]: string } = {
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not Found',
      409: 'Conflict',
      422: 'Unprocessable Entity',
      429: 'Too Many Requests',
      500: 'Internal Server Error',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Timeout'
    };

    return statusTexts[status] || `HTTP Error ${status}`;
  }

  static getMessage(error: unknown): string {
    const errorInfo = this.handle(error);
    return errorInfo.message;
  }

  static getStatusCode(error: unknown): number | undefined {
    const errorInfo = this.handle(error);
    return errorInfo.status;
  }

  static isNetworkError(error: unknown): boolean {
    const errorInfo = this.handle(error);
    return errorInfo.code === 'NETWORK_ERROR';
  }

  static isAuthError(error: unknown): boolean {
    const status = this.getStatusCode(error);
    return status === 401;
  }

  static isNotFoundError(error: unknown): boolean {
    const status = this.getStatusCode(error);
    return status === 404;
  }

  static isServerError(error: unknown): boolean {
    const status = this.getStatusCode(error);
    return status !== undefined && status >= 500;
  }
}