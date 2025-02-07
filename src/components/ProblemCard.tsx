import React from 'react';
import { ThumbsUp, MapPin, Clock, MessageCircle, Palette, AlertTriangle } from 'lucide-react';
import { Problem } from '../types';

interface ProblemCardProps {
  problem: Problem;
  onVote: (id: string) => void;
}

export function ProblemCard({ problem, onVote }: ProblemCardProps) {
  const statusColors = {
    reported: 'bg-red-100 text-red-800',
    under_review: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={problem.imageUrl} 
          alt={problem.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[problem.status]}`}>
            {problem.status.replace('_', ' ')}
          </span>
          {problem.type === 'improvement' && (
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Improvement
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin size={16} />
          <span>{problem.location.address}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {problem.location.what3words}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{problem.description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onVote(problem.id)}
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ThumbsUp size={18} />
              <span>{problem.votes}</span>
            </button>
            
            <div className="flex items-center gap-1 text-gray-600">
              <MessageCircle size={18} />
              <span>{problem.comments.length}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {problem.type === 'issue' ? (
              <AlertTriangle size={18} className="text-red-500" />
            ) : (
              <Palette size={18} className="text-purple-500" />
            )}
            <span className="text-gray-500">
              <Clock size={16} className="inline mr-1" />
              {new Date(problem.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {problem.nftProposal && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-purple-600">NFT Proposal</span>
              <span className="text-sm text-gray-500">
                Est. Cost: €{problem.nftProposal.estimatedCost}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}