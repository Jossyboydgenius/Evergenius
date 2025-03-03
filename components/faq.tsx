"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "How long will it take to see results?",
      answer: "Most of our students start seeing results within the first 2 weeks of implementing our strategies. However, individual results may vary depending on your commitment, starting capital, and market conditions."
    },
    {
      question: "Do I need prior crypto knowledge to join?",
      answer: "No, our program is designed for both beginners and experienced traders. We start with the fundamentals and progressively move to more advanced concepts, ensuring everyone can follow along regardless of their starting point."
    },
    {
      question: "How much capital do I need to start?",
      answer: "You can start with as little as $100, though we recommend $500-$1000 for optimal results. Our strategies are designed to work with small capital and help you grow it over time."
    },
    {
      question: "Is this a get-rich-quick scheme?",
      answer: "Absolutely not. We focus on teaching sustainable, legitimate strategies that require effort and discipline. While we help you accelerate your learning curve, success in crypto still requires work and consistent application of proper techniques."
    },
    {
      question: "What support will I receive?",
      answer: "Depending on your plan, you'll have access to our community forum, email support, group coaching calls, and one-on-one sessions. We're committed to your success and provide multiple channels to ensure you get the guidance you need."
    },
    {
      question: "Can I access the course material forever?",
      answer: "Yes, once you purchase the program, you'll have lifetime access to the course materials. Additionally, our Elite plan includes lifetime updates as we continue to refine and expand our curriculum."
    }
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-green-50">
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
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our program and crypto trading.
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;