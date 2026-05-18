---
name: llm-wiki-maintainer
description: Maintain a persistent Obsidian/Markdown LLM wiki from raw sources. Use when the user asks to scan, ingest, summarize, cross-reference, index, query, lint, or evolve project knowledge files, especially inside an Obsidian vault.
---

# LLM Wiki Maintainer

Use this skill to maintain a persistent, compounding Markdown wiki. The raw source collection is the source of truth; the wiki is the synthesized layer that Codex updates over time.

## Local Layout

- Raw sources: `Palinga-Web-Site/raw/`
- Wiki pages: `Palinga-Web-Site/wiki/`
- Main index: `Palinga-Web-Site/wiki/index.md`
- Chronological log: `Palinga-Web-Site/wiki/log.md`

## Core Rules

- Never rewrite raw sources unless the user explicitly asks.
- Write and maintain wiki pages as structured Markdown with Obsidian links.
- Prefer small, well-linked pages over one large dump.
- Update the index after every ingest or substantial wiki change.
- Append to the log after every ingest, query-to-page, lint pass, or schema update.
- Preserve uncertainty. Mark contradictions, stale claims, open questions, and missing sources clearly.
- Cite source files with local paths or wiki source pages when making claims.

## Ingest Workflow

1. Identify the source file and copy it into `raw/sources/` if it is not already preserved there.
2. Read the source and extract durable facts, entities, concepts, decisions, risks, and open questions.
3. Create or update a source summary page under `wiki/sources/`.
4. Create or update concept/entity pages under `wiki/concepts/` or another appropriate category.
5. Add backlinks between related pages using Obsidian-style `[[Page Name]]` links.
6. Update `wiki/index.md`.
7. Append a dated `ingest` entry to `wiki/log.md`.

## Query Workflow

1. Read `wiki/index.md` first.
2. Open the most relevant wiki pages, then raw sources only when needed.
3. Answer with citations to wiki/source files.
4. If the answer produces durable synthesis, ask or decide conservatively whether to file it as a wiki page.
5. If filed, update index and log.

## Lint Workflow

Periodically inspect the wiki for:

- contradictions between pages
- stale claims superseded by newer sources
- orphan pages with no inbound or outbound links
- important concepts without pages
- missing backlinks
- unclear source attribution
- promising follow-up questions or source gaps

When linting, produce a short findings list and apply safe maintenance edits directly when the fix is obvious.
