"use client";

import { CheckCircle } from "lucide-react";
import { Course } from "@/types/course";

interface CourseOverviewProps {
  course: Course;
}

const CourseOverview = ({ course }: CourseOverviewProps) => {
  return (
    <div className="space-y-12">
      {/* What You'll Learn */}
      <div>
        <h2 className="text-2xl font-bold mb-6">What You&apos;ll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.learningOutcomes.map((outcome: string, index: number) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* This Course Is For */}
      <div>
        <h2 className="text-2xl font-bold mb-6">This Course Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.idealFor.map((ideal, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{ideal}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Course Features */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Course Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;