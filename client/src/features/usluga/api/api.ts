import type {

    Course,
    CourseId,
    CourseCard,
  } from '../types/type';
  
  

  // export async function fetchServices(): Promise<ServiceCard[]> {
  //   const res = await fetch('/api/services');
  //   return res.json();
  // }
  export const fetchCourses = async (): Promise<CourseCard[]> => {
    const res = await fetch('/api/courses');
  
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    return res.json();
  };
  export const fetchAddCourse= async (course: CourseCard): Promise<CourseCard> => {
    const res = await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(course),
    });
    return res.json();
  }
  export const fetchCourseChange=async(course: CourseCard): Promise<CourseCard> => {
    const res = await fetch(`/api/courses/${course.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title:course.title,  visit: course.visit, text: course.text, price:course.price }),
    });
    return res.json();
  }
  export const fetchCourseRemove = async (id: number): Promise<CourseId> => {
    const res = await fetch(`/api/courses/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  };