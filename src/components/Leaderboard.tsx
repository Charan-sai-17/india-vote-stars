
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy } from "lucide-react";
import { Celebrity } from "@/types";
import { getTopVotedCelebrities } from "@/data/celebrities";

interface LeaderboardProps {
  celebrities: Celebrity[];
  limit?: number;
}

const Leaderboard = ({ celebrities, limit = 5 }: LeaderboardProps) => {
  const [topCelebrities, setTopCelebrities] = useState<Celebrity[]>([]);
  const [hasAnimated, setHasAnimated] = useState<boolean[]>([]);

  useEffect(() => {
    const sortedCelebrities = getTopVotedCelebrities(limit);
    setTopCelebrities(sortedCelebrities);
    setHasAnimated(new Array(sortedCelebrities.length).fill(false));
  }, [celebrities, limit]);

  const trophyColors = ["text-yellow-500", "text-gray-400", "text-amber-700"];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-india-blue">
        Leaderboard
      </h2>
      
      <div className="space-y-4">
        {topCelebrities.map((celebrity, index) => (
          <div 
            key={celebrity.id}
            className={`flex items-center p-3 rounded-lg ${
              index === 0 
                ? "bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200" 
                : "bg-white border border-gray-100 hover:bg-gray-50"
            } transition-all`}
          >
            <div className="flex items-center justify-center w-8 h-8 mr-4">
              {index < 3 ? (
                <Trophy className={`w-6 h-6 ${trophyColors[index]}`} />
              ) : (
                <span className="text-lg font-bold text-gray-500">{index + 1}</span>
              )}
            </div>
            
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={celebrity.image} alt={celebrity.name} />
              <AvatarFallback>{celebrity.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h3 className="font-semibold">{celebrity.name}</h3>
              <p className="text-sm text-muted-foreground">{celebrity.category}</p>
            </div>
            
            <div 
              className={`flex items-center bg-india-saffron/10 text-india-saffron px-3 py-1 rounded-full font-semibold ${
                !hasAnimated[index] ? "animate-vote-count" : ""
              }`}
              onAnimationEnd={() => {
                const newAnimated = [...hasAnimated];
                newAnimated[index] = true;
                setHasAnimated(newAnimated);
              }}
            >
              {celebrity.votes.toLocaleString()} votes
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
