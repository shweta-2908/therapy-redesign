"use client";
import { MapPin, Shield, Sun } from "lucide-react";

export default function OfficeSection() {
  return (
    <section id="office" className="py-20 bg-[var(--color-brand-surface)]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-brand-primary)]">
            Our Office — A Calm Space for Healing
          </h2>
          <p className="text-[var(--color-brand-muted)]">
            A quiet, private space in Santa Monica designed to feel calm,
            grounded, and uncluttered with abundant natural light.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="h-80 bg-[var(--color-brand-surface)] rounded-xl overflow-hidden shadow-sm relative flex items-center justify-center">
            <img
              src="/office1.jpeg"
              alt="Therapy Office Interior 1"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="text-xs text-[var(--color-brand-muted)] absolute"></span>
          </div>
          <div className="h-80 bg-[var(--color-brand-surface)] rounded-xl overflow-hidden shadow-sm relative flex items-center justify-center">
            <img
              src="/office2.jpeg"
              alt="Therapy Office Interior 2"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="text-xs text-[var(--color-brand-muted)] absolute"></span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[var(--color-brand-surface)] max-w-2xl mx-auto grid sm:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <MapPin size={20} className="text-[var(--color-brand-accent)]" />
            <span className="text-xs font-semibold text-[var(--color-brand-primary)]">
              Location
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">
              123th Street 45 W, Santa Monica, CA 90401
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Shield size={20} className="text-[var(--color-brand-accent)]" />
            <span className="text-xs font-semibold text-[var(--color-brand-primary)]">
              Care Options
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">
              In-Person & Secure Telehealth (CA)
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Sun size={20} className="text-[var(--color-brand-accent)]" />
            <span className="text-xs font-semibold text-[var(--color-brand-primary)]">
              Environment
            </span>
            <span className="text-xs text-[var(--color-brand-muted)]">
              Quiet, Natural Light, Private
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
