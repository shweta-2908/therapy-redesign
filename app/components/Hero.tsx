"use client";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-semibold">
          Licensed Clinical Psychologist • Santa Monica, CA
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-[var(--color-brand-primary)]">
          Grounded Therapy for Anxiety, Trauma, and Burnout
        </h1>
        <p className="text-lg text-[var(--color-brand-muted)] leading-relaxed">
          A warm, structured space for high-achieving adults, professionals, and
          creatives looking to slow down, reconnect, and find lasting relief.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-hover)] text-white text-center px-6 py-3.5 rounded-md font-medium transition shadow-sm"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-surface)] text-center px-6 py-3.5 rounded-md font-medium transition"
          >
            Explore Services
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="rounded-2xl overflow-hidden shadow-md bg-[var(--color-brand-surface)] relative p-1 inline-block">
          <img
            src="/Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds, PsyD - Santa Monica Psychologist"
            className="block h-auto w-auto max-w-full max-h-[70vh] rounded-xl object-contain object-top"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-xs text-[var(--color-brand-muted)] absolute inset-0 flex items-center justify-center -z-10">
            Add image to public/images/maya-reynolds.jpg
          </span>
        </div>
      </div>
    </section>
  );
}
