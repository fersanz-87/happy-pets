import type { Service, Testimonial } from "@/types";

/**
 * ⚠️ DATOS DE EJEMPLO - REEMPLAZAR CON INFORMACIÓN REAL ANTES DE PRODUCCIÓN
 * Los testimonios, dirección, teléfono y demás datos son ficticios.
 */

export const CLINIC_NAME = "Happy Pets";
export const CLINIC_TAGLINE = "Clínica Veterinaria en Celaya, Guanajuato";
export const CLINIC_ADDRESS = "Blvd. Adolfo López Mateos 123, Centro, Celaya, Gto.";
export const CLINIC_PHONE = "(461) 123-4567";
export const CLINIC_HOURS = {
  weekdays: "Lunes a Sábado: 9:00 - 20:00",
  weekends: "Domingos: 10:00 - 14:00",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
  { label: "Ubicación", href: "#ubicacion" },
] as const;

export const SERVICES: Service[] = [
  {
    icon: "🩺",
    title: "Consulta General",
    description:
      "Revisión completa del estado de salud de tu mascota con diagnóstico profesional.",
  },
  {
    icon: "💉",
    title: "Vacunación",
    description:
      "Esquemas de vacunación completos para proteger a tu mascota en cada etapa de su vida.",
  },
  {
    icon: "🦷",
    title: "Limpieza Dental",
    description:
      "Cuidado dental profesional para prevenir enfermedades y mantener una sonrisa sana.",
  },
  {
    icon: "🔬",
    title: "Laboratorio y Diagnóstico",
    description:
      "Análisis clínicos y estudios de imagen para un diagnóstico preciso y oportuno.",
  },
  {
    icon: "✂️",
    title: "Estética y Grooming",
    description:
      "Baño, corte y cuidado estético para que tu mascota luzca y se sienta increíble.",
  },
  {
    icon: "🏥",
    title: "Cirugía",
    description:
      "Procedimientos quirúrgicos con equipo moderno y un equipo médico experimentado.",
  },
  {
    icon: "🚑",
    title: "Urgencias 24hrs",
    description:
      "Atención de emergencias las 24 horas del día, los 7 días de la semana.",
  },
  {
    icon: "💊",
    title: "Farmacia Veterinaria",
    description:
      "Medicamentos y productos especializados para el bienestar de tu mascota.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    ownerName: "María García",
    petName: "Luna",
    petType: "Perro",
    rating: 5,
    text: "Excelente atención desde la primera visita. El Dr. siempre explica todo con paciencia y Luna sale feliz de cada consulta. ¡Totalmente recomendados!",
  },
  {
    id: 2,
    ownerName: "Carlos Rodríguez",
    petName: "Michi",
    petType: "Gato",
    rating: 5,
    text: "Llevé a Michi de urgencia un domingo y lo atendieron de inmediato. El servicio fue impecable y la recuperación fue rápida. Muy agradecido con todo el equipo.",
  },
  {
    id: 3,
    ownerName: "Ana López",
    petName: "Rocky",
    petType: "Perro",
    rating: 4,
    text: "Rocky necesitaba una cirugía dental y todo salió perfecto. Las instalaciones son muy limpias y el personal es muy amable. Los precios son justos.",
  },
  {
    id: 4,
    ownerName: "Roberto Martínez",
    petName: "Kiwi",
    petType: "Ave",
    rating: 5,
    text: "Es difícil encontrar veterinarios que atiendan aves en Celaya, pero aquí Kiwi recibió un trato excepcional. Muy profesionales y dedicados.",
  },
];

export const PET_TYPES = [
  { value: "", label: "Selecciona el tipo de mascota" },
  { value: "perro", label: "Perro" },
  { value: "gato", label: "Gato" },
  { value: "ave", label: "Ave" },
  { value: "otro", label: "Otro" },
] as const;

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14929.307029289948!2d-100.8157!3d20.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c9e5b3f8f8b1b%3A0x7c7b2c0f2b1b1b1b!2sCelaya%2C%20Gto.!5e0!3m2!1ses!2smx!4v1234567890";
