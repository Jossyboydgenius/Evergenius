"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const courses = [
    {
      title: "Crypto Trading Fundamentals",
      description: "Master the basics of cryptocurrency trading with this comprehensive course designed for beginners. Learn market analysis, trading psychology, and risk management.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop",
      instructor: "Alex Morgan",
      instructorRole: "Senior Crypto Analyst",
      instructorAvatar: "AM",
      price: "$149",
      duration: "4 weeks",
      slug: "crypto-trading-fundamentals"
    },
    {
      title: "Advanced DeFi Strategies",
      description: "Dive deep into decentralized finance and learn how to maximize your returns through yield farming, liquidity provision, and strategic token investments.",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1974&auto=format&fit=crop",
      instructor: "Elena Zhang",
      instructorRole: "DeFi Specialist",
      instructorAvatar: "EZ",
      price: "$249",
      duration: "6 weeks",
      slug: "advanced-defi-strategies"
    },
    {
      title: "NFT Creation & Marketing",
      description: "Learn how to create, mint, and successfully market your own NFT collections. This course covers everything from digital art creation to building a community.",
      image: "https://images.unsplash.com/photo-1642525027649-00d7397a6d4a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: "Marcus Johnson",
      instructorRole: "NFT Artist & Entrepreneur",
      instructorAvatar: "MJ",
      price: "$199",
      duration: "5 weeks",
      slug: "nft-creation-marketing"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="courses" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              Our Courses
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Specialized Crypto Education
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our range of specialized courses designed to help you master specific areas of the crypto ecosystem.
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-green-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <CardDescription className="text-base mb-4">{course.description}</CardDescription>
                  <div className="flex items-center gap-2 mt-4">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-green-200 text-green-700 text-xs">{course.instructorAvatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{course.instructor}</p>
                      <p className="text-xs text-muted-foreground">{course.instructorRole}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div>
                    <p className="font-bold text-lg">{course.price}</p>
                    <p className="text-xs text-muted-foreground">{course.duration}</p>
                  </div>
                  <Link href={`/courses/${course.slug}`}>
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-10">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;