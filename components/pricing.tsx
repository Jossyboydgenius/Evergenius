"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Basic",
      price: "$199",
      description: "Perfect for beginners looking to start their crypto journey",
      features: [
        "2-week structured program",
        "Basic market analysis techniques",
        "Introduction to P2P trading",
        "Access to community forum",
        "Email support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: "$349",
      description: "Our most popular plan for serious crypto enthusiasts",
      features: [
        "Everything in Basic",
        "Advanced trading strategies",
        "Portfolio building workshop",
        "Weekly group coaching calls",
        "Priority email support",
        "1 one-on-one session"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Elite",
      price: "$599",
      description: "Comprehensive package for maximum results",
      features: [
        "Everything in Pro",
        "VIP Discord channel access",
        "3 one-on-one mentoring sessions",
        "Custom portfolio review",
        "Web3 job placement assistance",
        "Lifetime updates to course material"
      ],
      popular: false,
      buttonText: "Get Started"
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
    <section id="pricing" className="w-full py-12 md:py-24">
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
              Pricing Plans
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Invest in Your Crypto Future
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that fits your goals and start your journey to crypto success today.
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`border ${plan.popular ? 'border-green-600 shadow-lg' : 'border-border'} h-full`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/ one-time</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'}`}>
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;