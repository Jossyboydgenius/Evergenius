"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Center</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Find answers to common questions or reach out to our support team for assistance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-green-50 border-green-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
                <p className="text-muted-foreground mb-4">
                  Need personalized help? Our team is ready to assist you.
                </p>
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-muted-foreground mb-4">
                  Get quick answers via WhatsApp messaging.
                </p>
                <Link href="https://api.whatsapp.com/send?phone=2348094703225" target="_blank">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we&apos;ll respond within 24 hours.
                </p>
                <Link href="mailto:support@evergenius.com">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Email Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I access my purchased courses?</AccordionTrigger>
              <AccordionContent>
                After purchasing a course, you can access it by logging into your account and navigating to the &quot;My Courses&quot; section. 
                All your purchased courses will be available there. You can also access them directly from the course page when logged in.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>What is your refund policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day money-back guarantee for most of our courses. If you&apos;re not satisfied with your purchase, 
                you can request a refund within 30 days by contacting our support team. Please note that refund eligibility 
                may depend on how much of the course content you&apos;ve accessed.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>How long do I have access to the course materials?</AccordionTrigger>
              <AccordionContent>
                Most of our courses come with lifetime access, meaning you can access the course materials for as long as the 
                platform exists. Some specialized courses may have a limited access period, which will be clearly stated on 
                the course page before purchase.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I download the course videos for offline viewing?</AccordionTrigger>
              <AccordionContent>
                Currently, our course videos are available for streaming only and cannot be downloaded. However, any downloadable 
                resources mentioned in the course, such as PDFs, worksheets, or code samples, can be downloaded and used offline.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer any discounts for multiple course purchases?</AccordionTrigger>
              <AccordionContent>
                Yes, we occasionally offer bundle discounts when purchasing multiple related courses. We also run seasonal 
                promotions throughout the year. To stay updated on our latest offers, subscribe to our newsletter or follow 
                us on social media.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>How do I get a certificate after completing a course?</AccordionTrigger>
              <AccordionContent>
                For courses that offer certificates, you&apos;ll need to complete all the required modules and pass any assessments. 
                Once you&apos;ve met all the requirements, the certificate will be automatically generated and available for download 
                in your account under the &quot;Certificates&quot; section.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-green-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is available Monday through Friday, 9AM to 5PM EST.
            We typically respond to all inquiries within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=2348094703225" target="_blank">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto">
                WhatsApp Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 