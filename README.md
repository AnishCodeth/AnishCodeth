<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=240&section=header&text=Anish%20Subedi&fontSize=72&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Backend%20Systems%20%C3%97%20Applied%20AI&descAlignY=60&descSize=22" />
</p>

<p align="center">
  <img src="assets/pixel-me.png" width="190" alt="Pixel art of Anish Subedi" />
</p>

<p align="center">
  <a href="https://anishcodeth.github.io/">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=2800&pause=800&color=36BCF7&center=true&vCenter=true&width=760&lines=Backend+%2B+AI%2C+one+stack.;APIs%2C+queues%2C+real-time+systems.;Embeddings%2C+agents%2C+OCR%2C+recommenders.;From+request+to+inference." />
  </a>
</p>

<p align="center">
  <a href="https://anishcodeth.github.io/"><img src="https://img.shields.io/badge/PORTFOLIO-0F172A?style=for-the-badge&logo=vercel&logoColor=white"/></a>
  <a href="https://linkedin.com/in/anishcodeth/"><img src="https://img.shields.io/badge/LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="mailto:anishsubedi11@gmail.com"><img src="https://img.shields.io/badge/EMAIL-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
  <img src="https://komarev.com/ghpvc/?username=AnishCodeth&style=for-the-badge&color=36BCF7&label=VISITS"/>
</p>

---

## `~/whoami`

```ts
// backend.ts
const anish = {
  location: "Pokhara, Nepal",
  backend: ["TypeScript", "Node.js", "NestJS", "Express", "FastAPI"],
  data:    ["PostgreSQL", "Redis", "MongoDB", "MinIO"],
  infra:   ["Docker", "BullMQ", "WebSockets", "MQTT", "k6", "Jest"],
  auth:    ["OAuth2", "OIDC", "JWT"],
  builds:  "services that stay up under load",
} as const;
```

```python
# ai.py
anish = {
    "languages": ["Python"],
    "frameworks": ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph"],
    "techniques": ["NLP", "OCR (CNN-LSTM + CTC)", "embeddings", "HDBSCAN clustering", "recommenders"],
    "deploys_with": ["ONNX", "FastAPI"],
    "builds": "models that ship, not just notebooks",
}
```

---

## ⚙️ Two halves, one engineer

<table>
<tr>
<td width="50%" valign="top">

### 🔧 Backend

**I design for failure first.**
- **Money paths that can't double-charge.** Purchase validation across Google Play and the App Store is idempotent, so retries, webhooks and duplicate events are safe.
- **Slow work stays off the request path.** Notifications and heavy jobs run through queues and workers, driven by change-data-capture events instead of tightly coupled calls.
- **Multi-tenant by design.** One platform serves many products, with tenant isolation, leaderboards, battle-pass logic and admin tooling built in.

**I build for load, then prove it.**
- Real-time systems over WebSockets and MQTT, from live multiplayer state to payment alerts pushed to physical devices.
- Load-tested with k6 against realistic concurrency, so capacity is measured instead of guessed.

**I treat the boundary as a product.**
- A centralized identity gateway (OAuth2 / OIDC) so every service authenticates the same way.
- Webhook signature verification at every external entry point.
- OpenAPI contracts and typed SDKs, so other teams integrate without reading my code.

**I keep it maintainable.**
- Dependency injection and the repository pattern, so business logic can be tested without infrastructure.
- Integration tests against real databases and queues with Testcontainers, not mocks that drift from production.

</td>
<td width="50%" valign="top">

### 🧠 AI

**I start from the decision the model supports.**
- **Recommendation systems** that predict what a customer is likely to buy, built around a business outcome rather than a leaderboard metric.
- **Agentic workflows** with LangGraph, including a Text-to-SQL engine, where the graph structure controls how the agent reasons, retries and recovers.

**I make unstructured data usable.**
- **Embeddings plus HDBSCAN clustering** to organize a knowledge base without hand-labeled categories.
- **Handwritten Nepali OCR** with a CNN-LSTM trained with CTC loss, with preprocessing that includes adaptive binarization and header-line detection.

**I care about what happens after training.**
- Models exported to ONNX for portable, lightweight inference.
- Served behind typed APIs, so the AI part is a dependable service that the rest of the system can call.

**I know the tools underneath.**
- PyTorch and TensorFlow for model building, Hugging Face for transformer-based NLP, LangChain and LangGraph for orchestration.

</td>
</tr>
</table>

---

## 🧰 Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=ts,js,py,nodejs,nestjs,fastapi,express,postgres,redis,mongodb,docker,pytorch,tensorflow,react&perline=7" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/BullMQ-DC382D?style=flat-square&logo=redis&logoColor=white"/>
  <img src="https://img.shields.io/badge/MQTT-660066?style=flat-square&logo=mqtt&logoColor=white"/>
  <img src="https://img.shields.io/badge/WebSockets-010101?style=flat-square&logo=socketdotio&logoColor=white"/>
  <img src="https://img.shields.io/badge/k6-7D64FF?style=flat-square&logo=k6&logoColor=white"/>
  <img src="https://img.shields.io/badge/Hugging_Face-FFCC00?style=flat-square&logo=huggingface&logoColor=black"/>
  <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langchain&logoColor=white"/>
  <img src="https://img.shields.io/badge/ONNX-005CED?style=flat-square&logo=onnx&logoColor=white"/>
</p>

---

## 🚀 Featured Projects

<table>
<tr>
<td width="33%" valign="top">
<h3>🍛 Thaali</h3>
Real-time restaurant ordering with live order tracking and notifications.<br/><br/>
<sub><code>Node.js</code> <code>Express</code> <code>PostgreSQL</code> <code>React</code> <code>WebSockets</code></sub><br/><br/>
<a href="https://github.com/AnishCodeth/thaali_the-untold">View repo →</a>
</td>
<td width="33%" valign="top">
<h3>✍️ Nepali Handwritten OCR</h3>
Handwritten Nepali text recognition with CNN-LSTM and CTC loss.<br/><br/>
<sub><code>PyTorch</code> <code>OpenCV</code> <code>CTC</code></sub><br/><br/>
<a href="https://github.com/AnishCodeth/OCR_Neplai">View repo →</a>
</td>
<td width="33%" valign="top">
<h3>🧲 BitTorrent Client</h3>
Custom client using UDP trackers and TCP/IP, with multi-threaded downloads.<br/><br/>
<sub><code>Python</code> <code>TCP/UDP</code> <code>Threads</code></sub><br/><br/>
<a href="https://github.com/AnishCodeth/torrent-client">View repo →</a>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<h3>🤖 Agentic Text-to-SQL</h3>
A LangGraph-based agentic task engine that turns natural language into SQL.<br/><br/>
<sub><code>LangGraph</code> <code>Python</code></sub>
</td>
<td width="33%" valign="top">
<h3>⚽ PremierAI</h3>
An AI agent for Fantasy Premier League decisions.<br/><br/>
<sub><code>Python</code> <code>Agents</code></sub>
</td>
<td width="33%" valign="top">
<h3>🗂️ Knowledge Base Curator</h3>
Organizes documents with embeddings and HDBSCAN clustering, served via ONNX.<br/><br/>
<sub><code>Embeddings</code> <code>HDBSCAN</code> <code>ONNX</code></sub>
</td>
</tr>
</table>

---

## 🐍 Snake vs my contributions

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/AnishCodeth/AnishCodeth/output/github-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/AnishCodeth/AnishCodeth/output/github-snake.svg" />
    <img alt="snake eating my contribution graph" src="https://raw.githubusercontent.com/AnishCodeth/AnishCodeth/output/github-snake-dark.svg" />
  </picture>
</p>

---

## 🏅 Achievements

<p align="center">
  <a href="https://github.com/AnishCodeth?tab=achievements"><img src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png" width="85" title="Quickdraw"/></a>&nbsp;&nbsp;
  <a href="https://github.com/AnishCodeth?tab=achievements"><img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" width="85" title="Pull Shark"/></a>&nbsp;&nbsp;
  <a href="https://github.com/AnishCodeth?tab=achievements"><img src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" width="85" title="YOLO"/></a>
</p>

---

## 📊 Stats

<p align="center">
  <img height="170" src="https://github-readme-stats.vercel.app/api?username=AnishCodeth&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" />
  <img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=AnishCodeth&layout=compact&theme=tokyonight&hide_border=true" />
</p>
<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=AnishCodeth&theme=tokyonight&hide_border=true" />
</p>
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=AnishCodeth&theme=tokyo-night&hide_border=true&area=true&custom_title=Contribution%20Activity" />
</p>

---

## 📫 Let's build something

```bash
$ ping anish
> reply from anishsubedi11@gmail.com: time=<1 coffee
```

<p align="center">
  <a href="https://anishcodeth.github.io/"><img src="https://img.shields.io/badge/Portfolio-visit-36BCF7?style=for-the-badge"/></a>
  <a href="mailto:anishsubedi11@gmail.com"><img src="https://img.shields.io/badge/Email-say_hi-D14836?style=for-the-badge"/></a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=110&section=footer" />
</p>
