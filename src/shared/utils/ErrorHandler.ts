export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export class ErrorHandler {
  static handle(error: unknown): ApiError {
    if (error instanceof Error) {
      // Handle different types of errors
      if (this.isApiError(error)) {
        return {
          message: error.message,
          code: 'API_ERROR',
          status: (error as any).response?.status
        };
      }
      
      return {
        message: error.message,
        code: error.constructor.name
      };
    }
    
    return {
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR'
    };
  }
  
  private static isApiError(error: Error): boolean {
    // Check if it's an Axios error or similar
    return (error as any).isAxiosError === true || 
           (error as any).response !== undefined;
  }
  
  static getMessage(error: unknown): string {
    const handledError = this.handle(error);
    return handledError.message;
  }
}