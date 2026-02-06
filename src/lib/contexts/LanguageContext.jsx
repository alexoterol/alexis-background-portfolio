import React, { createContext, useState, useContext, useEffect } from 'react';
import es from '../locales/es.json';
import en from '../locales/en.json';

const LanguageContext = createContext();

const translations = {
  es,
  en
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Obtener idioma del localStorage
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setLanguage(savedLocale);
    } else {
      // Detectar idioma del navegador
      const userLocale = navigator.language?.substring(0, 2);
      const detectedLang = (userLocale === 'en' || userLocale === 'es') ? userLocale : 'en';
      setLanguage(detectedLang);
    }
  }, []);

  useEffect(() => {
    // Guardar idioma en localStorage cuando cambie
    localStorage.setItem('locale', language);
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
