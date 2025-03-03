"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Course } from "@/types/course";

interface CourseReviewsProps {
  course: Course;
}

const CourseReviews = ({ course }: CourseReviewsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {course.testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-green-200 text-green-700">{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                />
              ))}
            </div>
            
            <p className="text-muted-foreground">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseReviews;