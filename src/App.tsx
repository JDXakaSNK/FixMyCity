import React, { useState } from 'react';
import { MapPin, Plus, Filter, Search } from 'lucide-react';
import { ProblemCard } from './components/ProblemCard';
import { LocationMap } from './components/LocationMap';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { DashboardButton } from './components/DashboardButton';
import { WalletConnect } from './components/WalletConnect';
import { Problem, ProblemCategory } from './types';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();
  const [problems] = useState<Problem[]>([
    {
      id: '1',
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic hazards and potential vehicle damage.',
      location: {
        what3words: 'filled.count.soap',
        address: 'Main Street near Central Park',
        coordinates: { lat: 45.4642, lng: 9.1900 }
      },
      category: 'infrastructure',
      type: 'issue',
      imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80',
      status: 'reported',
      votes: 15,
      createdAt: new Date().toISOString(),
      userId: 'user1',
      comments: []
    },
    {
      id: '2',
      title: 'Urban Garden Installation',
      description: 'Proposal for a vertical garden installation to improve air quality and aesthetics.',
      location: {
        what3words: 'index.home.raft',
        address: 'City Square',
        coordinates: { lat: 45.4642, lng: 9.1900 }
      },
      category: 'environment',
      type: 'improvement',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
      status: 'under_review',
      votes: 45,
      createdAt: new Date().toISOString(),
      userId: 'user2',
      comments: [],
      nftProposal: {
        id: 'nft1',
        imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80',
        description: 'Digital art representation of the proposed garden',
        votes: 23,
        estimatedCost: 5000,
        status: 'proposed'
      }
    }
  ]);

  const handleVote = (id: string) => {
    // Implement voting logic
  };

  const handleLocationSelect = (words: string) => {
    console.log('Selected location:', words);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">FixMyCity</h1>
              <div className="ml-8">
                <LanguageSwitcher />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <DashboardButton />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                <Plus size={20} />
                {t('reportIssue')}
              </button>
              <WalletConnect />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Map Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{t('selectLocation')}</h2>
          <LocationMap onLocationSelect={handleLocationSelect} />
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex-1 min-w-[300px] max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
              <option value="">{t('allCategories')}</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="safety">Safety</option>
              <option value="environment">Environment</option>
              <option value="professional_services">Professional Services</option>
              <option value="art">Art & Culture</option>
            </select>
            
            <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
              <option value="">{t('allTypes')}</option>
              <option value="issue">Issues</option>
              <option value="improvement">Improvements</option>
            </select>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
              <Filter size={20} />
              {t('moreFilters')}
            </button>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(problem => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              onVote={handleVote}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;