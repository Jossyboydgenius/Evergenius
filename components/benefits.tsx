"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const benefits = [
    "How to stay ahead of market trends and capitalize on opportunities",
    "How to turn small capital into daily or weekly profits through P2P trading",
    "How to identify scams and protect your investments",
    "How to build a sustainable crypto portfolio from scratch",
    "How to leverage Web3 jobs & crypto gigs for additional income—without trading"
  ];

  return (
    <section id="benefits" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop"
                alt="Crypto education"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 w-fit">
              Program Benefits
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              This is not just another online course
            </h2>
            <p className="text-muted-foreground md:text-xl">
            It&apos;s a results-driven program where we guide you step by step until you start earning. No Ponzi schemes. No unrealistic promises. Just practical strategies that work.
            </p>
            <ul className="space-y-3 mt-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;