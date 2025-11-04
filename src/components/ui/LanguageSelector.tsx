import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];
  const otherLang =
    languages.find((lang) => lang.code !== currentLanguage) || languages[0];

  return (
    <button
      onClick={() => changeLanguage(otherLang.code)}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-secondary hover:text-accent transition-colors duration-200"
      aria-label="Switch language"
    >
      <span className="text-xl">{currentLang.flag}</span>
      {/* <span className="hidden sm:inline">{currentLang.name}</span> */}
    </button>
  );
};

export default LanguageSelector;
