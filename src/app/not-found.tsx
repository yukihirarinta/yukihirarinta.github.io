import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container flex flex-col items-center text-center">
        <p className="text-sm font-medium tracking-tight text-brand-300">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-neutral-400 md:text-base">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. You can
          return to the home page using the link below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-2 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
