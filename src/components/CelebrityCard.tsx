
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Celebrity } from "@/types";
import { 
  Trophy, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin,
  MapPin,
  Check
} from "lucide-react";

interface CelebrityCardProps {
  celebrity: Celebrity;
  onVoteClick: (celebrity: Celebrity) => void;
  hasUserVoted?: boolean;
}

const CelebrityCard = ({ celebrity, onVoteClick, hasUserVoted = false }: CelebrityCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`card-hover overflow-hidden h-full flex flex-col ${hasUserVoted ? 'ring-2 ring-india-green' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full pb-[100%]">
        <img 
          src={celebrity.image} 
          alt={celebrity.name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <Badge 
          className="absolute top-3 right-3 bg-india-saffron text-white"
        >
          {celebrity.category}
        </Badge>
        
        {hasUserVoted && (
          <Badge 
            className="absolute top-3 left-3 bg-india-green text-white flex items-center gap-1"
          >
            <Check size={12} /> Your Vote
          </Badge>
        )}
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold truncate">{celebrity.name}</h3>
          <div className="flex items-center gap-1">
            <Trophy size={16} className="text-india-gold" />
            <span className="font-semibold text-india-saffron">{celebrity.votes.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <MapPin size={14} className="mr-1" />
          <span>{celebrity.state}</span>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 py-2 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">
          {celebrity.description}
        </p>
        
        <div className="mt-3">
          <h4 className="text-sm font-semibold mb-1">Key Achievements:</h4>
          <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
            {celebrity.achievements.slice(0, 2).map((achievement, index) => (
              <li key={index} className="line-clamp-1">{achievement}</li>
            ))}
            {celebrity.achievements.length > 2 && (
              <li className="text-india-saffron">+{celebrity.achievements.length - 2} more</li>
            )}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-2 flex flex-col gap-3">
        <div className="flex justify-center gap-3">
          {celebrity.socialMedia?.twitter && (
            <a href={`https://twitter.com/${celebrity.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
              <Twitter size={18} className="text-gray-600 hover:text-blue-400" />
            </a>
          )}
          {celebrity.socialMedia?.instagram && (
            <a href={`https://instagram.com/${celebrity.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
              <Instagram size={18} className="text-gray-600 hover:text-pink-500" />
            </a>
          )}
          {celebrity.socialMedia?.facebook && (
            <a href={`https://facebook.com/${celebrity.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">
              <Facebook size={18} className="text-gray-600 hover:text-blue-600" />
            </a>
          )}
          {celebrity.socialMedia?.linkedin && (
            <a href={`https://linkedin.com/in/${celebrity.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="text-gray-600 hover:text-blue-700" />
            </a>
          )}
        </div>
        
        <Button 
          className={`w-full ${hasUserVoted 
            ? 'bg-india-green/80 hover:bg-india-green text-white' 
            : 'bg-india-green hover:bg-india-green/80 text-white'}`}
          onClick={() => onVoteClick(celebrity)}
        >
          {hasUserVoted ? 'Update Vote' : 'Vote Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CelebrityCard;
