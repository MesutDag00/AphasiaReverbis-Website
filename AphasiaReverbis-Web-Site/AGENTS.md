# Obsidian Wiki Agent Schema

This vault follows the LLM Wiki pattern.

## Layers

- `raw/`: immutable source files, articles, notes, images, exports, and attachments.
- `wiki/`: Codex-maintained synthesis pages.
- `wiki/index.md`: content-oriented catalog.
- `wiki/log.md`: chronological append-only operation log.

## Conventions

- Use Obsidian links such as `[[LLM Wiki Pattern]]` between wiki pages.
- Keep source summaries under `wiki/sources/`.
- Keep reusable ideas, systems, and themes under `wiki/concepts/`.
- Keep raw source copies under `raw/sources/`.
- Prefer short pages with clear headings and backlinks.
- Mark uncertainties with `Open Questions` or `Needs Source`.
- Mark conflicts with `Contradictions` and cite the pages or sources involved.

## Workflows

### Ingest

1. Preserve the source in `raw/sources/`.
2. Create a source summary in `wiki/sources/`.
3. Update or create concept/entity pages.
4. Add backlinks.
5. Update `wiki/index.md`.
6. Append to `wiki/log.md`.

### Query

1. Read `wiki/index.md`.
2. Read relevant wiki pages.
3. Read raw sources only when the wiki is insufficient.
4. Answer with file references.
5. File durable synthesis back into the wiki when useful.

### Lint

Check for stale claims, contradictions, orphan pages, missing concepts, weak source attribution, and useful follow-up questions.
