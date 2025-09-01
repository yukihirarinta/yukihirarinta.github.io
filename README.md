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
npm run export
```

- `out/` に静的サイトが生成されます（GitHub Pages で配信）。

## デプロイ（GitHub Actions）

- `main` ブランチへ push すると、ワークフロー（`.github/workflows/pages.yml`）が実行され `out/` を Pages に公開します。
- リポジトリの Settings > Pages で Source を「GitHub Actions」に設定してください（初回のみ）。

## 変更ポイント

- `next.config.ts`: `output: 'export'` と `images.unoptimized: true` を設定（Next.js 静的出力対応）。
- ルーティング: App Router（`src/app`）。Home / Works / About / Contact を最小構成で用意。
- デザイン: Tailwind CSS。openai.com を参考にしたダーク基調。

## TODO（任意）

- Works の実データ化、各詳細ページ追加
- メタ情報（OGP、SNSリンク、連絡先）の更新
- Analytics / フィード / サイトマップなど
