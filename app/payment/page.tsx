"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Building, Coins, MessageSquare } from "lucide-react";
import { coursesData } from "@/data/courses";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course");
  const [course, setCourse] = useState<any>(null);
  const [transactionId, setTransactionId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  // Random USDT wallet address - this would be replaced with your actual wallet address
  const walletAddress = "TRC20: TKSXg5fTjnDhT5H6a3Q8kTL4735esBuL9R";
  
  useEffect(() => {
    if (courseSlug && coursesData[courseSlug]) {
      setCourse(coursesData[courseSlug]);
    }
  }, [courseSlug]);

  const handlePaymentSubmit = () => {
    if (paymentMethod === "usdt" && transactionId) {
      // Format the WhatsApp message
      const courseTitle = course?.title || "the course";
      const message = `Hello EverGenius, I just paid for ${courseTitle}. My transaction ID is ${transactionId}.`;
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp with the pre-filled message
      window.open(`https://api.whatsapp.com/send?phone=2348094703225&text=${encodedMessage}`, "_blank");
    }
  };

  const handleWhatsAppRedirect = () => {
    const courseTitle = course?.title || "a course";
    const message = `Hello EverGenius, I'm interested in purchasing ${courseTitle}. Please provide me with payment details.`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://api.whatsapp.com/send?phone=2348094703225&text=${encodedMessage}`, "_blank");
  };

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <p className="mb-6">The course you&apos;re looking for doesn&apos;t exist or has been removed.</p>
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
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Link href={`/courses/${courseSlug}`} className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Course
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Complete Your Purchase</h1>
        <p className="text-lg text-muted-foreground mb-8">You&apos;re about to gain access to: {course.title}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Kindly select your payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Card</span>
                    </TabsTrigger>
                    <TabsTrigger value="bank" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span>Bank</span>
                    </TabsTrigger>
                    <TabsTrigger value="usdt" className="flex items-center gap-2">
                      <Coins className="h-4 w-4" />
                      <span>USDT</span>
                    </TabsTrigger>
                    <TabsTrigger value="whatsapp" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card">
                    <div className="text-center p-6">
                      <p className="mb-4">You will be redirected to Paystack to complete your payment.</p>
                      <Button className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto">
                        Proceed to Payment
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bank">
                    <div className="text-center p-6">
                      <p className="mb-4">You will be redirected to complete your bank transfer.</p>
                      <Button className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto">
                        Proceed to Bank Transfer
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="usdt">
                    <div className="space-y-6">
                      <div className="p-6 bg-green-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Pay ${course.price.toFixed(2)} to the TRC20 Address Below:</h3>
                        <div className="p-4 bg-white border rounded-md mb-4">
                          <p className="font-mono break-all select-all">{walletAddress}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Please make sure to use the TRC20 network for your transfer.</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="transaction-id">Transaction ID</Label>
                          <Input 
                            id="transaction-id" 
                            placeholder="Enter your payment transaction ID" 
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                          />
                        </div>
                        
                        <Button 
                          className="bg-green-600 hover:bg-green-700 text-white w-full"
                          onClick={handlePaymentSubmit}
                          disabled={!transactionId}
                        >
                          I have made the payment
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="whatsapp">
                    <div className="p-6 text-center">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Pay via WhatsApp</h3>
                        <p className="text-muted-foreground">Chat with us directly on WhatsApp to complete your payment.</p>
                      </div>
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto flex items-center gap-2"
                        onClick={handleWhatsAppRedirect}
                      >
                        <MessageSquare className="h-5 w-5" />
                        Contact Us on WhatsApp
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                  <Link href="https://api.whatsapp.com/send?phone=2348094703225" target="_blank">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Contact Us on WhatsApp
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span>${course.originalPrice ? course.originalPrice.toFixed(2) : course.price.toFixed(2)}</span>
                  </div>
                  
                  {course.originalPrice && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${(course.originalPrice - course.price).toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t flex justify-between font-bold">
                    <span>Total</span>
                    <span>${course.price.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 text-sm text-muted-foreground">
                <p>30-Day Money-Back Guarantee</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 