import { useState, useEffect, useRef } from "react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
      style={{ animation: "slideDown 700ms cubic-bezier(0.16, 1, 0.3, 1) both" }}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#top"
          className="font-display text-sm tracking-wider text-offwhite/80 hover:text-lime transition-colors duration-300 uppercase"
          aria-label="Back to top — Vaidehi Teraiya"
        >
          Vaidehi<span className="text-lime">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                className={`nav-link text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-lime active"
                    : "text-offwhite/50 hover:text-offwhite"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-charcoal bg-lime px-4 py-2 transition-all duration-300 hover:bg-lime/80 hover:-translate-y-0.5"
          aria-label="Get in touch with Vaidehi"
        >
          Let&apos;s Connect
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 flex flex-col gap-1.5 relative z-[60]"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px bg-offwhite transition-all duration-300 ${open ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`}
          />
          <span
            className={`block h-px bg-offwhite transition-all duration-300 ${open ? "opacity-0 w-6" : "w-4"}`}
          />
          <span
            className={`block h-px bg-offwhite transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-charcoal z-[55] flex flex-col transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="flex-1 flex flex-col justify-center px-8">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 60 + 100}ms, opacity 0.4s ease ${i * 60 + 100}ms`,
                }}
              >
                <a
                  href={link.href}
                  aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                  tabIndex={open ? 0 : -1}
                  className={`block py-4 font-display text-4xl font-light leading-none transition-colors duration-200 ${
                    activeSection === link.href.slice(1) ? "text-lime" : "text-offwhite/70 hover:text-offwhite"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="mt-12 pt-8 border-t border-white/10"
            style={{
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
              transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1) 400ms, opacity 0.4s ease 400ms",
            }}
          >
            <a
              href="mailto:teraiyavaidehi@gmail.com"
              tabIndex={open ? 0 : -1}
              className="text-sm text-offwhite/40 hover:text-lime transition-colors"
              onClick={() => setOpen(false)}
            >
              teraiyavaidehi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
