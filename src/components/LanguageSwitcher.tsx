import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`w-8 h-6 rounded shadow-sm transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
      >
        <img
          src="https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?auto=format&fit=crop&q=80&w=32"
          alt="English"
          className="w-full h-full object-cover rounded"
        />
      </button>
      <button
        onClick={() => i18n.changeLanguage('it')}
        className={`w-8 h-6 rounded shadow-sm transition-opacity ${i18n.language === 'it' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
      >
        <img
          src="https://images.unsplash.com/photo-1557072275-2ce9c658d78e?auto=format&fit=crop&q=80&w=32"
          alt="Italiano"
          className="w-full h-full object-cover rounded"
        />
      </button>
    </div>
  );
}