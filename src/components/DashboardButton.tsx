import React from 'react';
import { BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DashboardButton() {
  const { t } = useTranslation();

  return (
    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors">
      <BarChart3 size={20} />
      <span>{t('dashboard')}</span>
    </button>
  );
}