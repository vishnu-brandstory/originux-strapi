# GPT Location Seed Spec

Use this file as system/instructions. Output **only valid JSON** matching the Location collection in this Strapi 5 project. Do not invent fields, sections, or component types.

## Output contract

Root key: `locations` (array of Location entries).

```json
{
  "locations": [ { "...one location page..." } ]
}
```

- Unique identity field: `slug` (string, kebab-case, unique across all location pages).
- Collection UID (for humans, not in JSON): `api::location.location`
- Seed files live at `data/seeds/*.json`. Bootstrap reads `SEED_FILES` in `src/index.js`.
- Draft & publish is on. Seeder creates entries as **published**.
- This collection is **not** a dynamic zone. Do **not** emit `sections`, `__component`, or component UIDs in JSON.

## Hard rules

1. Use **exact** field names below. Case-sensitive. `Title` ≠ `title` at collection root.
2. Use only these named section objects: `hero`, `Results`, `our_approach`, `cta_section`, `Industries`, `services`, `our_process`, `we_offer`, `business_types`, `why_choose_us`, `business_value`, `key_benefits`, `location_faqs`, `footer_cta`.
3. Do not invent sections, nested keys, or extra collections.
4. `location` must be exactly `"US"` or `"IN"`.
5. Skip an entry if `slug` is empty.
6. Localise copy to the city in `Title` / `slug` / body. Do not write generic “our city” placeholders.
7. **Rich copy is required.** One-sentence sections fail this spec. Follow **Content richness** below. Do not use the skeleton’s placeholder sentences as final copy.

## Content richness (required)

Gold standard: [originux.com/us/software-development-company-new-york](https://www.originux.com/us/software-development-company-new-york). Match that **length, paragraph count, and specificity** — not the exact service (adapt offering + city). Do not copy that page verbatim.

A finished Location entry must **fill a long landing page**. Thin pages (one paragraph hero, 12-word cards) are invalid.

### Page-level targets

| Metric | Required |
|---|---|
| Unique body words (all `blocks` + long strings, exclude nav-style labels) | **1,800–2,400** |
| Hero `description` | **3–4 paragraphs**, **180–250 words** |
| `our_approach.description` | **3 paragraphs**, **120–180 words** |
| `why_choose_us.description` | **3 paragraphs**, **100–160 words** |
| Mid + footer CTA `description` | **1–2 paragraphs each**, **40–80 words** |
| `seo_description` | **140–160 characters**, city + offering + outcomes |

### Card / list counts (full page)

Use **at least** these. More is OK. Fewer is not.

| Section | Count | Copy per item |
|---|---|---|
| `Results.our_results` | 3 | Label names an **outcome** (e.g. Faster delivery, System availability). `value` is integer; `Suffix` is `"%"`, `"x"`, `"+"` as needed. |
| `business_types.business_cards` | **6** | **25–40 words**, unique. Cover startups, SMBs, enterprise, SaaS, plus 2 city-relevant verticals. |
| `services.services_cards` | **5** | **20–35 words**. Name a real service line, not “Service 1”. |
| `our_process.process_cards` | **5** | **18–30 words**. Typical: Discover → Strategy & UX → Build → Test → Deploy & support. |
| `we_offer.offer_cards` | **5** | **50–90 words each** (this is the densest section on the live page). |
| `Industries.industries_cards` | **6** | **20–35 words**, **unique per industry**. Name real deliverables for that vertical. |
| `business_value.value_cards` | **4–5** | **20–35 words**. Toolkit / capability style (front-end, back-end, cloud, DevOps, etc.). |
| `key_benefits.benefits_cards` | **5** | **20–35 words**. Business outcomes, not slogans. |
| `location_faqs.faqs_items` | **5–7** | Answer **40–70 words** (2 short paragraphs OK). |

Section intros (`Industries.description`, `services.description`, `business_types` has no intro field — put audience framing in `title` + first cards): **1 paragraph, 25–45 words**, name the city.

### How to write (voice)

- OriginUX B2B: practical, specific, no “we are passionate / cutting-edge synergy”.
- Every major block names the **city**, the **offering**, and **who it is for** (startups / mid-market / enterprise).
- Name real work: SaaS, portals, workflow systems, integrations, modernization, design systems, research — whatever matches the requested offering.
- Name **city-typical industries** (e.g. New York: finance, healthcare, media, retail, real estate, professional services). Change industries for other cities.
- `hero.title` / `Title`: offering + city + outcome, e.g. `"Software Development Company in New York Building Scalable Digital Solutions"` — not city alone, not a 3-word label.
- CTA titles like `"Turn Your Vision into Powerful Software"` + a **consultation** sub_heading. Button: `"Book a consultation"` / `"Get started"` + `/contact`.
- FAQ questions include the city **and** the offering (how to choose a partner, what you build, timeline, modernization, post-launch support).

### Blocks

Long fields use **multiple paragraph nodes**, not one blob and not one 12-word line.

```json
[
  {
    "type": "paragraph",
    "children": [{ "type": "text", "text": "First paragraph. 40–70 words. City, problem, industries." }]
  },
  {
    "type": "paragraph",
    "children": [{ "type": "text", "text": "Second paragraph. 40–70 words. OriginUX, offering, process." }]
  },
  {
    "type": "paragraph",
    "children": [{ "type": "text", "text": "Third paragraph. 30–50 words. Deliverables and outcomes." }]
  }
]
```

### Forbidden thin copy

- One sentence for `hero.description`, `our_approach`, or `why_choose_us`.
- Cards that only say “Card copy.” / “Industry name” / “We help businesses grow.”
- The **same second paragraph** pasted on every industry or service card.
- 3 cards where this spec requires 5–6.
- Invented case-study / client-logo sections (not in this schema).
- Fake office addresses or awards unless the user provided them.

## Media rule

**OMIT all media keys.** Do not send `null`, `""`, fake URLs, or IDs.

Never include:

| Path | Key to omit |
|---|---|
| `hero` | `Image` |
| `why_choose_us` | `image` |
| `business_types.business_cards[]` | `image` |
| `key_benefits.benefits_cards[]` | `image` |

Also never use `img`, `hero_image`, or any upload object. Strapi seeder strips `Image` / `image` / `img` if present, but GPT output must still omit them.

## Formats

| Type | JSON shape |
|---|---|
| `string` | `"text"` |
| `text` | `"longer text"` (plain string, not blocks) |
| `integer` | `120` (number, not `"120"`) |
| `enumeration` | one of the allowed strings |
| `blocks` | array of block nodes (never a plain string) |
| named component | object with that component’s fields |
| repeatable component | array of objects |

### Blocks format

```json
[
  {
    "type": "paragraph",
    "children": [{ "type": "text", "text": "Paragraph here." }]
  }
]
```

Allowed in this spec: `paragraph` nodes with `children[].type = "text"`. Optional `bold` / `italic` on the text node if needed. No HTML. No markdown strings in blocks fields.

## Collection field map (`api::location.location`)

| Field | Type | Notes |
|---|---|---|
| `Title` | string | Offering + city + outcome. **PascalCase.** |
| `seo_title` | string | `"Offering in City | OriginUX"`. |
| `seo_description` | text | **140–160 characters.** Plain string. |
| `slug` | string | Unique kebab slug. Match by this on seed. Example: `ux-ui-design-agency-in-austin` |
| `location` | enum | `"US"` or `"IN"` only. |
| `hero` | component `section.hero` | Non-repeatable. |
| `Results` | component `section.result` | Non-repeatable. **PascalCase.** |
| `our_approach` | component `section.our-approachs` | Non-repeatable. |
| `cta_section` | component `section.cta-section` | Non-repeatable. |
| `Industries` | component `section.industries` | Non-repeatable. **PascalCase.** |
| `services` | component `section.services-section` | Non-repeatable. |
| `our_process` | component `section.our-process` | Non-repeatable. |
| `we_offer` | component `section.we-offer` | Non-repeatable. |
| `business_types` | component `section.business-types` | Non-repeatable. |
| `why_choose_us` | component `section.why` | Non-repeatable. |
| `business_value` | component `section.business-value` | Non-repeatable. |
| `key_benefits` | component `section.key-benefits` | Non-repeatable. |
| `location_faqs` | component `section.location-faqs` | Non-repeatable. |
| `footer_cta` | component `section.footer-cta` | Non-repeatable. |

Do not send `id`, `documentId`, `createdAt`, `updatedAt`, `publishedAt`, `locale`, `localizations`.

## Named section field maps

### `hero` → `section.hero`

| Field | Type | Notes |
|---|---|---|
| `title` | string | Full hero heading: offering + city + outcome. |
| `description` | blocks | **3–4 paragraphs, 180–250 words.** |
| `Image` | media | **OMIT.** |

There is **no** `orangeText`, `highlight`, or `sub_heading` on hero. Do not invent a highlight field. Do not put only the city name in `title`.

### `Results` → `section.result`

| Field | Type | Notes |
|---|---|---|
| `our_results` | repeatable `section.our-results` | Stat cards. |

`our_results[]`:

| Field | Type | Notes |
|---|---|---|
| `value` | integer | Number only. |
| `Suffix` | string | e.g. `"+"`, `"%"`. **PascalCase.** |
| `Title` | string | Outcome label, 3–6 words. **PascalCase.** |

### `our_approach` → `section.our-approachs`

| Field | Type | Notes |
|---|---|---|
| `sub_heading` | string | Short label, e.g. `"Our approach"`. |
| `title` | string | Outcome heading, e.g. `"Our Proven Path to … Excellence"`. |
| `description` | blocks | **3 paragraphs, 120–180 words.** |

### `cta_section` → `section.cta-section`

| Field | Type | Notes |
|---|---|---|
| `title` | string | Strong CTA, e.g. `"Turn Your Vision into Powerful Software"`. |
| `sub_heading` | string | Consultation line, e.g. `"Book Your Free … Consultation Today!"`. |
| `description` | blocks | **1–2 paragraphs, 40–80 words.** List example product types. |
| `button_text` | string | e.g. `"Book a consultation"`. |
| `url` | string | Path or URL. Field name is `url`, **not** `button_url`. |

### `Industries` → `section.industries`

| Field | Type | Notes |
|---|---|---|
| `Heading` | string | **PascalCase.** Not `title` / `heading`. Name city. |
| `description` | blocks | **1 paragraph, 25–45 words.** |
| `industries_cards` | repeatable `section.industries-cards` | **6 unique cards.** |

`industries_cards[]`:

| Field | Type | Notes |
|---|---|---|
| `title` | string | Vertical name. |
| `description` | blocks | **20–35 words.** Specific deliverables. No duplicated blurb. |

### `services` → `section.services-section`

| Field | Type | Notes |
|---|---|---|
| `title` | string | Include city + offering. |
| `description` | blocks | **1 paragraph, 25–45 words.** |
| `services_cards` | repeatable `section.services-cards` | **5 cards.** |

`services_cards[]`: `title` (string), `description` (blocks, **20–35 words**).

### `our_process` → `section.our-process`

| Field | Type | Notes |
|---|---|---|
| `title` | string | e.g. `"Step-by-Step Approach for Successful Development"`. |
| `process_cards` | repeatable `section.process-cards` | **5 steps.** |

`process_cards[]`: `title` (string), `description` (blocks, **18–30 words**). No number field here.

### `we_offer` → `section.we-offer`

| Field | Type | Notes |
|---|---|---|
| `title` | string | |
| `offer_cards` | repeatable `section.offer-cards` | **5 long writeups.** Densest body copy on the page. |

`offer_cards[]`:

| Field | Type | Notes |
|---|---|---|
| `number` | string | e.g. `"01"`. String, not integer. |
| `title` | string | Service line name. |
| `description` | blocks | **50–90 words.** What it includes, who it is for, outcome. |

### `business_types` → `section.business-types`

| Field | Type | Notes |
|---|---|---|
| `title` | string | e.g. `"Businesses That Rely on Us"`. |
| `business_cards` | repeatable `section.business-cards` | **6 audiences.** |

`business_cards[]`: `title` (string), `description` (blocks, **25–40 words**), `image` (**OMIT**).

### `why_choose_us` → `section.why`

| Field | Type | Notes |
|---|---|---|
| `title` | string | e.g. `"Why Us? The OriginUX Advantage"`. |
| `description` | blocks | **3 paragraphs, 100–160 words.** |
| `image` | media | **OMIT.** |

### `business_value` → `section.business-value`

| Field | Type | Notes |
|---|---|---|
| `title` | string | Toolkit / capability heading. |
| `value_cards` | repeatable `section.bussiness-value-card` | UID spelling is `bussiness` (two s). Do not “correct” it. JSON key is still `value_cards`. **4–5 cards.** |

`value_cards[]`: `title` (string), `description` (blocks, **20–35 words**).

### `key_benefits` → `section.key-benefits`

| Field | Type | Notes |
|---|---|---|
| `title` | string | e.g. `"What You Achieve Through Our … Services"`. |
| `benefits_cards` | repeatable `section.key-benefits-cards` | **5 outcomes.** |

`benefits_cards[]`: `title` (string), `description` (blocks, **20–35 words**), `image` (**OMIT**).

### `location_faqs` → `section.location-faqs`

| Field | Type | Notes |
|---|---|---|
| `title` | string | |
| `faqs_items` | repeatable `section.faqs-cards` | **5–7 items.** |

`faqs_items[]`:

| Field | Type | Notes |
|---|---|---|
| `question` | string | Include city + offering. |
| `answer` | blocks | **40–70 words.** Not a string. |

### `footer_cta` → `section.footer-cta`

| Field | Type | Notes |
|---|---|---|
| `title` | string | City + offering, e.g. `"Build Scalable Software for Your New York Business"`. |
| `sub_heading` | string | Same consultation line as mid-CTA is OK. |
| `description` | blocks | **1–2 paragraphs, 50–80 words.** |
| `button_text` | string | |
| `button_url` | string | Field name is `button_url`, **not** `url`. |

## Recommended section order (full page)

Keep this object key order in each entry:

1. `Title`, `seo_title`, `seo_description`, `slug`, `location`
2. `hero`
3. `Results`
4. `our_approach`
5. `cta_section`
6. `Industries`
7. `services`
8. `our_process`
9. `we_offer`
10. `business_types`
11. `why_choose_us`
12. `business_value`
13. `key_benefits`
14. `location_faqs`
15. `footer_cta`

Suggested card counts for a full page: **3 stats, 6 industry cards, 5 service cards, 5 process cards, 5 offer cards, 6 business-type cards, 4–5 value cards, 5 benefit cards, 5–7 FAQs.** See Content richness. Thin 3-card pages are invalid.

## Banner / title rule

Hero has only `title` + `description`. No highlight/orange field.

- `hero.title` and collection `Title` = full heading: offering + city + outcome, e.g. `"UX/UI Design Agency in Austin Building Products Teams Can Ship"`.
- Do not set `title` to city alone (`"Austin"`).
- Do not split a suffix into a fake `orangeText` field.
- Short labels belong in `our_approach.sub_heading`, `cta_section.sub_heading`, or `footer_cta.sub_heading` only.

## Localisation rules (city / country)

- One entry = one city (or metro). `slug` includes that city in kebab-case.
- `location`: `"US"` for United States cities, `"IN"` for India cities. Never mix (e.g. Bengaluru + `"US"`).
- Repeat the city name in `Title`, `seo_title`, `hero.title`, section headings, and **most FAQ questions**.
- Name **3+ industries or business types that actually operate in that city**. Do not reuse New York finance/media copy for a different city.
- Write for that market: US English for `"US"`, Indian English is fine for `"IN"` (e.g. “organisation” optional; keep product terms consistent).
- CTAs may use `/contact` unless a city-specific path is given.
- Do not copy another city’s landmarks, regulations, or “local office” claims unless provided.
- Do not clone [the New York software page](https://www.originux.com/us/software-development-company-new-york) word-for-word. Steal **structure and word count** only.

## Schema skeleton (structure only)

This JSON shows **keys only**. Replace every short string with richness-rule copy before shipping. Do **not** output a page that looks like this skeleton.

```json
{
  "locations": [
    {
      "Title": "UX/UI Design Agency in City",
      "seo_title": "UX/UI Design Agency in City | Origin UX",
      "seo_description": "Short meta description that names the city.",
      "slug": "ux-ui-design-agency-in-city",
      "location": "US",
      "hero": {
        "title": "UX/UI Design Agency in City",
        "description": [
          {
            "type": "paragraph",
            "children": [{ "type": "text", "text": "One intro paragraph." }]
          }
        ]
      },
      "Results": {
        "our_results": [
          { "value": 10, "Suffix": "+", "Title": "Projects" }
        ]
      },
      "our_approach": {
        "sub_heading": "Our approach",
        "title": "Section title",
        "description": [
          {
            "type": "paragraph",
            "children": [{ "type": "text", "text": "Approach copy." }]
          }
        ]
      },
      "cta_section": {
        "title": "CTA title",
        "sub_heading": "Let’s talk",
        "description": [
          {
            "type": "paragraph",
            "children": [{ "type": "text", "text": "CTA copy." }]
          }
        ],
        "button_text": "Book a call",
        "url": "/contact"
      },
      "Industries": {
        "Heading": "Industries heading",
        "description": [
          {
            "type": "paragraph",
            "children": [{ "type": "text", "text": "Industries intro." }]
          }
        ],
        "industries_cards": [
          {
            "title": "Industry name",
            "description": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Card copy." }]
              }
            ]
          }
        ]
      },
      "services": {
        "title": "Services title",
        "description": [
          {
            "type": "paragraph",
            "children": [{ "type": "text", "text": "Services intro." }]
          }
        ],
        "services_cards": [
          {
            "title": "Service name",
            "description": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Card copy." }]
              }
            ]
          }
        ]
      },
      "our_process": {
        "title": "Process title",
        "process_cards": [
          {
            "title": "Step name",
            "description": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Step copy." }]
              }
            ]
          }
        ]
      },
      "we_offer": {
        "title": "Offer title",
        "offer_cards": [
          {
            "number": "01",
            "title": "Offer name",
            "description": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Offer copy." }]
              }
            ]
          }
        ]
      },
      "business_types": {
        "title": "Who we partner with",
        "business_cards": [
          {
            "title": "Startups",
            "description": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Card copy." }]
              }
            ]
          }
        ]
      },
      "why_choose_us": {
        "title": "Why choose us",
        "description": [
          {
            "type": "paragraph",
            "children": [{ "type": "text", "text": "Why copy." }]
          }
        ]
      },
      "business_value": {
        "title": "Business value",
        "value_cards": [
          {
            "title": "Value name",
            "description": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Card copy." }]
              }
            ]
          }
        ]
      },
      "key_benefits": {
        "title": "Key benefits",
        "benefits_cards": [
          {
            "title": "Benefit name",
            "description": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Card copy." }]
              }
            ]
          }
        ]
      },
      "location_faqs": {
        "title": "FAQs",
        "faqs_items": [
          {
            "question": "Question that names the city?",
            "answer": [
              {
                "type": "paragraph",
                "children": [{ "type": "text", "text": "Answer copy." }]
              }
            ]
          }
        ]
      },
      "footer_cta": {
        "title": "Footer title",
        "sub_heading": "Ready when you are",
        "description": [
          {
            "type": "paragraph",
            "children": [{ "type": "text", "text": "Footer copy." }]
          }
        ],
        "button_text": "Start a project",
        "button_url": "/contact"
      }
    }
  ]
}
```

Clone `data/seeds/originux-web-app-development-location-pages-1200-1400-words.json` for a **long-form** example.

## Common mistakes

| Mistake | Fix |
|---|---|
| Root key `locationPages` / `location` | Use `locations` |
| `title` at collection root | Use `Title` |
| `results` / `industries` | Use `Results` / `Industries` |
| `Industries.title` or `heading` | Use `Heading` |
| `our_results[].suffix` / `title` | Use `Suffix` / `Title` |
| Dynamic zone: `sections` + `__component` | Named objects only; no `__component` |
| `hero.orangeText` / `highlight` | Does not exist; full heading in `hero.title` |
| Media keys (`Image`, `image`, `img`, URLs) | Omit entirely |
| `location: "USA"` / `"India"` | `"US"` or `"IN"` |
| `cta_section.button_url` | Use `cta_section.url` |
| `footer_cta.url` | Use `footer_cta.button_url` |
| `offer_cards[].number` as integer | String `"01"` |
| `our_results[].value` as string | Integer |
| FAQ `answer` as string | Blocks array |
| Blocks as markdown string | Blocks array of paragraph nodes |
| Invented industry-page fields (`banner`, `seo`, `Why`) | Location schema only |
| Empty `slug` | Unique kebab slug required |
| One-sentence hero / approach / why | 3–4 / 3 / 3 paragraphs; see word floors |
| 3 industry or audience cards | **6** each |
| Duplicate industry/service blurbs | Unique deliverables per card |
| `we_offer` cards under ~50 words | **50–90 words** each |
| 4 short FAQs | **5–7** FAQs, **40–70 word** answers |
| Body under ~1,200 unique words | **1,800–2,400** |

## How seed runs

1. Put JSON in `data/seeds/`.
2. Add the relative path to `SEED_FILES` in `src/index.js` if it is a new file.
3. Restart Strapi.
4. Existing `slug` values are updated. New slugs are created and published.
