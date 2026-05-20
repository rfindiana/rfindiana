# Sitepins Content Schemas

Schemas live in `.sitepins/schema/*.json` and define the form Sitepins presents when editing content. Each one mirrors the corresponding Astro Zod schema in `src/content.config.ts`, which is what actually validates the frontmatter at build time. **If the two diverge, Astro is the authoritative source — Cloudflare builds will fail if frontmatter doesn't match Astro's schema.**

## Restricted-value fields (no native dropdown)

Sitepins does not have a working dropdown / select field type. The 8 supported field types are: **String, Number, Boolean, Media, Gallery, Array, Date, Object**. Fields whose Zod schema is an enum render as plain string inputs — users must type one of the valid values exactly.

Each restricted field's schema includes a `description` that displays the valid values as help text below the input in the Sitepins editor.

| Collection | Field | Valid values |
|------------|-------|--------------|
| `events` | `status` | `upcoming`, `past` |
| `meetings` | `meetingType` | `virtual`, `physical` |
| `organizations` | `category` | `national`, `statewide`, `local` |

If a user mistypes one of these, Cloudflare's build will fail with an Astro `InvalidContentEntryDataError`.

## Known limitations

- **No native dropdown.** See above.
- **`required: true` is not persisted.** Sitepins recognizes the property visually (the Required toggle in the schema editor shows it) but strips it on save. Astro's Zod check is the only required-field guardrail.
- **Editing a schema in the Sitepins UI may strip the top-level `name` property.** The schema still works, but the resulting commit message will say "Update undefined schema by Sitepins" instead of the schema name.
- **Sitepins and your local clone both have write access to the same branch.** Always `git pull` before editing locally if Sitepins activity might be in flight, and refresh Sitepins after pushing local changes.

## Adding a schema for a new collection

1. Define the Zod schema in `src/content.config.ts` and register it in `collections`.
2. Create `.sitepins/schema/<collection>.json` with the same field shape:
   - Top-level: `file` (path to a representative content file), `name` (collection name), `fileType: "md"`, `fmType: "yaml"`, `template` (array of fields).
   - Each field: `name`, `label`, `type` (one of the 8 supported), `value`, `isIgnored: false`, `defaultValue`, and optionally `description`.
3. Commit and push to `staging`. Sitepins will pick up the new schema on next refresh.

## Editing existing schemas

You can edit schema JSON either:
- **Directly in this repo** (more reliable for getting the exact shape you want), or
- **Via Sitepins → Settings → Schemas → Edit** (easier, but may reformat the file and strip properties).

If you edit in the Sitepins UI, expect Sitepins to commit the change as `Sitepins[bot]` and you'll need to `git pull` to sync locally.

## Field type guidance

| Astro Zod type | Use Sitepins type | Notes |
|----------------|-------------------|-------|
| `z.string()` | `string` | Default; works for dates stored as strings (e.g., "2025-04-13") |
| `z.string()` with date semantics + `z.coerce.date()` | `string` | Don't use Sitepins `date` type unless you've verified it writes a format Astro can re-parse |
| `z.number()` | `number` | Used for `sortOrder` fields |
| `z.boolean()` | `boolean` | Used for `team.draft` |
| `z.enum([...])` | `string` + `description` | See "Restricted-value fields" above |
| `z.object({...})` | `object` with nested `template` | Used for `team.avatar` |
