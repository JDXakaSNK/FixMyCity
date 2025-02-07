import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationMapProps {
  onLocationSelect?: (words: string) => void;
}

export function LocationMap({ onLocationSelect }: LocationMapProps) {
  const handleMapClick = () => {
    // Simulate location selection with a placeholder value
    onLocationSelect?.('example.location.words');
  };

  return (
    <div 
      onClick={handleMapClick}
      className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
    >
      <div className="text-center text-gray-500">
        <MapPin size={48} className="mx-auto mb-4" />
        <p className="text-lg font-medium">Click to select location</p>
        <p className="text-sm">Map integration coming soon</p>
      </div>
    </div>
  );
}

