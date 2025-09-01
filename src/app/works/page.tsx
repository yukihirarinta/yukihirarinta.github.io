export const metadata = { title: 'Works – Yukihira Rinta' };

export default function WorksPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Works</h1>
        <p className="mt-2 text-neutral-400">今後追加予定のショーケース。</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card p-5">
              <div className="aspect-video w-full rounded-md bg-gradient-to-br from-brand-500/30 via-blue-500/20 to-purple-500/20" />
              <h3 className="mt-4 font-medium">Project {i}</h3>
              <p className="mt-1 text-sm text-neutral-400">ダミーの説明テキストです。</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

