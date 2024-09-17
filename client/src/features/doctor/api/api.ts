import type {


  DoctorId,
  DoctorCard,
  } from '../types/types';
  
  

  // export async function fetchServices(): Promise<ServiceCard[]> {
  //   const res = await fetch('/api/services');
  //   return res.json();
  // }
  export const fetchDoctors = async (): Promise<DoctorCard[]> => {
    const res = await fetch('/api/doctors');
  
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    return res.json();
  };
  export const fetchAddDoctor= async (doctor: FormData): Promise<DoctorCard> => {
    const res = await fetch('/api/doctors', {
      method: 'POST',
  
      body: doctor,
    });
    return res.json();
  }
  
  export const fetchDoctorChange=async(formData: FormData): Promise<DoctorCard> => {
    const res = await fetch(`/api/doctors/${formData.get('id')}`, {
      method: 'PUT',
     
      body: formData,
    });
    if (!res.ok) {
      throw new Error('Failed to update doctor');
    }
    return res.json();
  };
  export const fetchDoctorRemove = async (id: number): Promise<DoctorId> => {
    const res = await fetch(`/api/doctors/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  };