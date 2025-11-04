import { useState, useCallback } from 'react';
import { ValidationUtils, ValidationResult } from '@/shared/utils\ValidationUtils';

export interface ValidationRule<T> {
  validate: (value: T) => boolean;
  message: string;
}

export interface FieldValidationConfig<T> {
  value: T;
  rules: ValidationRule<T>[];
}

export interface FormValidationConfig {
  [fieldName: string]: FieldValidationConfig<any>;
}

export interface FormValidationResult {
  errors: { [fieldName: string]: string[] };
  isValid: boolean;
  validateField: (fieldName: string, value: any) => void;
  validateForm: () => boolean;
  reset: () => void;
}

export const useFormValidation = (config: FormValidationConfig): FormValidationResult => {
  const [errors, setErrors] = useState<{ [fieldName: string]: string[] }>({});

  const validateField = useCallback((fieldName: string, value: any) => {
    const fieldConfig = config[fieldName];
    if (!fieldConfig) return;

    const fieldErrors: string[] = [];

    for (const rule of fieldConfig.rules) {
      if (!rule.validate(value)) {
        fieldErrors.push(rule.message);
      }
    }

    setErrors(prev => ({
      ...prev,
      [fieldName]: fieldErrors
    }));
  }, [config]);

  const validateForm = useCallback((): boolean => {
    const newErrors: { [fieldName: string]: string[] } = {};

    for (const fieldName in config) {
      const fieldConfig = config[fieldName];
      const fieldErrors: string[] = [];

      for (const rule of fieldConfig.rules) {
        if (!rule.validate(fieldConfig.value)) {
          fieldErrors.push(rule.message);
        }
      }

      if (fieldErrors.length > 0) {
        newErrors[fieldName] = fieldErrors;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [config]);

  const reset = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
    validateField,
    validateForm,
    reset
  };
};

// Common validation rules
export const validationRules = {
  required: (message = 'This field is required'): ValidationRule<any> => ({
    validate: (value) => value !== undefined && value !== null && value !== '',
    message
  }),

  minLength: (min: number, message?: string): ValidationRule<string> => ({
    validate: (value) => value.length >= min,
    message: message || `Minimum length is ${min} characters`
  }),

  maxLength: (max: number, message?: string): ValidationRule<string> => ({
    validate: (value) => value.length <= max,
    message: message || `Maximum length is ${max} characters`
  }),

  email: (message = 'Please enter a valid email'): ValidationRule<string> => ({
    validate: (value) => ValidationUtils.isValidEmail(value),
    message
  }),

  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number'): ValidationRule<string> => ({
    validate: (value) => ValidationUtils.isValidPassword(value),
    message
  }),

  min: (min: number, message?: string): ValidationRule<number> => ({
    validate: (value) => ValidationUtils.isNumber(value) && value >= min,
    message: message || `Value must be at least ${min}`
  }),

  max: (max: number, message?: string): ValidationRule<number> => ({
    validate: (value) => ValidationUtils.isNumber(value) && value <= max,
    message: message || `Value must be at most ${max}`
  }),

  pattern: (regex: RegExp, message: string): ValidationRule<string> => ({
    validate: (value) => regex.test(value),
    message
  })
};