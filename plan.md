# 改善提案

## 1. OGP/Twitterなどのメタデータを整備する
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

## 4. README.md を更新する
- サイトの概要、セットアップ手順、開発中のTODOなどの情報を最新化し、利用者がプロジェクトの目的や構成を把握しやすくする。
- 新しく追加・変更されたページや機能を README に反映し、ナビゲーションやデータ構成に関する補足を追記する。
- 主要タスクの進捗状況をチェックリスト形式で整理し、残作業が一目で分かるようにする。
