export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--color-brand-primary)] text-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <p className="text-lg font-serif font-medium">
            Dr. Maya Reynolds, PsyD
          </p>
          <p className="text-xs text-stone-300 mt-1">
            Licensed Clinical Psychologist • 123th Street 45 W, Santa Monica, CA
            90401
          </p>
        </div>
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
