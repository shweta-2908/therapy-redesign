export default function CtaBanner() {
  return (
    <section className="py-16 bg-[var(--color-brand-accent)] text-white text-center px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-serif font-medium">
          Ready to Take the Next Step?
        </h2>
        <p className="text-stone-100 max-w-xl mx-auto text-sm leading-relaxed">
          I offer a free initial consultation to answer your questions and see
          if we’re a good fit for working together in Santa Monica or online.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-[var(--color-brand-primary)] hover:bg-stone-100 px-8 py-3.5 rounded-md font-medium transition shadow-sm"
        >
          Schedule Your Free Consultation
        </a>
      </div>
    </section>
  );
}
