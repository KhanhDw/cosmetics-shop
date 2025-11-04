import { Product } from '@/shared/types';

export interface ProductValidator {
  validate(product: Product): { isValid: boolean; errors: string[] };
  validateForCreation(product: Omit<Product, 'id'>): { isValid: boolean; errors: string[] };
  validateForUpdate(product: Partial<Product>): { isValid: boolean; errors: string[] };
}

export class ProductValidatorImpl implements ProductValidator {
  validate(product: Product): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!product.id || product.id <= 0) {
      errors.push('Product ID is required and must be a positive number');
    }

    if (!product.name || product.name.trim().length === 0) {
      errors.push('Product name is required');
    }

    if (product.name && product.name.length > 200) {
      errors.push('Product name must be less than 200 characters');
    }

    if (product.description && product.description.length > 1000) {
      errors.push('Product description must be less than 1000 characters');
    }

    if (product.price === undefined || product.price < 0) {
      errors.push('Product price is required and must be a non-negative number');
    }

    if (!product.image || product.image.trim().length === 0) {
      errors.push('Product image is required');
    }

    if (!product.category || product.category.trim().length === 0) {
      errors.push('Product category is required');
    }

    if (product.rating !== undefined && (product.rating < 0 || product.rating > 5)) {
      errors.push('Product rating must be between 0 and 5');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateForCreation(product: Omit<Product, 'id'>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!product.name || product.name.trim().length === 0) {
      errors.push('Product name is required');
    }

    if (product.name && product.name.length > 200) {
      errors.push('Product name must be less than 200 characters');
    }

    if (product.description && product.description.length > 1000) {
      errors.push('Product description must be less than 1000 characters');
    }

    if (product.price === undefined || product.price < 0) {
      errors.push('Product price is required and must be a non-negative number');
    }

    if (!product.image || product.image.trim().length === 0) {
      errors.push('Product image is required');
    }

    if (!product.category || product.category.trim().length === 0) {
      errors.push('Product category is required');
    }

    if (product.rating !== undefined && (product.rating < 0 || product.rating > 5)) {
      errors.push('Product rating must be between 0 and 5');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateForUpdate(product: Partial<Product>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (product.name && product.name.trim().length === 0) {
      errors.push('Product name cannot be empty');
    }

    if (product.name && product.name.length > 200) {
      errors.push('Product name must be less than 200 characters');
    }

    if (product.description && product.description.length > 1000) {
      errors.push('Product description must be less than 1000 characters');
    }

    if (product.price !== undefined && product.price < 0) {
      errors.push('Product price must be a non-negative number');
    }

    if (product.image && product.image.trim().length === 0) {
      errors.push('Product image cannot be empty');
    }

    if (product.category && product.category.trim().length === 0) {
      errors.push('Product category cannot be empty');
    }

    if (product.rating !== undefined && (product.rating < 0 || product.rating > 5)) {
      errors.push('Product rating must be between 0 and 5');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}