"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white p-4 pb-16">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold">EverGenius</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Reset your password</h1>
          <p className="text-muted-foreground mt-2">
            Enter your email address and we&apos;ll send you instructions to reset your password
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-green-200 focus:border-green-600 focus-visible:ring-green-600"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700" 
              disabled={isLoading}
            >
              {isLoading ? "Sending instructions..." : "Send reset instructions"}
            </Button>
          </form>
        ) : (
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center space-y-4">
            <div className="text-green-600 font-medium">Check your email</div>
            <p className="text-sm text-muted-foreground">
              We&apos;ve sent password reset instructions to {email}. Please check your inbox and follow the instructions.
            </p>
          </div>
        )}

        <div className="text-center mt-8 mb-12">
          <Link 
            href="/login" 
            className="text-sm text-green-600 hover:text-green-700 inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}