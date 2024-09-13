
export type CourseCard = {
  id: number;
  title: string;
  visit:number;
  text: string;
  price:number;
};
export type CourseId = CourseCard['id'];

export type CoursesState = {
  courses: CourseCard[];
  error: string | null;
  loading: boolean;
  
};
