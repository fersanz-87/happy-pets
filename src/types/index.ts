export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  ownerName: string;
  petName: string;
  petType: string;
  rating: number;
  text: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  petName: string;
  petType: string;
  message: string;
}
