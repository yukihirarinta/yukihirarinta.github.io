# Yukihira Rinta – Showcase (Next.js)

Next.js 14 + TypeScript + Tailwind CSS で構築したシンプルなショーケースサイトです。GitHub Pages に静的出力でデプロイします。

## 開発（Codespaces）

1. 依存関係をインストール

   ```bash
   npm install
   ```

2. 開発サーバーを起動

   ```bash
   npm run dev
   ```

   - ポート: `3000`（Codespaces の Port タブから Forwarded でブラウザ表示）

## ビルド & 静的出力

```bash
npm run build
```

- `next.config.mjs` の `output: 'export'` により、`out/` に静的サイトが生成されます（GitHub Pages で配信）。

## デプロイ（GitHub Actions）

- `main` ブランチへ push すると、ワークフロー（`.github/workflows/pages.yml`）が実行され `out/` を Pages に公開します。
- リポジトリの Settings > Pages で Source を「GitHub Actions」に設定してください（初回のみ）。

## 変更ポイント

- `next.config.mjs`: `output: 'export'` と `images.unoptimized: true` を設定（Next.js 静的出力対応）。
- ルーティング: App Router（`src/app`）。Home / Works / About / Contact を最小構成で用意。
- デザイン: Tailwind CSS。openai.com を参考にしたダーク基調。

## TODO（任意）

- [ ] プロフィール/リンク更新（`src/app/layout.tsx` / `src/app/contact/page.tsx`）
- [ ] メタ情報の更新（タイトル/説明、`metadata`）
- [ ] OGP 画像の追加（`src/app/og.png`）と `openGraph`/`twitter` 設定
- [ ] サイトマップ/robots 追加（`src/app/sitemap.ts` / `src/app/robots.ts`）
- [ ] Works の実データ化（`src/data/works.ts` など）と詳細ページ
- [ ] 分析/計測の追加（GA4 など）
- [ ] テーマ切替（ダーク/ライト切替トグル）
- [ ] カスタムドメイン設定（使用時は `public/CNAME` 追加）
