
import { Celebrity } from "../types";

// Celebrity data for One Love INDIA application
export const celebrities: Celebrity[] = [
  // Maharashtra
  {
    id: 1,
    name: "Amitabh Bachchan",
    category: "Film",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
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
  
  // Delhi
  {
    id: 2,
    name: "Shah Rukh Khan",
    category: "Film",
    state: "Delhi",
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
  
  // Karnataka
  {
    id: 3,
    name: "Kiran Mazumdar-Shaw",
    category: "Business",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Founder and Executive Chairperson of Biocon Limited, pioneering biotechnology innovation in India.",
    achievements: [
      "Padma Shri and Padma Bhushan recipient",
      "EY World Entrepreneur of the Year",
      "Among Forbes' 100 Most Powerful Women",
      "Global recognition for affordable insulin development"
    ],
    votes: 5478,
    socialMedia: {
      twitter: "kiranshaw"
    }
  },
  
  // Tamil Nadu
  {
    id: 4,
    name: "A.R. Rahman",
    category: "Music",
    state: "Tamil Nadu",
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
  
  // Gujarat
  {
    id: 5,
    name: "Narendra Modi",
    category: "Politics",
    state: "Gujarat",
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
  
  // Haryana
  {
    id: 6,
    name: "Neeraj Chopra",
    category: "Sports",
    state: "Haryana",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Javelin thrower who won India's first Olympic gold medal in athletics, ending a 100-year wait for a track and field medal.",
    achievements: [
      "Olympic Gold Medalist (2020 Tokyo)",
      "Asian Games Gold Medalist",
      "Commonwealth Games Gold Medalist",
      "Major Dhyan Chand Khel Ratna Award"
    ],
    votes: 8567,
    socialMedia: {
      twitter: "Neeraj_chopra1",
      instagram: "neeraj____chopra"
    }
  },
  
  // West Bengal
  {
    id: 7,
    name: "Mamata Banerjee",
    category: "Politics",
    state: "West Bengal",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "First woman Chief Minister of West Bengal and founder of the All India Trinamool Congress.",
    achievements: [
      "Multiple terms as Chief Minister",
      "Seven terms as Member of Parliament",
      "Author of several books",
      "Listed among 100 most influential people by TIME"
    ],
    votes: 5876,
    socialMedia: {
      twitter: "MamataOfficial"
    }
  },
  
  // Punjab
  {
    id: 8,
    name: "Milkha Singh",
    category: "Sports",
    state: "Punjab",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "The 'Flying Sikh', who was the first Indian male athlete to reach an Olympic final.",
    achievements: [
      "Gold medals at Commonwealth Games",
      "Gold medals at Asian Games",
      "Padma Shri recipient",
      "Represented India in three Olympic Games"
    ],
    votes: 6789,
    socialMedia: {}
  },
  
  // Uttar Pradesh
  {
    id: 9,
    name: "Akhilesh Yadav",
    category: "Politics",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Chief Minister of Uttar Pradesh and President of the Samajwadi Party.",
    achievements: [
      "Youngest Chief Minister of UP",
      "Implemented numerous infrastructure projects",
      "M.C.E. degree from University of Sydney",
      "Member of Parliament multiple times"
    ],
    votes: 5432,
    socialMedia: {
      twitter: "yadavakhilesh"
    }
  },
  
  // Andhra Pradesh
  {
    id: 10,
    name: "P.V. Sindhu",
    category: "Sports",
    state: "Andhra Pradesh",
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
  
  // Kerala
  {
    id: 11,
    name: "Mohanlal",
    category: "Film",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "One of the most celebrated actors in Malayalam cinema with a career spanning over four decades.",
    achievements: [
      "5 National Film Awards",
      "Padma Shri and Padma Bhushan recipient",
      "Lieutenant Colonel in Territorial Army",
      "Over 340 films in multiple languages"
    ],
    votes: 7123,
    socialMedia: {
      twitter: "Mohanlal",
      instagram: "mohanlal"
    }
  },
  
  // Rajasthan
  {
    id: 12,
    name: "Diya Kumari",
    category: "Politics",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Member of the royal family of Jaipur and a prominent politician serving as Member of Parliament.",
    achievements: [
      "Member of Parliament from Rajsamand",
      "Former MLA from Sawai Madhopur",
      "Prominent advocate for women's rights",
      "Established Princess Diya Kumari Foundation"
    ],
    votes: 5123,
    socialMedia: {
      twitter: "KumariDiya"
    }
  },
  
  // Odisha
  {
    id: 13,
    name: "Dutee Chand",
    category: "Sports",
    state: "Odisha",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "India's first openly gay athlete and national record holder in women's 100m sprint.",
    achievements: [
      "Two silver medals at Asian Games",
      "First Indian to win a gold medal at World University Games",
      "National record holder in 100m sprint",
      "Arjuna Award recipient"
    ],
    votes: 5678,
    socialMedia: {
      twitter: "DuteeChand",
      instagram: "duteechand"
    }
  },
  
  // Bihar
  {
    id: 14,
    name: "Sushil Kumar Modi",
    category: "Politics",
    state: "Bihar",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Deputy Chief Minister of Bihar and a senior BJP leader.",
    achievements: [
      "Member of Rajya Sabha",
      "Former Deputy Chief Minister of Bihar",
      "Chairman of Empowered Committee of State Finance Ministers",
      "Key architect of GST implementation"
    ],
    votes: 4987,
    socialMedia: {
      twitter: "SushilModi"
    }
  },
  
  // Jharkhand
  {
    id: 15,
    name: "MS Dhoni",
    category: "Sports",
    state: "Jharkhand",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former captain of the Indian cricket team who led India to win the ICC World Cup, ICC Champions Trophy, and ICC World Twenty20.",
    achievements: [
      "Captain of ICC World Cup winning team (2011)",
      "Padma Bhushan recipient",
      "Honorary Lieutenant Colonel in the Territorial Army",
      "First captain to win all ICC trophies"
    ],
    votes: 9876,
    socialMedia: {
      instagram: "mahi7781"
    }
  },
  
  // Assam
  {
    id: 16,
    name: "Bhupen Hazarika",
    category: "Music",
    state: "Assam",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Legendary singer, musician, and filmmaker known as the 'Bard of the Brahmaputra'.",
    achievements: [
      "Bharat Ratna (posthumous)",
      "Dadasaheb Phalke Award",
      "Padma Vibhushan",
      "National Film Award for Best Music Direction"
    ],
    votes: 6543,
    socialMedia: {}
  },
  
  // Madhya Pradesh
  {
    id: 17,
    name: "Shankar Mahadevan",
    category: "Music",
    state: "Madhya Pradesh",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Award-winning composer and playback singer who is part of the Shankar–Ehsaan–Loy composing trio.",
    achievements: [
      "National Film Award for Best Male Playback Singer",
      "Padma Shri recipient",
      "Multiple Filmfare Awards",
      "Global Indian Music Academy Awards"
    ],
    votes: 6234,
    socialMedia: {
      twitter: "Shankar_Live",
      instagram: "shankar.mahadevan"
    }
  },
  
  // Chhattisgarh
  {
    id: 18,
    name: "Anuj Sharma",
    category: "Film",
    state: "Chhattisgarh",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Prominent actor and politician from Chhattisgarh who has contributed significantly to regional cinema.",
    achievements: [
      "Several hit films in Chhattisgarhi cinema",
      "Promoted regional language and culture",
      "Active in social welfare activities",
      "Political leadership in the state"
    ],
    votes: 4567,
    socialMedia: {}
  },
  
  // Uttarakhand
  {
    id: 19,
    name: "Ruskin Bond",
    category: "Literature",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Beloved author of British descent who writes about life in the Himalayan foothills and has enchanted generations of readers.",
    achievements: [
      "Padma Shri (1999)",
      "Padma Bhushan (2014)",
      "Sahitya Akademi Award",
      "Over 500 short stories, essays and novels"
    ],
    votes: 6543,
    socialMedia: {}
  },
  
  // Telangana
  {
    id: 20,
    name: "P.V. Narasimha Rao",
    category: "Politics",
    state: "Telangana",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Prime Minister of India who implemented significant economic reforms that liberalized the Indian economy.",
    achievements: [
      "9th Prime Minister of India",
      "Economic liberalization policies",
      "Scholar who knew 17 languages",
      "Author of 'The Insider' and other books"
    ],
    votes: 5789,
    socialMedia: {}
  },
  
  // Himachal Pradesh
  {
    id: 21,
    name: "Preity Zinta",
    category: "Film",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Actress and entrepreneur known for her roles in Hindi films and as co-owner of Punjab Kings IPL team.",
    achievements: [
      "Filmfare Award for Best Female Debut",
      "Silver Hugo Award for Best Actress",
      "Godfrey's Mind of Steel Award for bravery",
      "Successful entrepreneur and sports team owner"
    ],
    votes: 6789,
    socialMedia: {
      twitter: "realpreityzinta",
      instagram: "realpz"
    }
  },
  
  // Goa
  {
    id: 22,
    name: "Manohar Parrikar",
    category: "Politics",
    state: "Goa",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Chief Minister of Goa and Defence Minister of India known for his simple lifestyle and administrative skills.",
    achievements: [
      "IIT Mumbai graduate in metallurgical engineering",
      "Four-time Chief Minister of Goa",
      "Former Defence Minister of India",
      "Known for his integrity and simplicity"
    ],
    votes: 5432,
    socialMedia: {}
  },
  
  // Manipur
  {
    id: 23,
    name: "Mary Kom",
    category: "Sports",
    state: "Manipur",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Six-time World Amateur Boxing champion and the only woman boxer to win medals in seven world championships.",
    achievements: [
      "Olympic Bronze Medalist (2012)",
      "Padma Vibhushan",
      "Rajiv Gandhi Khel Ratna Award",
      "Member of Parliament, Rajya Sabha"
    ],
    votes: 7234,
    socialMedia: {
      twitter: "MangteC"
    }
  },
  
  // Tripura
  {
    id: 24,
    name: "Sourabhee Debbarma",
    category: "Music",
    state: "Tripura",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "First female winner of Indian Idol and one of the most prominent musicians from Northeast India.",
    achievements: [
      "Winner of Indian Idol 4",
      "First female winner in the show's history",
      "Successful career in playback singing",
      "Ambassador for Northeast Indian music"
    ],
    votes: 5123,
    socialMedia: {
      instagram: "sourabheedebbarma"
    }
  },
  
  // Arunachal Pradesh
  {
    id: 25,
    name: "Talom Rukbo",
    category: "Social",
    state: "Arunachal Pradesh",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Father of the Donyi-Polo movement who worked for the preservation of indigenous cultural identity in Arunachal Pradesh.",
    achievements: [
      "Founded the Donyi-Polo cultural movement",
      "Preserved indigenous tribal heritage",
      "Advocated for cultural autonomy",
      "Revived traditional practices and values"
    ],
    votes: 4765,
    socialMedia: {}
  },
  
  // Meghalaya
  {
    id: 26,
    name: "PA Sangma",
    category: "Politics",
    state: "Meghalaya",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Speaker of the Lok Sabha and Chief Minister of Meghalaya who was a prominent leader from Northeast India.",
    achievements: [
      "Speaker of the Lok Sabha (1996-1998)",
      "Chief Minister of Meghalaya",
      "Co-founder of Nationalist Congress Party",
      "Nine-time Member of Parliament"
    ],
    votes: 5234,
    socialMedia: {}
  },
  
  // Nagaland
  {
    id: 27,
    name: "Neiphiu Rio",
    category: "Politics",
    state: "Nagaland",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Chief Minister of Nagaland who has played a significant role in the state's development.",
    achievements: [
      "Four-time Chief Minister of Nagaland",
      "Former Member of Parliament (Lok Sabha)",
      "Key role in Naga peace talks",
      "Infrastructure development in the state"
    ],
    votes: 4987,
    socialMedia: {
      twitter: "Neiphiu_Rio"
    }
  },
  
  // Mizoram
  {
    id: 28,
    name: "Lalremsiami",
    category: "Sports",
    state: "Mizoram",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Field hockey player who was part of the Indian women's team that finished fourth at the Tokyo Olympics.",
    achievements: [
      "First female Olympian from Mizoram",
      "Asian Games silver medalist",
      "FIH Rising Star of the Year 2019",
      "Arjuna Award recipient"
    ],
    votes: 5324,
    socialMedia: {
      instagram: "lalremsiami_"
    }
  },
  
  // Sikkim
  {
    id: 29,
    name: "Pawan Chamling",
    category: "Politics",
    state: "Sikkim",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Longest serving Chief Minister in India who transformed Sikkim into an organic farming state.",
    achievements: [
      "Five consecutive terms as Chief Minister",
      "Converted Sikkim into first fully organic state",
      "Sustainable Development Leadership Award",
      "Significantly improved state's HDI ranking"
    ],
    votes: 4876,
    socialMedia: {}
  },
  
  // Jammu & Kashmir
  {
    id: 30,
    name: "Omar Abdullah",
    category: "Politics",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Chief Minister of Jammu and Kashmir and a prominent political leader from the region.",
    achievements: [
      "Chief Minister of Jammu and Kashmir (2009-2015)",
      "Former Union Minister of State",
      "Member of Parliament for multiple terms",
      "Vice President of National Conference party"
    ],
    votes: 5123,
    socialMedia: {
      twitter: "OmarAbdullah"
    }
  },
  
  // Puducherry
  {
    id: 31,
    name: "M. Night Shyamalan",
    category: "Film",
    state: "Puducherry",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Academy Award-nominated filmmaker known for his twist endings and supernatural plots.",
    achievements: [
      "Academy Award nomination for 'The Sixth Sense'",
      "Multiple successful Hollywood films",
      "Youngest filmmaker nominated for Best Director",
      "Distinctive storytelling style"
    ],
    votes: 6234,
    socialMedia: {
      twitter: "MNightShyamalan"
    }
  },
  
  // Chandigarh
  {
    id: 32,
    name: "Kirron Kher",
    category: "Film",
    state: "Chandigarh",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Actress and politician who has represented Chandigarh in the Lok Sabha.",
    achievements: [
      "National Film Award for Best Actress",
      "Member of Parliament from Chandigarh",
      "Notable roles in critically acclaimed films",
      "Television show judge and host"
    ],
    votes: 5678,
    socialMedia: {
      twitter: "KirronKherBJP"
    }
  },
  
  // Ladakh
  {
    id: 33,
    name: "Sonam Wangchuk",
    category: "Science",
    state: "Ladakh",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Engineer, innovator and education reformist who inspired the character of Phunsukh Wangdu in '3 Idiots'.",
    achievements: [
      "Ramon Magsaysay Award",
      "Invention of the Ice Stupa artificial glacier",
      "Founder of Students' Educational and Cultural Movement of Ladakh",
      "Rolex Award for Enterprise"
    ],
    votes: 6543,
    socialMedia: {
      twitter: "Wangchuk66"
    }
  },
  
  // Dadra and Nagar Haveli and Daman and Diu
  {
    id: 34,
    name: "Mohan Delkar",
    category: "Politics",
    state: "Dadra and Nagar Haveli",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Seven-time Member of Parliament who represented Dadra and Nagar Haveli in the Lok Sabha.",
    achievements: [
      "Seven-time Member of Parliament",
      "Tribal rights advocate",
      "Regional development initiatives",
      "Educational institution founder"
    ],
    votes: 4567,
    socialMedia: {}
  },
  
  // Andaman and Nicobar Islands
  {
    id: 35,
    name: "Satyendra Prasanna Sinha",
    category: "Politics",
    state: "Andaman and Nicobar Islands",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "First Indian to be appointed as a member of the Viceroy's Executive Council during British rule.",
    achievements: [
      "First Indian member of Viceroy's Executive Council",
      "Peerage as Baron Sinha of Raipur",
      "First Indian to become a member of British House of Lords",
      "Significant contributor to Indian autonomy movement"
    ],
    votes: 4321,
    socialMedia: {}
  },
  
  // Lakshadweep
  {
    id: 36,
    name: "Mohammed Koya Thangal",
    category: "Politics",
    state: "Lakshadweep",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Former Member of Parliament from Lakshadweep who worked for the development of the islands.",
    achievements: [
      "Multiple terms as Member of Parliament",
      "Notable contributions to Lakshadweep's development",
      "Advocate for island communities",
      "Environmental conservation efforts"
    ],
    votes: 4123,
    socialMedia: {}
  },
  
  // More from larger states
  
  // Maharashtra (Additional)
  {
    id: 37,
    name: "Sachin Tendulkar",
    category: "Sports",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Legendary cricketer known as the 'God of Cricket' and the highest run-scorer in international cricket history.",
    achievements: [
      "First player to score 100 international centuries",
      "Bharat Ratna (2014)",
      "Rajiv Gandhi Khel Ratna Award",
      "First sportsperson to receive Bharat Ratna"
    ],
    votes: 9875,
    socialMedia: {
      twitter: "sachin_rt"
    }
  },
  
  // Karnataka (Additional)
  {
    id: 38,
    name: "Dr. Devi Shetty",
    category: "Science",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Cardiac surgeon and entrepreneur who revolutionized healthcare delivery in India by making it affordable.",
    achievements: [
      "Padma Bhushan",
      "Pioneered micro-health insurance",
      "Built world's largest telemedicine network",
      "Performed over 15,000 heart surgeries"
    ],
    votes: 5678,
    socialMedia: {}
  },
  
  // Tamil Nadu (Additional)
  {
    id: 39,
    name: "Rajinikanth",
    category: "Film",
    state: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Iconic actor known as 'Superstar' with a cult following in Indian cinema, especially in the South.",
    achievements: [
      "Padma Vibhushan",
      "Dadasaheb Phalke Award",
      "Centenary Award for Indian Film Personality of the Year at IFFI",
      "Multiple state film awards"
    ],
    votes: 8765,
    socialMedia: {
      twitter: "rajinikanth"
    }
  },
  
  // Uttar Pradesh (Additional)
  {
    id: 40,
    name: "Amitabh Srivastava",
    category: "Science",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Tech innovator who co-founded Azure, Microsoft's cloud computing platform and infrastructure.",
    achievements: [
      "Co-founder of Microsoft Azure",
      "Key contributor to Windows NT operating system",
      "Distinguished Engineer at Microsoft",
      "Multiple patents in cloud computing technology"
    ],
    votes: 5234,
    socialMedia: {}
  },
  
  // West Bengal (Additional)
  {
    id: 41,
    name: "Amartya Sen",
    category: "Science",
    state: "West Bengal",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Nobel Prize-winning economist known for his work on welfare economics, social choice theory, and economic justice.",
    achievements: [
      "Nobel Memorial Prize in Economic Sciences (1998)",
      "Bharat Ratna",
      "Over 20 honorary doctorates",
      "Master of Trinity College, Cambridge"
    ],
    votes: 6789,
    socialMedia: {}
  },
  
  // Gujarat (Additional)
  {
    id: 42,
    name: "Dhirubhai Ambani",
    category: "Business",
    state: "Gujarat",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Founder of Reliance Industries who revolutionized equity investing in India.",
    achievements: [
      "Built India's largest private sector company",
      "Padma Vibhushan (posthumous)",
      "Democratized stock market investment in India",
      "Named among 'Power 50 - Asia's Most Powerful People'"
    ],
    votes: 7654,
    socialMedia: {}
  },
  
  // Kerala (Additional)
  {
    id: 43,
    name: "KR Narayanan",
    category: "Politics",
    state: "Kerala",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "First Dalit President of India and former diplomat who served as the 10th President of India.",
    achievements: [
      "First Dalit President of India",
      "Vice President of India (1992-1997)",
      "Indian Ambassador to the United States",
      "Distinguished academic and diplomatic career"
    ],
    votes: 5678,
    socialMedia: {}
  },
  
  // Punjab (Additional)
  {
    id: 44,
    name: "Kalpana Chawla",
    category: "Science",
    state: "Punjab",
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
  },
  
  // Rajasthan (Additional)
  {
    id: 45,
    name: "Laxmi Agarwal",
    category: "Social",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Acid attack survivor and campaigner for rights of acid attack victims and women in general.",
    achievements: [
      "International Women of Courage Award",
      "Subject of the film 'Chhapaak'",
      "Stop Sale Acid campaign founder",
      "TED speaker and activist"
    ],
    votes: 5432,
    socialMedia: {
      twitter: "thelaxmiagarwal",
      instagram: "thelaxmiagarwal"
    }
  },
  
  // Madhya Pradesh (Additional)
  {
    id: 46,
    name: "Jyotiraditya Scindia",
    category: "Politics",
    state: "Madhya Pradesh",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Union Minister and former Member of Parliament from Madhya Pradesh known for his administrative skills.",
    achievements: [
      "Union Cabinet Minister",
      "Four-time Member of Parliament",
      "Harvard and Stanford educated",
      "Former president of Madhya Pradesh Cricket Association"
    ],
    votes: 5234,
    socialMedia: {
      twitter: "JM_Scindia"
    }
  },
  
  // Bihar (Additional)
  {
    id: 47,
    name: "Shatrughan Sinha",
    category: "Film",
    state: "Bihar",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Actor-turned-politician known for his distinctive voice and dialogue delivery in Hindi cinema.",
    achievements: [
      "Multiple film awards for acting",
      "Member of Parliament for multiple terms",
      "Union Cabinet Minister",
      "FTII Chairman"
    ],
    votes: 5678,
    socialMedia: {
      twitter: "ShatruganSinha"
    }
  },
  
  // Odisha (Additional)
  {
    id: 48,
    name: "Sudarsan Pattnaik",
    category: "Social",
    state: "Odisha",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Internationally acclaimed sand artist known for his environmental and social awareness messages.",
    achievements: [
      "Padma Shri recipient",
      "Multiple world records",
      "Gold medals in international sand art championships",
      "Founder of Sudarsan Sand Art Institute"
    ],
    votes: 5123,
    socialMedia: {
      twitter: "sudarsansand"
    }
  },
  
  // Andhra Pradesh (Additional)
  {
    id: 49,
    name: "Satya Nadella",
    category: "Business",
    state: "Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "CEO of Microsoft who transformed the company into a cloud-first, mobile-first technology leader.",
    achievements: [
      "Led Microsoft's transformation to cloud computing",
      "Increased Microsoft's market value multiple times",
      "Author of 'Hit Refresh'",
      "Named Financial Times Person of the Year"
    ],
    votes: 7123,
    socialMedia: {
      twitter: "satyanadella"
    }
  },
  
  // Delhi (Additional)
  {
    id: 50,
    name: "Kailash Satyarthi",
    category: "Social",
    state: "Delhi",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    description: "Children's rights activist who has worked against child labor and for the right to education for all children.",
    achievements: [
      "Nobel Peace Prize (2014)",
      "Rescued over 90,000 children from slavery",
      "Founded Bachpan Bachao Andolan",
      "Congressional briefing in the United States"
    ],
    votes: 5678,
    socialMedia: {
      twitter: "k_satyarthi"
    }
  }
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

// Get celebrities by state
export const getCelebritiesByState = (state: string): Celebrity[] => {
  if (state === "All") {
    return celebrities;
  }
  return celebrities.filter(celeb => celeb.state === state);
};

