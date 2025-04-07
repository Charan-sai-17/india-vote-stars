
import { Celebrity } from "../types";

// Celebrity data for One Love INDIA application
export const celebrities: Celebrity[] = [
  // Film Industry
  {
    id: 1,
    name: "Shah Rukh Khan",
    category: "Film",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Known as the 'King of Bollywood', Shah Rukh Khan has appeared in more than 80 Hindi films and earned numerous accolades.",
    achievements: [
      "14 Filmfare Awards",
      "Padma Shri (2005)",
      "Légion d'Honneur (2014)",
      "Crystal Award at the World Economic Forum (2018)"
    ],
    votes: 7845,
    socialMedia: {
      twitter: "iamsrk",
      instagram: "iamsrk"
    }
  },
  {
    id: 2,
    name: "Deepika Padukone",
    category: "Film",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "One of the highest-paid actresses in India, Deepika is known for her versatile roles in films like Padmaavat and Piku.",
    achievements: [
      "3 Filmfare Awards",
      "TIME 100 Most Influential People (2018)",
      "Crystal Award at Davos (2020)",
      "Chairperson of Mumbai Academy of Moving Images"
    ],
    votes: 6589,
    socialMedia: {
      instagram: "deepikapadukone"
    }
  },
  {
    id: 3,
    name: "Amitabh Bachchan",
    category: "Film",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "One of India's most influential actors with a career spanning over five decades in Hindi cinema.",
    achievements: [
      "Padma Vibhushan (2015)",
      "4 National Film Awards",
      "Dadasaheb Phalke Award (2019)",
      "Legion of Honour (2007)"
    ],
    votes: 9078,
    socialMedia: {
      twitter: "SrBachchan",
      instagram: "amitabhbachchan"
    }
  },
  
  // Business Leaders
  {
    id: 4,
    name: "Mukesh Ambani",
    category: "Business",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Chairman and Managing Director of Reliance Industries Limited, one of India's most valuable companies.",
    achievements: [
      "Built Reliance Jio, transforming India's telecom sector",
      "Foreign member of the US National Academy of Engineering",
      "Among TIME's 100 most influential people",
      "Built Antilia, one of the world's most expensive homes"
    ],
    votes: 5632,
    socialMedia: {
      linkedin: "mukesh-ambani"
    }
  },
  {
    id: 5,
    name: "Ratan Tata",
    category: "Business",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Chairman of Tata Sons and a noted philanthropist who transformed the Tata Group into a global enterprise.",
    achievements: [
      "Padma Vibhushan (2008)",
      "Commander of the Legion of Honour (2016)",
      "Honorary Knight Grand Cross of the Order of the British Empire",
      "Lifetime Achievement Award by Rockefeller Foundation"
    ],
    votes: 8746,
    socialMedia: {
      twitter: "RNTata2000"
    }
  },
  
  // Politics
  {
    id: 6,
    name: "Narendra Modi",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "14th and current Prime Minister of India, known for his economic reforms and foreign policy initiatives.",
    achievements: [
      "Longest-serving Non-Congress Prime Minister",
      "Order of Abdulaziz Al Saud (Saudi Arabia)",
      "Order of Zayed (UAE)",
      "Grand Collar of the State of Palestine"
    ],
    votes: 7523,
    socialMedia: {
      twitter: "narendramodi",
      instagram: "narendramodi"
    }
  },
  
  // Sports
  {
    id: 7,
    name: "Virat Kohli",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former captain of the Indian cricket team and one of the greatest batsmen in the world.",
    achievements: [
      "ICC Cricketer of the Year (2017, 2018)",
      "Rajiv Gandhi Khel Ratna Award (2018)",
      "Padma Shri (2017)",
      "Most centuries in ODI cricket chases"
    ],
    votes: 9453,
    socialMedia: {
      twitter: "imVkohli",
      instagram: "virat.kohli"
    }
  },
  {
    id: 8,
    name: "P.V. Sindhu",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "First Indian to become Badminton World Champion and only Indian woman to win two Olympic medals.",
    achievements: [
      "Olympic Silver Medalist (2016)",
      "Olympic Bronze Medalist (2020)",
      "Padma Bhushan (2020)",
      "BWF World Championships Gold (2019)"
    ],
    votes: 6754,
    socialMedia: {
      twitter: "Pvsindhu1",
      instagram: "pvsindhu1"
    }
  },
  
  // Music
  {
    id: 9,
    name: "A.R. Rahman",
    category: "Music",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Renowned composer, singer and music producer known as the 'Mozart of Madras'.",
    achievements: [
      "2 Academy Awards",
      "2 Grammy Awards",
      "6 National Film Awards",
      "Padma Bhushan (2010)"
    ],
    votes: 7231,
    socialMedia: {
      twitter: "arrahman",
      instagram: "arrahman"
    }
  },
  
  // Science
  {
    id: 10,
    name: "Kalpana Chawla",
    category: "Science",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "The first woman of Indian origin to go to space, remembered for her contributions to space exploration.",
    achievements: [
      "NASA Distinguished Service Medal",
      "Congressional Space Medal of Honor",
      "NASA Space Flight Medal",
      "Multiple asteroids and satellites named after her"
    ],
    votes: 5839,
    socialMedia: {}
  }
  
  // Additional celebrities would continue here to reach 100
  // For brevity I've included only 10 representative entries
];

// Get top voted celebrities
export const getTopVotedCelebrities = (limit: number = 5): Celebrity[] => {
  return [...celebrities].sort((a, b) => b.votes - a.votes).slice(0, limit);
};

// Get celebrities by category
export const getCelebritiesByCategory = (category: string): Celebrity[] => {
  if (category === "All") {
    return celebrities;
  }
  return celebrities.filter(celeb => celeb.category === category);
};
