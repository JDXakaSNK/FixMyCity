export interface Problem {
  id: string;
  title: string;
  description: string;
  location: {
    what3words: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  category: ProblemCategory;
  type: 'issue' | 'improvement';
  imageUrl: string;
  status: ProblemStatus;
  votes: number;
  createdAt: string;
  userId: string;
  comments: Comment[];
  nftProposal?: NFTProposal;
}

export interface NFTProposal {
  id: string;
  imageUrl: string;
  description: string;
  votes: number;
  estimatedCost: number;
  status: 'proposed' | 'approved' | 'implemented';
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  healthCardId: string; // Added for health card verification
}

export interface User {
  id: string;
  healthCardId: string;
  name: string;
  email: string;
  createdAt: string;
}

export type ProblemCategory = 
  | 'infrastructure'
  | 'safety'
  | 'environment'
  | 'transportation'
  | 'art'
  | 'community'
  | 'professional_services' // Added professional services category
  | 'other';

export type ProblemStatus = 
  | 'reported'
  | 'under_review'
  | 'in_progress'
  | 'resolved';