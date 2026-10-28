import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t"
      style={{ background: "#0a0a0a", borderColor: "rgba(248,247,243,0.05)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <div className="flex items-center gap-4">
          <span className="font-display text-sm text-offwhite/30">
            {profile.name}
          </span>
          <span className="text-offwhite/15 text-sm" aria-hidden="true">·</span>
          <span className="text-offwhite/20 text-xs">© {year}</span>
        </div>

        <div className="flex items-center gap-6">
          {profile.socials.map((s) => (
            <a
              key={s.url}
              href={s.url}
              className="text-offwhite/25 text-xs hover:text-lime transition-colors duration-200 uppercase tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
          <a
            href="mailto:teraiyavaidehi@gmail.com"
            className="text-offwhite/25 text-xs hover:text-lime transition-colors duration-200"
          >
            Email
          </a>
          <span className="text-offwhite/15 text-xs uppercase tracking-[0.15em]">
            Digital Marketing
          </span>
        </div>
      </div>
    </footer>
  );
}
