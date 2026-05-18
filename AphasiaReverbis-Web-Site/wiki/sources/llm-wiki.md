# llm-wiki

Source file: `raw/sources/llm-wiki.md`

## Summary

`llm-wiki.md` describes a pattern for building personal or team knowledge bases with an LLM as the maintainer. The LLM reads immutable raw sources and incrementally updates a Markdown wiki that accumulates summaries, links, contradictions, and synthesis over time.

The document emphasizes that the wiki should compound. New sources update existing pages instead of remaining isolated uploads. Queries can also create durable wiki pages when they produce reusable analysis.

## Key Points

- Raw sources should remain unchanged.
- The wiki is the generated and maintained synthesis layer.
- A schema file guides the LLM's conventions and workflows.
- `index.md` helps navigation by topic and page.
- `log.md` records ingests, queries, lint passes, and schema changes chronologically.
- Obsidian is a strong interface for browsing links and graph structure.
- Optional tools like local Markdown search, Dataview, Marp, and attachment handling can improve the workflow.

## Related

- Concept: [[LLM Wiki Pattern]]
- Index: [[index]]
