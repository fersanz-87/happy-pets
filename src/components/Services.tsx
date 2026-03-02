import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="servicios" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ofrecemos atención integral para el bienestar de tu mascota
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-4xl" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
