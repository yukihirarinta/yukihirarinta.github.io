export const metadata = { title: 'About – Yukihira Rinta' };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1>About</h1>
        <p>
          シンプルな自己紹介や方針などを掲載します。デザインは
          <a href="https://openai.com/ja-JP/" target="_blank" rel="noreferrer">openai.com</a>
          を参考にしたダーク基調です。
        </p>
        <p>
          技術スタックは Next.js 14（App Router）+ TypeScript + Tailwind CSS。
          GitHub Pages へ静的出力でデプロイします。
        </p>
      </div>
    </section>
  );
}
