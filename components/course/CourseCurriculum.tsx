"use client";

import { Clock, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Course } from "@/types/course";

interface CourseCurriculumProps {
  course: Course;
}

const CourseCurriculum = ({ course }: CourseCurriculumProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
      <div className="text-sm text-muted-foreground mb-4">
        {course.modules.length} modules • {course.modules.reduce((total: number, module: { duration: string }) => {
          const hours = parseInt(module.duration.split(' ')[0]);
          return total + hours;
        }, 0)} hours total
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {course.modules.map((module: { title: string; duration: string; lessons: string[] }, index: number) => (
          <AccordionItem key={index} value={`module-${index}`}>
            <AccordionTrigger className="hover:bg-muted/50 px-4 py-2 rounded-md">
              <div className="flex flex-col items-start text-left">
                <div className="font-medium">{module.title}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration} • {module.lessons.length} lessons</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <ul className="space-y-2 py-2">
                {module.lessons.map((lesson: string, lessonIndex: number) => (
                  <li key={lessonIndex} className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs">
                      {lessonIndex + 1}
                    </div>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseCurriculum;