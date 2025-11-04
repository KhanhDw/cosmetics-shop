// Validation utilities for the application

export class ValidationUtils {
  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate password strength
   */
  static isValidPassword(password: string): boolean {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  /**
   * Validate phone number
   */
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  /**
   * Validate URL
   */
  static isValidURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check if string is not empty and has content
   */
  static isNotEmpty(value: string): boolean {
    return typeof value === 'string' && value.trim().length > 0;
  }

  /**
   * Check if value is a valid number
   */
  static isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
  }

  /**
   * Validate that value is within range
   */
  static isInRange(value: number, min: number, max: number): boolean {
    return this.isNumber(value) && value >= min && value <= max;
  }

  /**
   * Validate that array has required length
   */
  static hasValidLength(value: any[], min?: number, max?: number): boolean {
    if (!Array.isArray(value)) return false;
    
    if (min !== undefined && value.length < min) return false;
    if (max !== undefined && value.length > max) return false;
    
    return true;
  }
}

// Validation result interface
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Base validation class
export abstract class BaseValidator<T> {
  abstract validate(data: T): ValidationResult;
  
  protected addError(errors: string[], message: string): void {
    if (!errors.includes(message)) {
      errors.push(message);
    }
  }
}