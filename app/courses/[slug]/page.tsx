"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, BookOpen, Award, ArrowLeft, ArrowRight, Star, Calendar, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Mock data for courses
const coursesData = {
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
    fullDescription: "This advanced course takes you beyond basic trading to explore the innovative world of decentralized finance (DeFi). You'll learn how to generate passive income through yield farming, liquidity provision, and other DeFi mechanisms. By the end of this course, you'll have the knowledge to navigate complex DeFi protocols and maximize your returns while managing risks effectively.",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1974&auto=format&fit=crop",
    instructor: {
      name: "Elena Zhang",
      role: "DeFi Specialist",
      avatar: "EZ",
      bio: "Elena is a renowned DeFi expert who has been involved in the space since its inception. She previously worked as a smart contract developer and has contributed to several major DeFi protocols. Her strategies have helped investors achieve exceptional returns in the DeFi ecosystem.",
      experience: "6+ years in DeFi",
      credentials: ["Smart Contract Developer", "DeFi Protocol Contributor"]
    },
    price: 249,
    originalPrice: 499,
    duration: "6 weeks",
    level: "Intermediate to Advanced",
    enrolled: 1823,
    lastUpdated: "April 2025",
    language: "English",
    certification: true,
    features: [
      "24/7 access to course materials",
      "20 hours of on-demand video",
      "8 downloadable resources",
      "Access on mobile and TV",
      "Certificate of completion",
      "2 live Q&A sessions"
    ],
    modules: [
      {
        title: "DeFi Fundamentals",
        lessons: [
          "Understanding Smart Contracts and DeFi Protocols",
          "Key DeFi Categories: Lending, DEXs, Derivatives",
          "Setting Up for DeFi: Wallets and Security"
        ],
        duration: "4 hours"
      },
      {
        title: "Yield Farming Strategies",
        lessons: [
          "Introduction to Yield Farming",
          "Evaluating Farming Opportunities",
          "Advanced Compounding Strategies"
        ],
        duration: "5 hours"
      },
      {
        title: "Liquidity Provision",
        lessons: [
          "Understanding Automated Market Makers",
          "Impermanent Loss Management",
          "Strategic LP Position Management"
        ],
        duration: "4 hours"
      },
      {
        title: "Risk Management in DeFi",
        lessons: [
          "Smart Contract Risk Assessment",
          "Protocol Risk Evaluation",
          "Building a Balanced DeFi Portfolio"
        ],
        duration: "4 hours"
      },
      {
        title: "Advanced DeFi Strategies",
        lessons: [
          "Leveraged Yield Farming",
          "Cross-Chain DeFi Opportunities",
          "DeFi Options and Derivatives"
        ],
        duration: "3 hours"
      }
    ],
    learningOutcomes: [
      "Understand the core mechanisms of DeFi protocols",
      "Implement yield farming strategies across multiple platforms",
      "Evaluate and manage liquidity provision positions",
      "Assess and mitigate risks in DeFi investments",
      "Build a diversified DeFi portfolio for sustainable returns",
      "Stay ahead of trends in the rapidly evolving DeFi landscape"
    ],
    idealFor: [
      "Experienced crypto traders looking to expand into DeFi",
      "Investors seeking passive income opportunities in crypto",
      "Those who want to understand the technical aspects of DeFi protocols",
      "People looking to maximize returns beyond traditional trading",
      "Anyone interested in the future of decentralized financial systems"
    ],
    testimonials: [
      {
        name: "Robert Chen",
        role: "Investment Analyst",
        comment: "This course opened my eyes to the incredible potential of DeFi. Elena's explanations of complex protocols are clear and actionable. I've implemented several strategies from the course and have seen a significant increase in my portfolio's performance.",
        rating: 5,
        avatar: "RC"
      },
      {
        name: "Jennifer Lopez",
        role: "Software Engineer",
        comment: "As someone with a technical background, I appreciated the depth this course goes into regarding smart contracts and protocol mechanics. The risk management section was particularly valuable and has helped me avoid several potential pitfalls.",
        rating: 5,
        avatar: "JL"
      },
      {
        name: "Thomas Wilson",
        role: "Crypto Entrepreneur",
        comment: "Worth every penny! The strategies taught in this course have literally 10x'd my returns compared to simple hodling. Elena's insights into upcoming trends in DeFi have been spot on.",
        rating: 5,
        avatar: "TW"
      }
    ],
    faqs: [
      {
        question: "What level of crypto knowledge do I need for this course?",
        answer: "This is an intermediate to advanced course. You should already understand the basics of cryptocurrency, have experience with wallets, and ideally have done some basic trading."
      },
      {
        question: "How much capital do I need to implement these strategies?",
        answer: "While some DeFi strategies can be implemented with a few hundred dollars, we recommend having at least $2,000-$5,000 to fully benefit from the strategies taught in this course, especially considering gas fees on some networks."
      },
      {
        question: "Are the strategies in this course sustainable long-term?",
        answer: "We focus on sustainable strategies rather than short-term yield chasing. However, DeFi is a rapidly evolving space, so the course includes principles for evaluating new opportunities as they emerge."
      },
      {
        question: "Will this course cover tax implications of DeFi activities?",
        answer: "We provide general guidance on tax considerations for DeFi activities, but we recommend consulting with a tax professional for advice specific to your situation and jurisdiction."
      },
      {
        question: "How often is the course content updated?",
        answer: "The DeFi space evolves rapidly, so we update the course content quarterly to ensure it remains relevant. All updates are included with your one-time purchase."
      }
    ]
  },
  "nft-creation-marketing": {
    title: "NFT Creation & Marketing",
    description: "Learn how to create, mint, and successfully market your own NFT collections. This course covers everything from digital art creation to building a community.",
    fullDescription: "This comprehensive course will guide you through the entire process of creating and launching successful NFT collections. From digital art creation techniques to smart contract deployment and effective marketing strategies, you'll learn everything needed to stand out in the competitive NFT marketplace. Whether you're an artist looking to tokenize your work or an entrepreneur seeking new opportunities, this course provides the technical skills and marketing knowledge to succeed.",
    image: "https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: {
      name: "Marcus Johnson",
      role: "NFT Artist & Entrepreneur",
      avatar: "MJ",
      bio: "Marcus is a successful NFT artist and entrepreneur who has generated over $3 million in NFT sales. With a background in digital art and marketing, he brings practical experience and proven strategies to help students create and sell their own successful NFT collections.",
      experience: "4+ years in NFT creation and marketing",
      credentials: ["Top 100 NFT Artist", "Founder of NFT Launchpad"]
    },
    price: 199,
    originalPrice: 399,
    duration: "5 weeks",
    level: "All Levels",
    enrolled: 1456,
    lastUpdated: "February 2025",
    language: "English",
    certification: true,
    features: [
      "24/7 access to course materials",
      "18 hours of on-demand video",
      "12 downloadable resources",
      "Access on mobile and TV",
      "Certificate of completion",
      "NFT creation templates"
    ],
    modules: [
      {
        title: "NFT Fundamentals",
        lessons: [
          "Understanding NFTs and Blockchain Technology",
          "NFT Standards and Marketplaces",
          "Planning Your NFT Project"
        ],
        duration: "3 hours"
      },
      {
        title: "Digital Art Creation",
        lessons: [
          "Tools and Software for NFT Creation",
          "Designing Collectible Traits and Rarity",
          "Creating Generative Art Collections"
        ],
        duration: "5 hours"
      },
      {
        title: "Technical Implementation",
        lessons: [
          "Minting Your First NFT",
          "Smart Contract Basics for NFTs",
          "Metadata and IPFS Storage"
        ],
        duration: "4 hours"
      },
      {
        title: "Marketing and Community Building",
        lessons: [
          "Building a Pre-Launch Strategy",
          "Effective Social Media for NFT Projects",
          "Community Management and Engagement"
        ],
        duration: "4 hours"
      },
      {
        title: "Launching and Beyond",
        lessons: [
          "Launch Day Strategies",
          "Secondary Market Management",
          "Building Long-Term Value for Your Collection"
        ],
        duration: "2 hours"
      }
    ],
    learningOutcomes: [
      "Create compelling digital art optimized for the NFT market",
      "Understand and implement NFT technical standards",
      "Deploy your own NFT smart contracts",
      "Build and engage a community around your NFT project",
      "Develop effective marketing strategies for your NFT launch",
      "Manage secondary market activity to maintain collection value"
    ],
    idealFor: [
      "Digital artists looking to enter the NFT space",
      "Entrepreneurs seeking opportunities in digital collectibles",
      "Marketers interested in Web3 community building",
      "Creators wanting to tokenize their work",
      "Anyone interested in launching their own NFT collection"
    ],
    testimonials: [
      {
        name: "Sophia Rodriguez",
        role: "Digital Artist",
        comment: "This course transformed my career. I went from struggling to sell my digital art to launching a successful NFT collection that sold out in 48 hours. Marcus breaks down complex concepts into actionable steps that anyone can follow.",
        rating: 5,
        avatar: "SR"
      },
      {
        name: "James Wilson",
        role: "Marketing Consultant",
        comment: "The marketing and community building sections alone are worth the price of admission. I've applied these strategies to help multiple clients launch successful NFT projects. Highly recommended for anyone in the Web3 space.",
        rating: 5,
        avatar: "JW"
      },
      {
        name: "Aisha Patel",
        role: "Graphic Designer",
        comment: "As someone with no blockchain experience, I was worried this would be too technical. But Marcus explains everything clearly and the step-by-step approach made it easy to follow. I've just launched my first collection and already have a growing community!",
        rating: 4,
        avatar: "AP"
      }
    ],
    faqs: [
      {
        question: "Do I need to be an artist to benefit from this course?",
        answer: "No, while we cover digital art creation, the course is designed for both artists and entrepreneurs. We provide resources for those who want to collaborate with artists rather than create the art themselves."
      },
      {
        question: "What software or tools will I need?",
        answer: "We cover both free and paid options. At minimum, you'll need access to some form of digital art creation tool (even free ones work), a crypto wallet, and an internet connection. Recommended tools include Adobe Photoshop or Illustrator, but alternatives are discussed."
      },
      {
        question: "How much does it cost to launch an NFT collection?",
        answer: "Costs vary widely depending on the blockchain you choose and your marketing budget. We cover options ranging from nearly free (on certain blockchains) to more expensive Ethereum launches, allowing you to choose what fits your budget."
      },
      {
        question: "Will this course teach me how to code smart contracts?",
        answer: "We provide an introduction to smart contract concepts and show you how to use existing tools and templates. For those interested in custom development, we point to additional resources but coding experience is not required to complete the course."
      },
      {
        question: "Is the NFT market still viable for newcomers?",
        answer: "Absolutely. While the market has matured, there are still many opportunities for quality projects with good execution. This course focuses on sustainable approaches rather than get-rich-quick schemes."
      }
    ]
  }
};

const CourseDetail = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [course, setCourse] = useState<any>(null);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    if (slug && coursesData[slug]) {
      setCourse(coursesData[slug]);
    }
  }, [slug]);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link href="/#courses">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-12 md:py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <Link href="/#courses" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Link>
              
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">{course.level}</Badge>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-sm text-muted-foreground">({course.enrolled}+ students)</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-lg text-muted-foreground mb-6">{course.fullDescription}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-green-200 text-green-700">{course.instructor.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-muted-foreground">{course.instructor.role}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>{course.enrolled}+ enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
                {course.certification && (
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span>Certificate of completion</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl font-bold">${course.price}</span>
                {course.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${course.originalPrice}</span>
                )}
                {course.originalPrice && (
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-200 ml-2">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                  Buy This Course
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg py-6">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Preview
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <PlayCircle className="h-12 w-12 text-green-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-12">
                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* This Course Is For */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">This Course Is For</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.idealFor.map((ideal, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{ideal}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Course Features */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Course Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* FAQs */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {course.faqs.map((faq, index) => (
                      <Card key={index} className="border-green-100">
                        <CardContent className="pt-6">
                          <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-6">
                  {course.modules.map((module, index) => (
                    <Card key={index} className="border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-bold text-lg">Module {index + 1}: {module.title}</h3>
                          <Badge className="bg-green-100 text-green-700">{module.duration}</Badge>
                        </div>
                        <ul className="space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-start gap-2">
                              <BookOpen className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-100 mt-8">
                  <h3 className="font-bold text-xl mb-4">Ready to Start Learning?</h3>
                  <p className="mb-6">Enroll now to get immediate access to all course materials and start your journey to mastering {course.title}.</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Enroll Now for ${course.price}
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="instructor" className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <Avatar className="h-32 w-32">
                      <AvatarFallback className="bg-green-200 text-green-700 text-4xl">{course.instructor.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-2">{course.instructor.name}</h2>
                    <p className="text-green-600 mb-4">{course.instructor.role}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <Badge className="bg-green-100 text-green-700">{course.instructor.experience}</Badge>
                      {course.instructor.credentials.map((credential, index) => (
                        <Badge key={index} variant="outline" className="border-green-200">{credential}</Badge>
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{course.instructor.bio}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 bg-green-50 p-6 rounded-lg border border-green-100">
                    <div className="text-center mb-4">
                      <p className="text-5xl font-bold text-green-600">5.0</p>
                      <div className="flex justify-center my-2">
                        <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      </div>
                      <p className="text-muted-foreground">Course Rating</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-[95%]"></div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm">5</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-[4%]"></div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm">4</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-[1%]"></div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm">3</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-[0%]"></div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm">2</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-[0%]"></div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm">1</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-6">Student Feedback</h2>
                    <div className="space-y-6">
                      {course.testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-green-100">
                          <CardContent className="pt-6">
                            <div className="flex mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarFallback className="bg-green-200 text-green-700">{testimonial.avatar}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want This Kind of Change in Your Life Too?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join thousands of successful students who have transformed their crypto journey with our expert-led courses.</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8">
              BUY COURSE NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">30-Day Money-Back Guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;