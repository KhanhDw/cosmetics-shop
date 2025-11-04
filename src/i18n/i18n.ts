import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import vi from './vi.json';

// the translations
const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'vi', // fallback language if detected language is not in resources
    debug: true, // set to true to see logs

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage']
    },
    
    react: {
      useSuspense: false, // set to true to wrap content in suspense
      transSupportBasicHtmlNodes: true, // allow <br/> and simple html in translations
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'] // preserve basic html nodes
    }
  });

export default i18n;