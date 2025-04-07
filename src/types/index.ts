
export interface Celebrity {
  id: number;
  name: string;
  category: CelebrityCategory;
  state: string; // Added state property
  image: string;
  description: string;
  achievements: string[];
  votes: number;
  socialMedia?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export type CelebrityCategory = 
  | "Film" 
  | "Business" 
  | "Politics" 
  | "Sports" 
  | "Music" 
  | "Science" 
  | "Literature" 
  | "Social";

export interface VoteFormData {
  mobileNumber: string;
  celebrityId: number;
}
