import { useState, useEffect } from 'react';

// Custom hook for handling form state and validation
export const useForm = <T extends Record<string, any>>(initialValues: T, validate: (values: T) => Record<string, string>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (onSubmit: (values: T) => void) => {
    return () => {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitting(true);
        onSubmit(values);
        setIsSubmitting(false);
      }
    };
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  };
};