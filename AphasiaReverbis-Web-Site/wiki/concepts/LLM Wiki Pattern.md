# LLM Wiki Pattern

The LLM Wiki pattern uses Codex as the maintainer of a persistent Markdown knowledge base.

## Core Idea

Instead of answering every question from raw documents from scratch, Codex compiles sources into a maintained wiki. The wiki becomes a durable synthesis layer with summaries, concept pages, entity pages, links, contradictions, and open questions.

## Architecture

- Raw sources are immutable and live under `raw/`.
- Wiki pages are maintained by Codex and live under `wiki/`.
- A schema file tells Codex how to ingest, query, index, log, and lint the wiki.

## Operations

- Ingest new source files one at a time or in batches.
- Query the wiki first, then raw sources if needed.
- File valuable answers back into the wiki as durable pages.
- Periodically lint the wiki for stale claims, contradictions, orphan pages, and missing links.

## Related

- Source summary: [[llm-wiki]]
- Index: [[index]]
- Log: [[log]]
