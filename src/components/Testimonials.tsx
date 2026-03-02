import { TESTIMONIALS } from "@/lib/constants";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            La confianza de las familias de Celaya nos respalda
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <Stars rating={testimonial.rating} />
              <p className="mt-4 text-sm text-gray-600 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.ownerName}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.petName} · {testimonial.petType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
