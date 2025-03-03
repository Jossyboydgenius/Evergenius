"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";
import { Course } from "@/types/course";

interface CourseInstructorProps {
  course: Course;
}

const CourseInstructor = ({ course }: CourseInstructorProps) => {
  const { instructor } = course;
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
      
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-green-200 text-green-700 text-xl">{instructor.avatar}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-medium">{instructor.name}</h3>
          <p className="text-muted-foreground">{instructor.role}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">{instructor.bio}</p>
          <p className="text-muted-foreground">{instructor.experience}</p>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Credentials</h4>
          <ul className="space-y-2">
            {instructor.credentials.map((credential: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{credential}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;