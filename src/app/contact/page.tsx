export const metadata = { title: 'Contact – Yukihira Rinta' };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h1>
        <p className="mt-2 text-neutral-400">ダミーの連絡先（後で更新してください）。</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a className="card p-5 hover:bg-white/10" href="#" aria-label="X (dummy)">
            <div className="text-sm text-neutral-400">X</div>
            <div className="mt-1 font-medium">@example</div>
          </a>
          <a className="card p-5 hover:bg-white/10" href="#" aria-label="GitHub (dummy)">
            <div className="text-sm text-neutral-400">GitHub</div>
            <div className="mt-1 font-medium">github.com/example</div>
          </a>
          <a className="card p-5 hover:bg-white/10" href="#" aria-label="Email (dummy)">
            <div className="text-sm text-neutral-400">Email</div>
            <div className="mt-1 font-medium">hello@example.com</div>
          </a>
        </div>
      </div>
    </section>
  );
}

