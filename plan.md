# 改善提案

## 1. OGP/Twitterなどのメタデータを整備する ✅
- `src/app/layout.tsx` の `metadata` オブジェクトに `openGraph` と `twitter` フィールドを追加し、共通の `title`・`description` を
参照させる。
- `public/og.png` などSNS共有用画像を用意してリポジトリに追加し、`openGraph.images` と `twitter.images` で参照する。
- 必要に応じて `metadataBase`・`alternates.canonical` なども設定し、SEOと共有時の見栄えを整える。

## 2. Works一覧のデータ構造を整理して実データ化する
- `src/data/projects.ts`（もしくは`works.ts`）を新設し、`Project` 型やステータス・タグを含む配列を定義する。
- `src/app/page.tsx` では新しいデータモジュールをインポートして利用し、カード描画の重複を避けるために小さな`ProjectCard`コンポー
ネントを切り出す。
- 実際のプロジェクト情報（リンク、サムネイル、概要）をデータに埋め込み、必要に応じて「開発中」表示などの分岐ロジックを整理する。

## 3. サイトマップとrobots.txtを追加する ✅
- `src/app/sitemap.ts` を作成し、トップページや今後追加する主要ページのURLを返す `MetadataRoute.Sitemap` を実装する。
- `src/app/robots.ts` を作成し、クロールを許可するドメイン設定やサイトマップのURLを含む `MetadataRoute.Robots` を返す。
- ビルド後に `next export` の成果物へファイルが含まれることを `npm run build` で確認する。

## 4. README.md を更新する ✅
- プロジェクト概要・セットアップ・ディレクトリガイドを最新化し、Works ページとメタデータ設定を紹介。
- 静的出力と GitHub Actions デプロイ手順を明記し、lint 実行も追記。
- 今後の作業項目は `plan.md` に集約する旨を README に記載。

## 5. カスタム 404 ページを整備する
- `src/app/not-found.tsx` を新設し、トップへ戻る導線や問い合わせリンクを含むメッセージを表示する。
- 404 ページでも共通レイアウトやスタイルが崩れないよう、`RootLayout` の余白・背景を調整する。
- `npm run build` で静的書き出し時に `404.html` が生成されることを確認する。

## 6. ヒーロー/自己紹介セクションを追加する
- `src/app/page.tsx` 冒頭にヒーローセクションを追加し、プロフィール文と主要リンク（GitHub・X など）を掲載する。
- 既存の Works グリッドとはセクションを分け、`aria-labelledby` などのアクセシビリティ属性も付与する。
- 画像やアイコンを `public/` 配下に追加する際は、OGP との整合性も保つ。
