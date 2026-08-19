import { address, site } from "../lib/content";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-wood-950 py-16 text-sand-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-medium tracking-tight text-sand-50">
              {site.name}
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-sand-400">
              {site.shortDescription}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-caramel-500">
              Endereço
            </h4>
            <address className="not-italic text-sm leading-relaxed text-sand-300">
              {address.full.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </address>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-caramel-500">
              Siga no Instagram
            </h4>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-sand-300 transition-colors hover:text-sand-50 focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:ring-offset-2 focus:ring-offset-wood-950"
              aria-label="Instagram da Madeireira Pantanal Paraty"
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="font-medium">@madeireirapantanal_paraty</span>
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-wood-900 pt-8 text-center text-xs text-sand-500">
          <p>
            © {currentYear} {site.name}. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Madeira, natureza e construção com qualidade e confiança.
          </p>
        </div>
      </div>
    </footer>
  );
}
