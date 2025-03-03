import { coursesData } from "@/data/courses";

export function generateStaticParams() {
  return Object.keys(coursesData).map(slug => ({
    slug: slug
  }));
}