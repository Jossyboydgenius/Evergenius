"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, DollarSign, BarChart2, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-green-600" />,
      title: "Market Trend Analysis",
      description: "Learn how to stay ahead of market trends and capitalize on opportunities before they become mainstream."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-green-600" />,
      title: "P2P Trading Strategies",
      description: "Master the art of turning small capital into daily or weekly profits through peer-to-peer trading techniques."
    },
    {
      icon: <Shield className="h-10 w-10 text-green-600" />,
      title: "Scam Protection",
      description: "Develop the skills to identify scams and protect your investments from common pitfalls in the crypto space."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-600" />,
      title: "Portfolio Building",
      description: "Learn how to build a sustainable crypto portfolio from scratch that grows steadily over time."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-green-600" />,
      title: "Web3 Income Opportunities",
      description: "Discover how to leverage Web3 jobs & crypto gigs for additional income—without trading."
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Community Trading Networks",
      description: "Build valuable connections within the crypto community and learn collaborative strategies for maximizing group profits."
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
    <section id="features" className="w-full py-12 md:py-24 bg-green-50">
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
              What You&apos;ll Learn
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Crypto Education
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our program covers everything you need to know to succeed in the crypto market, from basic concepts to advanced strategies.
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-green-100 hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;