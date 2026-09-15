const services = [
  {
    title: "Anxiety & Panic Therapy",
    description:
      "For clients feeling functional on the outside while quietly struggling with constant worry, body tension, or racing thoughts.",
  },
  {
    title: "Trauma & EMDR Therapy",
    description:
      "Paced carefully with an emphasis on safety and stabilization. Address single-incident trauma or long-standing emotional patterns.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "Designed for entrepreneurs, creatives, and professionals navigating high internal pressure and exhaustion.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--color-brand-surface)]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-brand-primary)]">
            Areas of Specialty
          </h2>
          <p className="text-[var(--color-brand-muted)]">
            Evidence-based methods tailored to your emotional and physiological
            needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-[var(--color-brand-surface)] shadow-sm space-y-4 hover:shadow-md transition"
            >
              <h3 className="text-xl font-serif font-medium text-[var(--color-brand-primary)]">
                {service.title}
              </h3>
              <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
