"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for contacting us. We'll respond to your inquiry shortly.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have questions or feedback? We&apos;d love to hear from you. Fill out the form below or reach out through one of our support channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={formData.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="How can we help you?" 
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:support@evergenius.com" className="text-muted-foreground hover:text-green-600">
                        support@evergenius.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-muted-foreground">+1 (234) 567-8900</p>
                      <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FaWhatsapp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a 
                        href="https://api.whatsapp.com/send?phone=2348094703225" 
                        target="_blank" 
                        className="text-muted-foreground hover:text-green-600"
                      >
                        +234 809 470 3225
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Quick Support</h3>
                <p className="text-muted-foreground mb-4">
                  Need immediate assistance? Check our support center for quick answers.
                </p>
                <Link href="/support">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-100">
                    Visit Support Center
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 