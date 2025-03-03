import { Course } from "@/types/course";

interface CoursesData {
  [key: string]: Course;
}

export const coursesData: CoursesData = {
  "crypto-trading-fundamentals": {
    title: "Crypto Trading Fundamentals",
    description: "Master the basics of cryptocurrency trading with this comprehensive course designed for beginners. Learn market analysis, trading psychology, and risk management.",
    fullDescription: "This comprehensive course is designed to take you from crypto novice to confident trader. You'll learn how to analyze market trends, execute profitable trades, and build a sustainable crypto portfolio that grows over time. Our step-by-step approach ensures you develop the skills and mindset needed for long-term success in the volatile crypto market.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop",
    instructor: {
      name: "Alex Morgan",
      role: "Senior Crypto Analyst",
      avatar: "AM",
      bio: "Alex has been trading cryptocurrencies since 2013 and has helped over 5,000 students achieve financial success through his proven strategies. With a background in finance and computer science, he brings a unique perspective to crypto trading.",
      experience: "10+ years in crypto trading",
      credentials: ["Certified Financial Analyst", "Former Head of Trading at CryptoFirm"]
    },
    price: 149,
    originalPrice: 299,
    duration: "4 weeks",
    level: "Beginner",
    enrolled: 2547,
    lastUpdated: "March 2025",
    language: "English",
    certification: true,
    features: [
      "24/7 access to course materials",
      "15 hours of on-demand video",
      "4 downloadable resources",
      "Access on mobile and TV",
      "Certificate of completion"
    ],
    modules: [
      {
        title: "Introduction to Cryptocurrency",
        lessons: [
          "What is Blockchain Technology?",
          "Understanding Different Types of Cryptocurrencies",
          "Setting Up Your First Crypto Wallet"
        ],
        duration: "3 hours"
      },
      {
        title: "Market Analysis Fundamentals",
        lessons: [
          "Reading Candlestick Charts",
          "Key Technical Indicators for Beginners",
          "Fundamental Analysis in Crypto"
        ],
        duration: "4 hours"
      },
      {
        title: "Trading Psychology",
        lessons: [
          "Managing Emotions While Trading",
          "Setting Realistic Goals",
          "Developing a Trading Mindset"
        ],
        duration: "3 hours"
      },
      {
        title: "Risk Management Strategies",
        lessons: [
          "Position Sizing and Portfolio Allocation",
          "Setting Stop Losses and Take Profits",
          "Managing Risk in Volatile Markets"
        ],
        duration: "5 hours"
      }
    ],
    learningOutcomes: [
      "Understand blockchain technology and how cryptocurrencies work",
      "Set up secure wallets and exchange accounts",
      "Read and interpret price charts and key indicators",
      "Execute trades with confidence using proven strategies",
      "Implement effective risk management techniques",
      "Develop a trading plan tailored to your goals"
    ],
    idealFor: [
      "Complete beginners with no prior crypto knowledge",
      "Traditional investors looking to diversify into crypto",
      "Anyone who has lost money trading and wants a structured approach",
      "People looking to generate a side income through crypto trading",
      "Those interested in understanding the technology behind cryptocurrencies"
    ],
    testimonials: [
      {
        name: "David Chen",
        role: "Software Developer",
        comment: "As someone with zero trading experience, this course was exactly what I needed. The step-by-step approach made complex concepts easy to understand, and I'm now making consistent profits using the strategies taught.",
        rating: 5,
        avatar: "DC"
      },
      {
        name: "Sarah Williams",
        role: "Marketing Executive",
        comment: "I was skeptical at first, but the results speak for themselves. Within just 3 weeks of completing this course, I've already recovered my investment and then some. The risk management section alone was worth the price.",
        rating: 5,
        avatar: "SW"
      },
      {
        name: "Michael Johnson",
        role: "Retail Manager",
        comment: "This course transformed my approach to crypto investing. Instead of randomly buying coins, I now have a systematic strategy that's yielding consistent results. Highly recommended for beginners!",
        rating: 4,
        avatar: "MJ"
      }
    ],
    faqs: [
      {
        question: "Do I need any prior knowledge to take this course?",
        answer: "No, this course is designed for complete beginners. We start with the very basics and gradually build up to more advanced concepts."
      },
      {
        question: "How much money do I need to start trading?",
        answer: "You can start with as little as $100, though we recommend $500-$1000 for optimal results. The course includes strategies specifically designed for small capital."
      },
      {
        question: "Will I get support if I have questions?",
        answer: "Yes, all students get access to our community forum where you can ask questions and get help from both instructors and fellow students."
      },
      {
        question: "How long will I have access to the course materials?",
        answer: "You'll have lifetime access to all course materials, including any future updates we make to the curriculum."
      },
      {
        question: "Is there a money-back guarantee?",
        answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with the course, you can request a full refund within 14 days of purchase."
      }
    ] 
  },
  "advanced-defi-strategies": {
    title: "Advanced DeFi Strategies",
    description: "Dive deep into decentralized finance and learn how to maximize your returns through yield farming, liquidity provision, and strategic token investments.",
    fullDescription: "This advanced course takes you beyond basic crypto trading into the innovative world of decentralized finance (DeFi). Learn how to navigate complex DeFi protocols, optimize yield farming strategies, and build a diversified portfolio of DeFi assets. By the end of this course, you'll have the knowledge to capitalize on the most profitable opportunities in the rapidly evolving DeFi ecosystem.",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1974&auto=format&fit=crop",
    instructor: {
      name: "Elena Zhang",
      role: "DeFi Specialist",
      avatar: "EZ",
      bio: "Elena is a renowned DeFi expert who has been involved in the space since its inception. She previously worked as a smart contract developer and has consulted for several major DeFi protocols. Her strategies have helped students generate substantial passive income through DeFi.",
      experience: "5+ years in DeFi development and investing",
      credentials: ["Smart Contract Security Auditor", "Former DeFi Protocol Designer", "Blockchain Developer"]
    },
    price: 249,
    originalPrice: 499,
    duration: "6 weeks",
    level: "Intermediate",
    enrolled: 1834,
    lastUpdated: "April 2025",
    language: "English",
    certification: true,
    features: [
      "30+ hours of comprehensive video content",
      "Live DeFi protocol demonstrations",
      "6 practical assignments with feedback",
      "Private Discord community access",
      "Quarterly strategy update webinars"
    ],
    modules: [
      {
        title: "DeFi Fundamentals",
        lessons: [
          "Understanding Smart Contracts and DeFi Protocols",
          "Key DeFi Categories: Lending, DEXs, Derivatives",
          "Setting Up Your DeFi Wallet and Security Best Practices"
        ],
        duration: "4 hours"
      },
      {
        title: "Yield Farming Strategies",
        lessons: [
          "Liquidity Mining Fundamentals",
          "Optimizing APY and Impermanent Loss Management",
          "Multi-chain Yield Farming Opportunities"
        ],
        duration: "6 hours"
      },
      {
        title: "Lending and Borrowing Protocols",
        lessons: [
          "Leveraged Yield Strategies",
          "Interest Rate Arbitrage Techniques",
          "Risk Management in DeFi Lending"
        ],
        duration: "5 hours"
      },
      {
        title: "Advanced DeFi Investment Strategies",
        lessons: [
          "Protocol Governance and Token Value Accrual",
          "DeFi Options and Structured Products",
          "Building a Balanced DeFi Portfolio"
        ],
        duration: "8 hours"
      },
      {
        title: "DeFi Risk Management",
        lessons: [
          "Smart Contract Risk Assessment",
          "Insurance Protocols and Coverage",
          "Managing Market Volatility in DeFi"
        ],
        duration: "7 hours"
      }
    ],
    learningOutcomes: [
      "Navigate complex DeFi protocols with confidence",
      "Implement advanced yield farming strategies across multiple chains",
      "Evaluate protocol risks and implement security best practices",
      "Optimize capital efficiency through strategic borrowing and lending",
      "Participate in governance and earn additional token rewards",
      "Build a diversified DeFi portfolio with sustainable returns"
    ],
    idealFor: [
      "Experienced crypto investors looking to expand into DeFi",
      "Traditional finance professionals transitioning to crypto",
      "Active traders seeking passive income opportunities",
      "Those interested in the cutting edge of financial innovation",
      "Crypto enthusiasts who want to maximize their portfolio returns"
    ],
    testimonials: [
      {
        name: "James Wilson",
        role: "Investment Analyst",
        comment: "This course completely transformed my approach to crypto investing. Elena's strategies for optimizing yield farming have helped me achieve consistent 15-20% monthly returns, even in bear markets.",
        rating: 5,
        avatar: "JW"
      },
      {
        name: "Priya Sharma",
        role: "Software Engineer",
        comment: "The technical depth of this course is impressive. As a developer, I appreciated the detailed explanations of how DeFi protocols work under the hood, which has helped me make much more informed investment decisions.",
        rating: 5,
        avatar: "PS"
      },
      {
        name: "Robert Kim",
        role: "Financial Advisor",
        comment: "Coming from traditional finance, I was skeptical about DeFi, but this course provided the perfect bridge. The risk management section was particularly valuable, helping me navigate the space safely.",
        rating: 4,
        avatar: "RK"
      }
    ],
    faqs: [
      {
        question: "Do I need prior DeFi experience for this course?",
        answer: "Some basic knowledge of cryptocurrency and blockchain is recommended. While we cover fundamentals, this is an intermediate-level course designed for those who already understand the basics of crypto."
      },
      {
        question: "How much capital should I have to implement these strategies?",
        answer: "We recommend at least $5,000 to effectively implement the full range of strategies covered, though many concepts can be applied with smaller amounts. The course includes sections on optimizing strategies for different capital levels."
      },
      {
        question: "Are the strategies in this course still relevant with DeFi's rapid changes?",
        answer: "Yes! We regularly update the course content, and all students receive quarterly strategy update webinars to keep pace with the evolving DeFi landscape."
      },
      {
        question: "Will this course teach me how to code smart contracts?",
        answer: "This course focuses on investment strategies rather than development. While we explain how protocols work technically, we don't teach smart contract programming."
      },
      {
        question: "How do you address the risks involved in DeFi?",
        answer: "Risk management is a core component of this course. We dedicate an entire module to identifying, assessing, and mitigating various risks in DeFi, including smart contract, liquidation, and market risks."
      }
    ]
  },
  "nft-creation-marketing": {
    title: "NFT Creation & Marketing",
    description: "Learn how to create, mint, and successfully market your own NFT collections. This course covers everything from digital art creation to building a community.",
    fullDescription: "Turn your creative ideas into profitable NFT collections with our comprehensive course. You'll learn the entire process from digital art creation to successful NFT launches and marketing campaigns. Whether you're an artist looking to enter the NFT space or an entrepreneur seeking new opportunities, this course provides the technical skills and marketing strategies needed to stand out in the competitive NFT marketplace.",
    image: "https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Marcus Johnson",
      role: "NFT Artist & Entrepreneur",
      avatar: "MJ",
      bio: "Marcus is a pioneering digital artist who has successfully launched multiple NFT collections, with his work featured in major NFT marketplaces and digital art exhibitions. He combines artistic talent with marketing expertise to help creators monetize their work in the Web3 space.",
      experience: "4+ years in NFT creation and marketing",
      credentials: ["Featured Artist on OpenSea", "Sold 1000+ NFTs", "Digital Art Director"]
    },
    price: 199,
    originalPrice: 399,
    duration: "5 weeks",
    level: "All Levels",
    enrolled: 2156,
    lastUpdated: "February 2025",
    language: "English",
    certification: true,
    features: [
      "25+ hours of video tutorials",
      "Digital art creation templates",
      "NFT metadata generation tools",
      "Marketing campaign templates",
      "Community building strategies"
    ],
    modules: [
      {
        title: "NFT Fundamentals",
        lessons: [
          "Understanding NFT Technology and Standards",
          "NFT Marketplaces Overview",
          "Planning Your NFT Collection Strategy"
        ],
        duration: "3 hours"
      },
      {
        title: "Digital Art Creation for NFTs",
        lessons: [
          "Digital Art Tools and Techniques",
          "Creating Generative Art Collections",
          "Optimizing Art for NFT Marketplaces"
        ],
        duration: "6 hours"
      },
      {
        title: "NFT Minting and Smart Contracts",
        lessons: [
          "Setting Up Your NFT Smart Contract",
          "Metadata Standards and Best Practices",
          "Minting Process and Gas Optimization"
        ],
        duration: "5 hours"
      },
      {
        title: "NFT Marketing Strategies",
        lessons: [
          "Building Your NFT Brand",
          "Social Media Marketing for NFTs",
          "Collaborations and Partnerships"
        ],
        duration: "6 hours"
      },
      {
        title: "Community Building and Project Longevity",
        lessons: [
          "Discord and Twitter Community Management",
          "Creating Utility and Long-term Value",
          "Roadmap Development and Execution"
        ],
        duration: "5 hours"
      }
    ],
    learningOutcomes: [
      "Create professional-quality digital art for NFT collections",
      "Set up and deploy NFT smart contracts on multiple blockchains",
      "Develop effective marketing strategies for NFT launches",
      "Build and manage engaged communities around your projects",
      "Implement rarity traits and metadata for collection value",
      "Create sustainable revenue models for ongoing NFT projects"
    ],
    idealFor: [
      "Digital artists looking to monetize their work through NFTs",
      "Entrepreneurs interested in launching NFT projects",
      "Marketing professionals expanding into Web3",
      "Creators seeking new revenue streams",
      "Collectors wanting to understand NFT creation"
    ],
    testimonials: [
      {
        name: "Olivia Parker",
        role: "Digital Artist",
        comment: "This course gave me the confidence to launch my first NFT collection, which sold out in 48 hours! Marcus breaks down complex concepts into actionable steps that anyone can follow.",
        rating: 5,
        avatar: "OP"
      },
      {
        name: "Thomas Wright",
        role: "Entrepreneur",
        comment: "The marketing strategies in this course are gold. I applied them to my existing NFT project and saw engagement increase by 300%. The community building section alone was worth the investment.",
        rating: 5,
        avatar: "TW"
      },
      {
        name: "Aisha Johnson",
        role: "Graphic Designer",
        comment: "As someone with design skills but no blockchain experience, this course was the perfect bridge. Now I'm helping clients launch successful NFT projects and have created a valuable new service offering.",
        rating: 4,
        avatar: "AJ"
      }
    ],
    faqs: [
      {
        question: "Do I need to be an artist to benefit from this course?",
        answer: "No, while we cover digital art creation, the course is designed for both artists and entrepreneurs. We provide templates and tools that make the creative process accessible to everyone."
      },
      {
        question: "What software will I need for this course?",
        answer: "We primarily use Adobe Photoshop and Illustrator for design tutorials, but also cover free alternatives like GIMP and Inkscape. For generative art, we use JavaScript and Python with beginner-friendly explanations."
      },
      {
        question: "Will this course teach me how to create an entire NFT collection?",
        answer: "Yes! We cover the entire process from concept to launch, including creating art, generating metadata, deploying smart contracts, and marketing your collection."
      },
      {
        question: "How much does it cost to launch an NFT collection?",
        answer: "We discuss various blockchains and their associated costs. While Ethereum can be expensive (potentially $1,000+ for a collection), we also cover more affordable alternatives like Polygon and Solana that can cost under $100 to launch."
      },
      {
        question: "Is the NFT market still viable for new creators?",
        answer: "Absolutely. While the market has matured, there are more opportunities than ever for creators with strategic approaches. This course focuses on building sustainable NFT projects with real utility and community value, which continue to thrive regardless of market conditions."
      }
    ]
  }
};