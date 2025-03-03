"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, BookOpen, Award, ArrowLeft, ArrowRight, Star, Calendar, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CourseHero from "@/components/course/CourseHero";
import CourseOverview from "@/components/course/CourseOverview";
import CourseCurriculum from "@/components/course/CourseCurriculum";
import CourseInstructor from "@/components/course/CourseInstructor";
import CourseReviews from "@/components/course/CourseReviews";
import CourseFAQ from "@/components/course/CourseFAQ";

import { coursesData } from "@/data/courses";
import { Course } from "@/types/course";

interface CourseDetailsProps {
  initialCourse: Course | null;
  slug: string;
}

const CourseDetails = ({ initialCourse, slug }: CourseDetailsProps) => {
  const [course, setCourse] = useState<Course | null>(initialCourse);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!course && slug && coursesData[slug]) {
      setCourse(coursesData[slug]);
    }
  }, [course, slug]);

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
    <div className="bg-background">
      {/* Hero Section */}
      <CourseHero course={course} />
      
      {/* Course Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="overview" className="w-full">
              <div className="overflow-x-auto pb-2">
                <TabsList className="flex w-full min-w-max mb-8">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum" className="flex-1">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor" className="flex-1">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
                  <TabsTrigger value="faq" className="flex-1">FAQ</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview">
                <CourseOverview course={course} />
              </TabsContent>
              
              <TabsContent value="curriculum">
                <CourseCurriculum course={course} />
              </TabsContent>
              
              <TabsContent value="instructor">
                <CourseInstructor course={course} />
              </TabsContent>
              
              <TabsContent value="reviews">
                <CourseReviews course={course} />
              </TabsContent>
              
              <TabsContent value="faq">
                <CourseFAQ course={course} />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want This Kind of Change in Your Life Too?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join thousands of successful students who have transformed their crypto journey with our expert-led courses.</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8">
              BUY COURSE NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">30-Day Money-Back Guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;