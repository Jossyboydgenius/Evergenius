"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Star, Clock, Users, Calendar, Award, PlayCircle } from "lucide-react";
import { Course } from "@/types/course";

interface CourseHeroProps {
  course: Course;
  slug?: string;
}

const CourseHero = ({ course, slug }: CourseHeroProps) => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-12 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="pt-14 md:pt-6">
              <Link href="/#courses" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Link>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">{course.level}</Badge>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">({course.enrolled}+ students)</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
            
            <p className="text-lg text-muted-foreground mb-6">{course.fullDescription}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-green-200 text-green-700">{course.instructor.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{course.instructor.name}</p>
                <p className="text-sm text-muted-foreground">{course.instructor.role}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>{course.enrolled}+ enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <span>Last updated {course.lastUpdated}</span>
              </div>
              {course.certification && (
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span>Certificate of completion</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold">${course.price}</span>
              {course.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">${course.originalPrice}</span>
              )}
              {course.originalPrice && (
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200 ml-2">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/payment?course=${slug}`}>
                <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                  Buy This Course
                </Button>
              </Link>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg py-6">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Preview
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-4">
                  <PlayCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;