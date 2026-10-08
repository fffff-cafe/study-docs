import { FC, ReactNode } from "react"

export const metadata = {
  title: "MacでローカルLLMをはじめる | 2026年おすすめモデルと環境構築",
  description:
    "MacBookでローカルLLMを動かすための入門ガイド。メモリ容量別のおすすめモデル、Ollama・MLXによる環境構築、量子化、Coding Agentとの連携まで解説します。",
}

const navItems = [
  ["start", "はじめる"],
  ["environment", "環境構築"],
  ["models", "モデル"],
  ["memory", "メモリ別"],
  ["quantization", "量子化"],
  ["coding", "Coding Agent"],
  ["faq", "FAQ"],
]

const setupSteps: { title: string; text: string; terminal: ReactNode }[] = [
  {
    title: "Macのメモリを確認する",
    text: "Appleメニュー → 「このMacについて」からメモリ容量を確認します。",
    terminal: (
      <>
        <span className="comment"># ターミナルから確認する場合</span>
        {"\nsystem_profiler SPHardwareDataType"}
      </>
    ),
  },
  {
    title: "Ollamaをインストール",
    text: "Ollamaの公式サイトからMac版をインストールします。",
    terminal: (
      <>
        <span className="comment"># Homebrewを使う場合</span>
        {"\nbrew install --cask ollama"}
      </>
    ),
  },
  {
    title: "Ollamaを起動",
    text: "アプリケーションからOllamaを起動します。起動後、ターミナルからモデルを実行できます。",
    terminal: "ollama --version",
  },
  {
    title: "モデルをダウンロード",
    text: "まずは自分のMacのメモリに合ったモデルを選びます。",
    terminal: (
      <>
        <span className="comment"># 軽量モデル</span>
        {"\nollama run qwen3.5:9b\n\n"}
        <span className="comment"># 大型モデル</span>
        {"\nollama run qwen3.5:35b"}
      </>
    ),
  },
  {
    title: "会話してみる",
    text: "モデルが起動すると、そのままターミナルからChatGPTのように会話できます。",
    terminal: ">>> Pythonでフィボナッチ数列を実装して",
  },
]

const models = [
  {
    name: "Qwen 3.5 35B-A3B",
    text: "現在のMac向けローカルLLMでまず試したいモデル。35BのMoEモデルで、Coding Agentとの相性が良い。",
    tags: ["35B MoE", "Q4 約22GB", "32GB+", "Coding"],
  },
  {
    name: "Gemma 4 31B",
    text: "高品質な汎用モデル。Coding、推論、文章生成など幅広く使える。",
    tags: ["31B", "Q4 約19GB", "32GB+", "汎用"],
  },
  {
    name: "Qwen 3.5 27B",
    text: "大きめのDenseモデル。MoEではなく、モデル全体を使うタイプ。",
    tags: ["27B", "Q4 約19GB", "32GB+", "Coding"],
  },
  {
    name: "Gemma 4 26B-A4B",
    text: "26B規模のMoEモデル。メモリ容量と性能のバランスが良い。",
    tags: ["26B MoE", "Q4 約15GB", "24GB+"],
  },
  {
    name: "gpt-oss 20B",
    text: "推論やAgent用途を意識した比較的軽量なモデル。16〜24GBクラスのMacでも候補になる。",
    tags: ["20B MoE", "Q4 約12GB", "Agent"],
  },
  {
    name: "Qwen 3.5 9B",
    text: "16GB Macで使いやすい軽量モデル。普段使いから軽いCodingまで対応。",
    tags: ["9B", "Q4 約7GB", "16GB+"],
  },
  {
    name: "LFM2-24B-A2B",
    text: "Active Parametersが小さく、高速なローカル推論を狙えるMoEモデル。",
    tags: ["24B MoE", "Q4 約14GB", "高速"],
  },
  {
    name: "Gemma 4 12B",
    text: "軽量な汎用モデル。チャットや要約などを気軽にローカルで試したい場合に。",
    tags: ["12B", "Q4 約8GB", "16GB+"],
  },
]

const memories: [string, ReactNode][] = [
  ["8GB", <>2〜4B程度。<br />軽いチャット・要約向け。</>],
  ["16GB", <>Qwen 3.5 9B<br />Gemma 4 12B</>],
  ["24GB", <>Gemma 4 26B-A4B<br />LFM2-24B-A2B</>],
  ["32GB", <>Qwen 3.5 35B-A3B<br />Gemma 4 31B</>],
  ["48GB", "35B級を余裕を持って運用。大型モデルにも挑戦可能。"],
  ["64GB+", "70B級や大型MoEなど。本格的なローカルAI環境。"],
]

const comparison = [
  ["Qwen 3.5 35B-A3B", "35B MoE", "約22GB", "32GB+", "Coding / Agent", "★★★★★"],
  ["Gemma 4 31B", "31B", "約19GB", "32GB+", "汎用 / Coding", "★★★★★"],
  ["Qwen 3.5 27B", "27B", "約19GB", "32GB+", "汎用 / Coding", "★★★★☆"],
  ["Gemma 4 26B-A4B", "26B MoE", "約15GB", "24GB+", "汎用 / Agent", "★★★★☆"],
  ["LFM2-24B-A2B", "24B MoE", "約14GB", "24GB+", "高速推論", "★★★★☆"],
  ["gpt-oss 20B", "20B MoE", "約12GB", "16〜24GB+", "推論 / Agent", "★★★★☆"],
  ["Qwen 3.5 9B", "9B", "約7GB", "16GB+", "軽量 / Coding", "★★★★☆"],
  ["Gemma 4 12B", "12B", "約8GB", "16GB+", "チャット / 文章", "★★★★☆"],
]

const workflow = [
  ["メモリを確認", "16GBなら9〜12B、32GBなら30B級を目安にする。"],
  ["Ollamaを入れる", "MacでローカルLLMを扱うための入口として利用する。"],
  ["モデルを1つ試す", "迷ったら、16GBはQwen 3.5 9B、32GB以上はQwen 3.5 35B-A3B。"],
  ["速度と品質を確認", "自分のMacで実際に使って、必要ならモデルを変更する。"],
  ["Coding Agentに接続", "ローカルLLMを開発環境のAgentとして利用してみる。"],
]

const faqs = [
  [
    "Intel Macでも使えますか？",
    "使えますが、Apple Silicon Macと比べるとLLMのローカル実行には向いていません。新しくMacを用意するならMシリーズを推奨します。",
  ],
  [
    "8GBでも動きますか？",
    "小型モデルなら動作します。ただしOSや他のアプリケーションもメモリを使用するため、本格的に使うなら16GB以上をおすすめします。",
  ],
  [
    "32GBなら何を選べばいい？",
    "まずQwen 3.5 35B-A3Bを試すのがおすすめです。汎用性や別のモデルも試したいならGemma 4 31Bも候補になります。",
  ],
  [
    "量子化は難しくないですか？",
    "最初は気にしなくて構いません。Ollamaなどのランタイムが対応モデルを扱ってくれるため、まずはQ4前後のモデルを試すだけで十分です。",
  ],
  [
    "ChatGPTより賢いですか？",
    "一概には比較できません。クラウドの最上位モデルと比べると性能面で差がある一方、ローカルLLMにはオフラインで動く、データを外部に送らない、APIコストがかからないといったメリットがあります。",
  ],
  [
    "結局どのMacを買えばいい？",
    "ローカルLLMを重視するなら、メモリ容量を優先してください。16GBは入門、32GBは本格利用、48〜64GB以上は大型モデルを狙う構成です。",
  ],
]

const quantization = `FP16  →  高精度・大容量

Q8    →  高品質・小型化

Q6    →  品質とサイズのバランス

Q4    →  小型・実用的

Q3    →  さらに小型・品質低下に注意`

const moe = `通常のDenseモデル

27B
 ↓
27Bすべてを計算


MoEモデル

35B
 ↓
必要なExpertを選択
 ↓
約3Bだけを計算

→ モデル自体は大きい
→ 1トークンあたりの計算量は小さい
→ Macでも比較的高速に動かせる`

const architecture = `┌─────────────────────────────┐
│        MacBook              │
│                             │
│  ┌──────────┐               │
│  │ Coding   │               │
│  │ Agent    │               │
│  └────┬─────┘               │
│       │ OpenAI互換APIなど    │
│       ↓                     │
│  ┌──────────┐               │
│  │ Ollama   │               │
│  └────┬─────┘               │
│       ↓                     │
│  ┌────────────────────┐     │
│  │ Qwen / Gemma etc.  │     │
│  └────────────────────┘     │
│                             │
│       Apple Silicon GPU     │
└─────────────────────────────┘`

const css = `
/* reset.css と root layout の影響を受けないよう .local-llm 配下にスコープ */
html:has(.local-llm) {
  scroll-behavior: smooth;
}

.local-llm {
  --bg: #f6f6f3;
  --surface: #fff;
  --text: #171717;
  --muted: #666;
  --line: #ddd;
  --dark: #111;
  --soft: #eee;
  --green: #e6f4ea;
  --blue: #e8f0ff;
  --yellow: #fff4d6;

  margin: -1rem;
  color: var(--text);
  background: var(--bg);
  font-family:
    -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Noto Sans JP",
    sans-serif;
  line-height: 1.8;
  color-scheme: light;
}

.local-llm * {
  font-family: inherit;
}

.local-llm p {
  margin: 1em 0;
}

.local-llm a {
  color: inherit;
}

.local-llm code,
.local-llm pre {
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.local-llm header {
  background: var(--dark);
  color: #fff;
}

.local-llm .header-inner {
  max-width: 1100px;
  margin: auto;
  padding: 72px 24px 64px;
}

.local-llm .eyebrow {
  margin-bottom: 16px;
  color: #888;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.local-llm header .eyebrow {
  color: #aaa;
}

.local-llm h1 {
  margin: 0 0 24px;
  max-width: 850px;
  font-size: clamp(38px, 7vw, 72px);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.local-llm .lead {
  max-width: 720px;
  margin: 0;
  color: #ccc;
  font-size: 18px;
}

.local-llm nav {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
}

.local-llm .nav-inner {
  max-width: 1100px;
  margin: auto;
  padding: 0 24px;
  display: flex;
  gap: 24px;
  overflow-x: auto;
}

.local-llm nav a {
  flex: 0 0 auto;
  padding: 13px 0;
  color: var(--muted);
  font-size: 13px;
  text-decoration: none;
}

.local-llm .content {
  max-width: 1100px;
  margin: auto;
  padding: 64px 24px 100px;
}

.local-llm section {
  margin-bottom: 80px;
  scroll-margin-top: 56px;
}

.local-llm h2 {
  margin: 0 0 26px;
  font-size: 32px;
  line-height: 1.25;
  letter-spacing: -0.04em;
}

.local-llm h3 {
  margin: 0 0 10px;
  font-size: 21px;
  line-height: 1.4;
}

.local-llm .intro-box {
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
}

.local-llm .hero-recommend {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
  padding: 34px;
  border-radius: 20px;
  background: var(--dark);
  color: white;
}

.local-llm .hero-recommend h2 {
  margin-bottom: 12px;
  font-size: 38px;
}

.local-llm .hero-recommend p {
  margin: 0;
  color: #ccc;
}

.local-llm .hero-meta {
  display: grid;
  gap: 10px;
  align-content: center;
}

.local-llm .hero-meta div {
  padding: 12px 14px;
  border: 1px solid #444;
  border-radius: 10px;
  font-size: 14px;
}

.local-llm .cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.local-llm .card {
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
}

.local-llm .card p {
  margin: 8px 0 18px;
  color: var(--muted);
}

.local-llm .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.local-llm .tag {
  padding: 5px 9px;
  border-radius: 999px;
  background: var(--soft);
  font-size: 12px;
}

.local-llm .memory-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.local-llm .memory {
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

.local-llm .memory strong {
  display: block;
  margin-bottom: 8px;
  font-size: 25px;
}

.local-llm .memory p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.local-llm .steps {
  display: grid;
  gap: 16px;
}

.local-llm .step {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 18px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
}

.local-llm .step-number {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--dark);
  color: white;
  font-weight: 700;
}

.local-llm .step p {
  margin: 8px 0 0;
  color: var(--muted);
}

.local-llm .terminal {
  margin: 16px 0 0;
  padding: 20px;
  overflow-x: auto;
  border-radius: 12px;
  background: #171717;
  color: #eee;
  font-size: 14px;
  line-height: 1.7;
}

.local-llm .terminal .comment {
  color: #777;
}

.local-llm .note {
  margin-top: 18px;
  padding: 18px 20px;
  border-left: 4px solid var(--dark);
  border-radius: 0 10px 10px 0;
  background: var(--surface);
  color: #555;
}

.local-llm .note.green {
  background: var(--green);
}

.local-llm .note.blue {
  background: var(--blue);
}

.local-llm .note.yellow {
  background: var(--yellow);
}

.local-llm .table-wrap {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
}

.local-llm table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
}

.local-llm th,
.local-llm td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.local-llm th {
  color: var(--muted);
  background: #fafaf8;
  font-size: 13px;
}

.local-llm tr:last-child td {
  border-bottom: 0;
}

.local-llm .stars {
  white-space: nowrap;
}

.local-llm .architecture {
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
}

.local-llm .architecture pre {
  margin: 0;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.8;
}

.local-llm .faq {
  border-top: 1px solid var(--line);
}

.local-llm details {
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.local-llm summary {
  cursor: pointer;
  font-weight: 700;
}

.local-llm details p {
  color: var(--muted);
}

.local-llm footer {
  border-top: 1px solid var(--line);
  background: white;
}

.local-llm .footer-inner {
  max-width: 1100px;
  margin: auto;
  padding: 32px 24px;
  color: var(--muted);
  font-size: 13px;
}

@media (max-width: 760px) {
  .local-llm .header-inner {
    padding-top: 48px;
  }

  .local-llm .content {
    padding-top: 42px;
  }

  .local-llm section {
    margin-bottom: 56px;
  }

  .local-llm .hero-recommend,
  .local-llm .cards {
    grid-template-columns: 1fr;
  }

  .local-llm .memory-grid {
    grid-template-columns: 1fr 1fr;
  }

  .local-llm .step {
    grid-template-columns: 42px 1fr;
  }
}

@media (max-width: 480px) {
  .local-llm .memory-grid {
    grid-template-columns: 1fr;
  }

  .local-llm h2 {
    font-size: 27px;
  }
}
`

const Step: FC<{ n: number; title: string; children: ReactNode }> = ({
  n,
  title,
  children,
}) => (
  <div className="step">
    <div className="step-number">{n}</div>
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  </div>
)

const Page: FC = () => (
  <div className="local-llm">
    <style>{css}</style>
    <header>
      <div className="header-inner">
        <div className="eyebrow">LOCAL LLM ON MAC · 2026</div>
        <h1>
          Macで
          <br />
          ローカルLLMをはじめる
        </h1>
        <p className="lead">
          MacBookのメモリだけでLLMを動かしてみよう。
          モデルの選び方から、Ollamaによる環境構築、
          Coding Agentとの連携までを1ページにまとめました。
        </p>
      </div>
    </header>

    <nav>
      <div className="nav-inner">
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>

    <div className="content">
      <section id="start">
        <h2>まず何を使えばいい？</h2>
        <div className="hero-recommend">
          <div>
            <div className="eyebrow">BEST STARTING POINT</div>
            <h2>Ollama + MLX</h2>
            <p>
              Apple SiliconのMacなら、まずOllamaから始めるのがおすすめ。
              モデルのダウンロードから実行までを簡単に扱えます。
              対応モデルではApple Silicon向けのMLXも利用できます。
            </p>
          </div>
          <div className="hero-meta">
            <div>Apple Silicon：M1 / M2 / M3 / M4 / M5</div>
            <div>推奨メモリ：16GB以上</div>
            <div>32GB以上なら大型モデルも現実的</div>
            <div>基本無料・ローカル実行</div>
          </div>
        </div>
        <div className="note green">
          <strong>最初に試すなら：</strong>
          16GBならQwen 3.5 9B、 32GB以上ならQwen 3.5 35B-A3Bがおすすめです。
        </div>
      </section>

      <section id="environment">
        <h2>環境構築</h2>
        <div className="steps">
          {setupSteps.map((s, i) => (
            <Step key={s.title} n={i + 1} title={s.title}>
              <p>{s.text}</p>
              <pre className="terminal">{s.terminal}</pre>
            </Step>
          ))}
        </div>
      </section>

      <section id="models">
        <h2>2026年におすすめのモデル</h2>
        <div className="cards">
          {models.map((m) => (
            <article key={m.name} className="card">
              <h3>{m.name}</h3>
              <p>{m.text}</p>
              <div className="tags">
                {m.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="memory">
        <h2>メモリ容量別のおすすめ</h2>
        <div className="memory-grid">
          {memories.map(([size, text]) => (
            <div key={size} className="memory">
              <strong>{size}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="note yellow">
          <strong>注意：</strong>
          「モデルサイズ＝必要メモリ」ではありません。
          コンテキスト長やKV
          cache、OSや他のアプリケーションが使用するメモリも考慮する必要があります。
        </div>
      </section>

      <section>
        <h2>モデル比較</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {["モデル", "規模", "Q4目安", "推奨メモリ", "主な用途", "おすすめ"].map(
                  (h) => (
                    <th key={h}>{h}</th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {comparison.map(([name, scale, q4, mem, use, stars]) => (
                <tr key={name}>
                  <td>
                    <strong>{name}</strong>
                  </td>
                  <td>{scale}</td>
                  <td>{q4}</td>
                  <td>{mem}</td>
                  <td>{use}</td>
                  <td className="stars">{stars}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="quantization">
        <h2>量子化とは？</h2>
        <div className="intro-box">
          <p>
            LLMのパラメータを少ないビット数で表現して、
            モデルのサイズとメモリ使用量を減らす技術です。
          </p>
          <pre className="terminal">{quantization}</pre>
          <div className="note blue">
            Macで初めて使う場合は、まず<strong>Q4前後</strong>
            のモデルから始めれば十分です。
            量子化方式を細かく理解しなくても、Ollamaならモデルを選んで実行できます。
          </div>
        </div>
      </section>

      <section>
        <h2>MoEモデルがMacと相性がいい理由</h2>
        <div className="intro-box">
          <p>
            MoE（Mixture of
            Experts）は、モデル全体のパラメータを毎回すべて計算するのではなく、
            必要な一部のExpertだけを選択して計算します。
          </p>
          <div className="architecture">
            <pre>{moe}</pre>
          </div>
          <div className="note">
            そのため、
            <strong>「35Bだから27Bより遅い」とは限りません。</strong>
            ローカルLLMではパラメータ総数だけでなく、
            Active Parametersも確認することが重要です。
          </div>
        </div>
      </section>

      <section id="coding">
        <h2>Coding Agentにつなぐ</h2>
        <p>
          ローカルLLMは単純なチャットだけでなく、
          Claude CodeやCodexのようなCoding Agentと組み合わせることもできます。
        </p>
        <div className="architecture">
          <pre>{architecture}</pre>
        </div>
        <div className="note green">
          <strong>おすすめ：</strong>
          32GB以上のMacなら、 Qwen 3.5 35B-A3BをOllamaで動かして
          ローカルCoding Agentを試してみる価値があります。
        </div>
      </section>

      <section>
        <h2>おすすめの始め方</h2>
        <div className="steps">
          {workflow.map(([title, text], i) => (
            <Step key={title} n={i + 1} title={title}>
              <p>{text}</p>
            </Step>
          ))}
        </div>
      </section>

      <section id="faq">
        <h2>FAQ</h2>
        <div className="faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>

    <footer>
      <div className="footer-inner">Mac Local LLM Guide · 2026</div>
    </footer>
  </div>
)

export default Page
