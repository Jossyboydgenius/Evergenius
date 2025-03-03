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
  // Add the other courses here (advanced-defi-strategies and nft-creation-marketing)
  // ...
};