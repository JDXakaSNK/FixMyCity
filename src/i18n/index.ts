import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      reportIssue: 'Report Issue',
      dashboard: 'Dashboard',
      urbanDesign: 'Urban Design',
      searchPlaceholder: 'Search by location or description...',
      allCategories: 'All Categories',
      allTypes: 'All Types',
      moreFilters: 'More Filters',
      selectLocation: 'Select Location',
    },
  },
  it: {
    translation: {
      reportIssue: 'Segnala Problema',
      dashboard: 'Dashboard',
      urbanDesign: 'Design Urbano',
      searchPlaceholder: 'Cerca per posizione o descrizione...',
      allCategories: 'Tutte le Categorie',
      allTypes: 'Tutti i Tipi',
      moreFilters: 'Altri Filtri',
      selectLocation: 'Seleziona Posizione',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;