"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Beginner Investor",
      avatar: "SJ",
      content: "Before joining EverGenius, I was completely lost in the crypto world. Now I'm confidently making trades and seeing consistent returns. The step-by-step guidance was exactly what I needed!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      avatar: "MC",
      content: "The P2P trading strategies alone were worth the investment. I've been able to generate a reliable side income that's growing each month. The instructors are knowledgeable and supportive.",
      rating: 5
    },
    {
      name: "Olivia Rodriguez",
      role: "Full-time Trader",
      avatar: "OR",
      content: "I've taken several crypto courses, but EverGenius stands out for its practical approach. No fluff, just actionable strategies that work in the real world. Highly recommended!",
      rating: 5
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
    <section id="testimonials" className="w-full py-12 md:py-24 bg-green-50">
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
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Students Say
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join hundreds of successful students who have transformed their crypto journey with our program.
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-green-100 hover:shadow-md transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-green-200 text-green-700">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;