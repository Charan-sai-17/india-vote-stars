
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-india-saffron to-india-green py-20 md:py-32">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            One <span className="text-india-gold">Love</span> INDIA
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Celebrating the most influential personalities of our nation. Vote for your favorite icon who inspires India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-india-saffron hover:bg-india-gold hover:text-white"
              onClick={() => {
                const celebSection = document.getElementById('celebrities');
                celebSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Celebrities
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-india-green"
              onClick={() => {
                const leaderboardSection = document.getElementById('leaderboard');
                leaderboardSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Leaderboard
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-white transform skewY(-2deg)"></div>
    </div>
  );
};

export default Hero;
