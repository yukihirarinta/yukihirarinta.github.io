import { links } from "@/data/links";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto w-full max-w-md">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
            yukihirarinta
          </h1>
        </header>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li
              key={link.href}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <a
                href={link.href}
                className="link-card text-lg font-medium tracking-tight text-stone-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.label}</span>
                <span className="link-card__icon" aria-hidden="true">
                  &gt;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
