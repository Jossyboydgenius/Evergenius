export interface Course {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    experience: string;
    credentials: string[];
  };
  price: number;
  originalPrice?: number;
  duration: string;
  level: string;
  enrolled: number;
  lastUpdated: string;
  language: string;
  certification: boolean;
  features: string[];
  modules: {
    title: string;
    lessons: string[];
    duration: string;
  }[];
  learningOutcomes: string[];
  idealFor: string[];
  testimonials: {
    name: string;
    role: string;
    comment: string;
    rating: number;
    avatar: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CoursesData {
  [key: string]: Course;
}