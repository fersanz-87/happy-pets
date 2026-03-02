import {
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_HOURS,
  MAP_EMBED_URL,
} from "@/lib/constants";

export default function MapSection() {
  return (
    <section id="ubicacion" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Encuéntranos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Visítanos en nuestra clínica en Celaya, Guanajuato
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Ubicación de Happy Pets en Celaya, Guanajuato"
              src={MAP_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span role="img" aria-label="Ubicación">📍</span>
                Dirección
              </h3>
              <p className="mt-2 text-gray-600">{CLINIC_ADDRESS}</p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span role="img" aria-label="Teléfono">📞</span>
                Teléfono
              </h3>
              <p className="mt-2 text-gray-600">{CLINIC_PHONE}</p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span role="img" aria-label="Horario">🕐</span>
                Horario
              </h3>
              <p className="mt-2 text-gray-600">{CLINIC_HOURS.weekdays}</p>
              <p className="text-gray-600">{CLINIC_HOURS.weekends}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
