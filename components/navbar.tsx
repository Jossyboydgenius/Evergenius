"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100, // Increased offset for taller navbar
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ["hero", "features", "benefits", "courses", "testimonials", "pricing", "faq"];
      let currentSection = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">EverGenius</span>
        </div>
    
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("hero")} 
            className={`text-sm font-medium hover:text-green-600 transition-colors ${activeSection === "hero" ? "text-green-600" : ""}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("features")} 
            className={`text-sm font-medium hover:text-green-600 transition-colors ${activeSection === "features" ? "text-green-600" : ""}`}
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("benefits")} 
            className={`text-sm font-medium hover:text-green-600 transition-colors ${activeSection === "benefits" ? "text-green-600" : ""}`}
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection("courses")} 
            className={`text-sm font-medium hover:text-green-600 transition-colors ${activeSection === "courses" ? "text-green-600" : ""}`}
          >
            Courses
          </button>
          <button 
            onClick={() => scrollToSection("pricing")} 
            className={`text-sm font-medium hover:text-green-600 transition-colors ${activeSection === "pricing" ? "text-green-600" : ""}`}
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className={`text-sm font-medium hover:text-green-600 transition-colors ${activeSection === "faq" ? "text-green-600" : ""}`}
          >
            FAQ
          </button>
        </nav>
    
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Log In
          </Button>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => scrollToSection("courses")}
          >
            Get a Course
          </Button>
        </div>
    
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
    
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto bg-background border-b">
          <nav className="flex flex-col space-y-4 py-4">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-green-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium hover:text-green-600 transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection("courses")} className="text-sm font-medium hover:text-green-600 transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-green-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-green-600 transition-colors">
              FAQ
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                Log In
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={() => scrollToSection("courses")}
              >
                Get a Course
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;