export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-400" />
        <div className="absolute bottom-0 -left-12 h-72 w-72 rounded-full bg-primary-300" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-300" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cuidamos a tu mejor amigo como parte de nuestra familia
          </h1>
          <p className="mt-6 text-lg text-primary-100 sm:text-xl">
            Clínica veterinaria de confianza en Celaya, Guanajuato
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-white px-8 py-3 text-center font-semibold text-primary-700 shadow-lg transition-transform hover:scale-105"
            >
              Agenda tu cita hoy
            </a>
            <a
              href="#servicios"
              className="rounded-full border-2 border-white/40 px-8 py-3 text-center font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Conoce nuestros servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
