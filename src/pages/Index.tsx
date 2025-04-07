
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Celebrity } from "@/types";
import { celebrities, getCelebritiesByCategory } from "@/data/celebrities";
import Hero from "@/components/Hero";
import CelebrityCard from "@/components/CelebrityCard";
import CategoryFilter from "@/components/CategoryFilter";
import VotingModal from "@/components/VotingModal";
import Leaderboard from "@/components/Leaderboard";

const Index = () => {
  const [filteredCelebrities, setFilteredCelebrities] = useState<Celebrity[]>(celebrities);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);
  const [isVotingModalOpen, setIsVotingModalOpen] = useState<boolean>(false);
  const [allCelebrities, setAllCelebrities] = useState<Celebrity[]>(celebrities);
  
  useEffect(() => {
    filterCelebrities();
  }, [searchQuery, activeCategory]);
  
  const filterCelebrities = () => {
    let filtered = [...allCelebrities];
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (celeb) => celeb.category === activeCategory
      );
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (celeb) =>
          celeb.name.toLowerCase().includes(query) ||
          celeb.description.toLowerCase().includes(query) ||
          celeb.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredCelebrities(filtered);
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleVoteClick = (celebrity: Celebrity) => {
    setSelectedCelebrity(celebrity);
    setIsVotingModalOpen(true);
  };
  
  const handleVoteSubmit = (updatedCelebrity: Celebrity) => {
    // Update the celebrity votes in state
    const updatedCelebrities = allCelebrities.map((celeb) =>
      celeb.id === updatedCelebrity.id ? updatedCelebrity : celeb
    );
    
    setAllCelebrities(updatedCelebrities);
    setFilteredCelebrities(
      filteredCelebrities.map((celeb) =>
        celeb.id === updatedCelebrity.id ? updatedCelebrity : celeb
      )
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search celebrities by name or category..."
              className="pl-10 py-6 bg-white"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        
        {/* Celebrity Grid */}
        <section id="celebrities" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {activeCategory === "All" ? "All Celebrities" : activeCategory + " Celebrities"}
          </h2>
          
          {filteredCelebrities.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">No celebrities found matching your criteria.</h3>
              <Button 
                className="mt-4 bg-india-saffron hover:bg-india-saffron/80"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="celebrity-grid">
              {filteredCelebrities.map((celebrity) => (
                <CelebrityCard 
                  key={celebrity.id} 
                  celebrity={celebrity} 
                  onVoteClick={handleVoteClick} 
                />
              ))}
            </div>
          )}
        </section>
        
        {/* Leaderboard Section */}
        <section id="leaderboard" className="py-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-8">Top Celebrities</h2>
          <Leaderboard celebrities={allCelebrities} />
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 max-w-lg mx-auto mb-4">
              The leaderboard is updated in real-time based on votes from people across India. 
              Your vote makes a difference!
            </p>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-12 bg-white rounded-xl shadow-sm mt-16 mb-8">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">About One Love INDIA</h2>
            <p className="text-gray-600 mb-4">
              One Love INDIA celebrates the diverse talents and contributions of Indian personalities 
              across various fields. Our platform highlights individuals who have made significant 
              impacts in film, business, politics, sports, science, literature, and social causes.
            </p>
            <p className="text-gray-600 mb-4">
              Through this voting system, we aim to recognize and appreciate the influence these 
              personalities have on our society and culture. Each vote is a testament to their 
              impact on the hearts and minds of people across the nation.
            </p>
            <p className="text-gray-600">
              Join us in honoring these remarkable individuals who continue to inspire and shape 
              the future of our country.
            </p>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="bg-india-blue py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h3 className="text-xl font-bold mb-2">One <span className="text-india-gold">Love</span> INDIA</h3>
            <p className="text-sm opacity-80">Celebrating India's most influential personalities</p>
            <div className="mt-4 text-xs opacity-60">
              © {new Date().getFullYear()} One Love INDIA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      {/* Voting Modal */}
      <VotingModal
        isOpen={isVotingModalOpen}
        celebrity={selectedCelebrity}
        onClose={() => setIsVotingModalOpen(false)}
        onVoteSubmit={handleVoteSubmit}
      />
    </div>
  );
};

export default Index;
