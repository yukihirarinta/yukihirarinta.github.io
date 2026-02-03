import { links } from "@/data/links";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto w-full max-w-md">
        <h1 className="sr-only">Links</h1>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li
              key={link.href}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <a
                href={link.href}
                className="block text-xl font-medium tracking-tight text-stone-900 underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
