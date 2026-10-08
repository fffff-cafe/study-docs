# Study docs for FFFFF Cafe

FFFFF Cafe の勉強会用ドキュメントです。Next.js の Static Export で生成し、GitHub Pages で公開しています。

公開URL: https://fffff-cafe.github.io/study-docs/

## ドキュメント一覧

- [MacでローカルLLMをはじめる](app/local-llm/page.tsx)

## 技術スタック

- **Next.js** 16 - App Router / Static Export
- **React** 19
- **TypeScript** 5
- **ESLint** 10 - Flat Config
- **Prettier** 3
- **Vitest** 5 + Testing Library

## 開発

```bash
pnpm install
pnpm dev
```

## ドキュメントの追加

1. `app/<slug>/page.tsx` を作成
2. `app/page.tsx` の一覧にリンクを追加

## ディレクトリ構成

```
.
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ドキュメント一覧
│   ├── reset.css           # CSSリセット
│   └── local-llm/page.tsx  # 各ドキュメント
├── components/
│   └── elements/           # 共通コンポーネント
├── .github/
│   ├── dependabot.yml      # 依存関係の週次更新
│   └── workflows/
│       ├── lint.yml        # リント自動実行
│       └── deploy.yml      # GitHub Pages 自動デプロイ
└── next.config.js          # basePath: /study-docs
```

## スクリプト

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 静的サイトをビルド（`/out` に出力） |
| `pnpm lint` | ESLint を実行 |
| `pnpm format` | Prettier でコードをフォーマット |
| `pnpm typecheck` | TypeScript の型チェック |
| `pnpm test` | Vitest でテストを実行 |

## デプロイ

main ブランチへの push で GitHub Pages に自動デプロイされます。

## ライセンス

ISC
