# Project Agent Instructions

This project has two persistent operating modes:

- Use `.codex/skills/lead-developer` when backend architecture, Laravel/PHP design, API workflow, data modeling, DTOs, service/action layers, or tests are requested.
- Use `.codex/skills/llm-wiki-maintainer` when the user asks to ingest documents, maintain the Obsidian vault, build or update a knowledge base, answer from accumulated notes, or lint wiki health.

## Obsidian Vault

The project-local Obsidian vault is `AphasiaReverbis-Web-Site/`.

Treat `AphasiaReverbis-Web-Site/raw/` as immutable source material. Read from it, cite it, and copy new source files into it when the user asks to preserve sources, but do not rewrite source files unless explicitly requested.

Treat `AphasiaReverbis-Web-Site/wiki/` as the LLM-maintained knowledge layer. Update pages, links, summaries, contradictions, and indexes there as knowledge evolves.

Read `AphasiaReverbis-Web-Site/wiki/index.md` before answering wiki-oriented questions, then open the relevant linked pages. Append operations to `AphasiaReverbis-Web-Site/wiki/log.md` using a consistent dated heading.
