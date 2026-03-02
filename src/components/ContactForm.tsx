"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types";
import { PET_TYPES } from "@/lib/constants";

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
  petName?: string;
  petType?: string;
  message?: string;
}

function validate(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }
  if (data.name.length > 100) {
    errors.name = "El nombre no puede exceder 100 caracteres.";
  }

  if (!data.phone || !/^\+?[\d\s()-]{7,15}$/.test(data.phone)) {
    errors.phone = "Ingresa un número de teléfono válido.";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresa un email válido.";
  }
  if (data.email.length > 254) {
    errors.email = "El email no puede exceder 254 caracteres.";
  }

  if (!data.petName || data.petName.length < 1) {
    errors.petName = "Ingresa el nombre de tu mascota.";
  }

  if (!data.petType) {
    errors.petType = "Selecciona el tipo de mascota.";
  }

  if (!data.message || data.message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }
  if (data.message.length > 1000) {
    errors.message = "El mensaje no puede exceder 1000 caracteres.";
  }

  return errors;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    petName: "",
    petType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const sanitizedData: ContactFormData = {
      name: sanitize(formData.name),
      phone: sanitize(formData.phone),
      email: sanitize(formData.email),
      petName: sanitize(formData.petName),
      petType: sanitize(formData.petType),
      message: sanitize(formData.message),
    };

    const fieldErrors = validate(sanitizedData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      // Simular envío al servidor
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        petName: "",
        petType: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field: keyof FieldErrors) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
        : "border-gray-300 focus:border-primary-500 focus:ring-primary-200"
    }`;

  return (
    <section id="contacto" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Agenda tu cita
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
            <span className="text-5xl">✅</span>
            <h3 className="mt-4 text-xl font-semibold text-primary-800">
              ¡Mensaje enviado con éxito!
            </h3>
            <p className="mt-2 text-primary-700">
              Nos pondremos en contacto contigo pronto.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold text-white hover:bg-primary-700"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-12 space-y-6 rounded-2xl bg-white p-8 shadow-sm"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={15}
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                  placeholder="(461) 000-0000"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="petName"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Nombre de tu mascota
                </label>
                <input
                  id="petName"
                  name="petName"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.petName}
                  onChange={handleChange}
                  className={inputClass("petName")}
                  placeholder="Nombre de tu mascota"
                />
                {errors.petName && (
                  <p className="mt-1 text-sm text-red-600">{errors.petName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="petType"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Tipo de mascota
                </label>
                <select
                  id="petType"
                  name="petType"
                  required
                  value={formData.petType}
                  onChange={handleChange}
                  className={inputClass("petType")}
                >
                  {PET_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.petType && (
                  <p className="mt-1 text-sm text-red-600">{errors.petType}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={inputClass("message")}
                placeholder="Cuéntanos cómo podemos ayudarte..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {status === "error" && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
                Ocurrió un error al enviar el mensaje. Por favor, intenta de
                nuevo.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-primary-600 py-3 font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
