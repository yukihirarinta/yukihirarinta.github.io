import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative">
      <section className="section">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Yukihira Rinta
            </h1>
            <p className="mt-4 text-balance text-neutral-400 md:text-lg">
              シンプルなショーケースサイト（Next.js + Tailwind CSS）。
              デザインは openai.com を参考にしたダーク基調。
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/works"
                className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-white/10 hover:bg-brand-400"
              >
                View Works
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-5 py-2.5 text-sm font-medium ring-1 ring-inset ring-white/10 hover:bg-white/5"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-medium tracking-tight md:text-2xl">Featured</h2>
            <Link href="/works" className="text-sm text-neutral-400 hover:text-neutral-200">
              すべてを見る →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Link key={i} href="/works" className="card p-5 hover:bg-white/10">
                <div className="aspect-video w-full rounded-md bg-gradient-to-br from-brand-500/30 via-blue-500/20 to-purple-500/20" />
                <h3 className="mt-4 font-medium">Work {i}</h3>
                <p className="mt-1 text-sm text-neutral-400">ダミーの説明テキストです。</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

