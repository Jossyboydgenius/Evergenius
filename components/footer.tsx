"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  // Function to handle navigation based on current page
  const getNavigationLink = (sectionId: string) => {
    if (isHomePage) {
      // If already on homepage, just scroll to section
      return `#${sectionId}`;
    } else {
      // If on another page, go to homepage then to section
      return `/#${sectionId}`;
    }
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">EverGenius</span>
            </div>
            <p className="text-muted-foreground">
              Empowering you to navigate and profit from the crypto market with confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href={getNavigationLink("features")} className="text-muted-foreground hover:text-green-600">
                  Features
                </Link>
              </li>
              <li>
                <Link href={getNavigationLink("pricing")} className="text-muted-foreground hover:text-green-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href={getNavigationLink("faq")} className="text-muted-foreground hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  Crypto Glossary
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  Market Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Email: support@evergenius.com
              </li>
              <li className="text-muted-foreground">
                Hours: Mon-Fri 9AM-5PM EST
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-green-600">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-green-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 EverGenius Crypto Club. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-green-600">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-green-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;