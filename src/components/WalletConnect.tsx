import React from 'react';
import { Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WalletConnect() {
  const { t } = useTranslation();

  const handleConnect = () => {
    // TODO: Implement urban design submission
    console.log('Opening urban design submission...');
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors"
    >
      <Palette size={20} />
      <span>{t('urbanDesign')}</span>
    </button>
  );
}