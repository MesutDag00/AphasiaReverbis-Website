# Source Summary

Adapted from `llm-wiki.md`, supplied from a temporary WinRAR extraction folder.

The source describes a persistent LLM-maintained wiki pattern. Instead of retrieving raw document chunks from scratch on every question, Codex incrementally compiles raw sources into an interlinked Markdown wiki. The wiki accumulates summaries, entity pages, concept pages, contradictions, open questions, and durable synthesis over time.

Core architecture:

- `raw sources`: immutable source documents and assets.
- `wiki`: LLM-maintained Markdown synthesis layer.
- `schema`: instructions that define structure, conventions, ingest/query/lint workflows, and update discipline.

Core operations:

- `ingest`: read one or more sources, summarize, cross-reference, update index, and append to log.
- `query`: answer from wiki pages first, then source files when needed; file durable answers back into the wiki.
- `lint`: check contradictions, stale claims, orphan pages, missing links, missing concepts, and source gaps.
