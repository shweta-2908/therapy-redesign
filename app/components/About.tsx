import { Check } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-brand-primary)]">
          Meet Dr. Maya Reynolds, PsyD
        </h2>
        <p className="text-[var(--color-brand-muted)] leading-relaxed">
          I am a licensed clinical psychologist based in Santa Monica,
          California. Many of the people I work with are high-achieving,
          thoughtful, and self-aware—but internally feel exhausted, stuck in
          overthinking, or emotionally on edge.
        </p>
        <p className="text-[var(--color-brand-muted)] leading-relaxed">
          I take a warm, collaborative, and grounded approach. Sessions are
          structured enough to feel supportive while leaving space for
          reflection and depth. I integrate Cognitive Behavioral Therapy (CBT),
          EMDR, mindfulness, and body-oriented techniques.
        </p>
      </div>
      <div className="bg-[var(--color-brand-surface)] p-8 rounded-2xl space-y-6">
        <h3 className="text-xl font-serif font-medium text-[var(--color-brand-primary)]">
          Core Therapeutic Approaches
        </h3>
        <ul className="space-y-3 text-sm text-[var(--color-brand-muted)]">
          <li className="flex items-center gap-3">
            <Check size={18} className="text-[var(--color-brand-accent)]" />{" "}
            Cognitive Behavioral Therapy (CBT)
          </li>
          <li className="flex items-center gap-3">
            <Check size={18} className="text-[var(--color-brand-accent)]" />{" "}
            EMDR & Trauma Stabilization
          </li>
          <li className="flex items-center gap-3">
            <Check size={18} className="text-[var(--color-brand-accent)]" />{" "}
            Mindfulness & Somatic Techniques
          </li>
          <li className="flex items-center gap-3">
            <Check size={18} className="text-[var(--color-brand-accent)]" />{" "}
            Burnout & Stress Regulation
          </li>
        </ul>
      </div>
    </section>
  );
}
