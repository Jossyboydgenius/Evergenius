import { Metadata } from "next";
import CourseDetails from "./CourseDetails";
import { coursesData } from "@/data/courses";

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = coursesData[params.slug];
  
  if (!course) {
    return {
      title: "Course Not Found | Evergenius",
      description: "The requested course could not be found.",
    };
  }
  
  return {
    title: `${course.title} | Evergenius`,
    description: course.description,
    // Add other metadata as needed
  };
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({
    slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const initialCourse = coursesData[params.slug] || null;
  
  return <CourseDetails initialCourse={initialCourse} slug={params.slug} />;
}
