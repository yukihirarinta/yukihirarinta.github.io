# Yukihira Rinta – Showcase (Next.js)

Next.js 14・TypeScript・Tailwind CSS で構築した Yukihira Rinta の作品ショーケースです。GitHub Pages に静的出力した成果物をデプロイします。

## プロジェクト概要

- App Router（`src/app`）でシングルページの Works 一覧を提供。
- `layout.tsx` でヘッダー/フッターを共通化し、Open Graph・Twitter メタデータやファビコンを設定。
- `public/blog-thumbnail.svg` を代表画像として共有カードに利用。
- `src/app/sitemap.ts` と `src/app/robots.ts` を備え、静的サイトでも基本的な SEO 設定を網羅。

## セットアップ

1. Node.js 18.17 以上を用意します。
2. 依存関係をインストールします。

   ```bash
   npm install
   ```

### 開発サーバー

```bash
npm run dev
```

- ローカルポート: `3000`
- Codespaces の場合は Forwarded Ports からブラウザでアクセスします。

### ビルド & 静的出力

```bash
npm run build
```

- `next.config.mjs` の `output: 'export'` により、`out/` 配下に静的ファイルが生成されます。
- 追加で `npm run lint` を実行して構文チェックが可能です。

## デプロイ

- `main` ブランチへ push すると GitHub Actions（`.github/workflows/pages.yml`）がビルド・デプロイを実行し、`out/` を GitHub Pages に公開します。
- 初回は GitHub リポジトリの **Settings > Pages** で Source を「GitHub Actions」に設定してください。

## ディレクトリガイド

| パス | 役割 |
| --- | --- |
| `src/app/layout.tsx` | ルートレイアウト。メタデータと共通 UI を定義。 |
| `src/app/page.tsx` | Works カードの描画ロジック。外部リンクや開発中表示を切り替え。 |
| `src/app/sitemap.ts` / `src/app/robots.ts` | Next.js 付属の MetadataRoute を用いた SEO 用ファイル。 |
| `src/app/globals.css` | Tailwind CSS を含むグローバルスタイル。 |
| `public/` | ファビコンや共有サムネイルなどの静的アセット。 |

## 作業メモ

継続的な改善タスクや検討事項は `plan.md` に集約しています。最新の作業項目や進捗状況はそちらを参照してください。
