import { useTranslation } from 'react-i18next';

// Custom hook that wraps useTranslation to provide easier access to translations
export const useT = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return {
    t,
    changeLanguage,
    currentLanguage,
    i18n
  };
};