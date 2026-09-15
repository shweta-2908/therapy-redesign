const faqs = [
  {
    q: "Do you offer in-person or online therapy?",
    a: "I offer both in-person sessions at my Santa Monica office and secure telehealth sessions across California.",
  },
  {
    q: "Who do you typically work with?",
    a: "I work with adults, high-achieving professionals, entrepreneurs, and creatives navigating anxiety, trauma, chronic stress, burnout, and perfectionism.",
  },
  {
    q: "What therapy modalities do you use?",
    a: "I integrate Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented (somatic) techniques.",
  },
];

export default function FAQs() {
  return (
    <section id="faq" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-serif font-medium text-center text-[var(--color-brand-primary)] mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-[var(--color-brand-surface)] shadow-sm"
          >
            <h3 className="font-medium text-lg text-[var(--color-brand-primary)] mb-2">
              {faq.q}
            </h3>
            <p className="text-sm text-[var(--color-brand-muted)] leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
