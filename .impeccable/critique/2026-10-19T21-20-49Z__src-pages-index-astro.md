---
target: home + casos de estudio del portfolio
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:D:\\Proyectos\\Portfolio\\src\\pages\\index.astro"
target_fingerprint: "sha256:bd51241a343dee2c88b1a0be48926d5e7a3e19ddd0a552f270a24ab3091f6fca"
target_path: "D:\\Proyectos\\Portfolio\\src\\pages\\index.astro"
timestamp: 2026-10-19T21-20-49Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | No active-section indicator in nav |
| 2 | Match System / Real World | 2 | REF/FIG/Anexo metaphor and dev terms (line item properties, header.tpl) ask SME clients to translate |
| 3 | User Control and Freedom | 3 | Mobile sheets offer no way back to index |
| 4 | Consistency and Standards | 3 | Consistent to the point of monotony; "Estado" duplicated per sheet |
| 5 | Error Prevention | 3 | Contact selector prebuilds the message |
| 6 | Recognition Rather Than Recall | 3 | On mobile callouts sit 600px+ from their plate |
| 7 | Flexibility and Efficiency | n/a | Portfolio surface |
| 8 | Aesthetic and Minimalist Design | 2 | Excess labels/rules, triple project listing, unreadable thumbnails |
| 9 | Error Recovery | 3 | Own 404, low-risk surface |
| 10 | Help and Documentation | n/a | Portfolio surface |
| Total | | 22/32 | Acceptable |

## Design Specificity Verdict
Authored, not category-interchangeable (big leap from the previous dark card grid). But the catalog system shows more than the content: four identical sheets read as a datasheet, not an editorial. Detector: 8 advisory DESIGN.md drifts (7 font sizes, 1 color #fff in Track); browser overlay: oversized h1 (real), heading rhythm in Services (real), long all-caps legend (real), low-contrast nav (false positive, real ~9:1), tight-leading (boundary FP), plate clipping (intentional).

## Priority Issues
- [P1] Four identical sheet layouts → vary composition per project (layout, bolder)
- [P1] Screenshots not protagonists; no imagery in first viewport at 1280x800 → plates 75–100% width, remove home thumbnail strip, cap display size on laptops (layout)
- [P1] Label/rule overdensity → single spec table, technical tags only in case pages, drop "Señalá un número" (distill/quieter)
- [P2] Same 4 projects listed three times (index, previews, sheets) → merge index + previews (distill)
- [P2] Middle stretch is three ruled tables; Trayectoria buried → editorial pause, ink ground, display-size figure, personal presence (bolder/typeset)
- [P2] Mobile home ~13,950px → compact sheets on home (adapt)
- [P3] Case pages open with the same sheet → full-bleed opening, full-width details (layout)
- [P3] Polish: nav active state, orphan "Productos digitales", all-caps legend, Services heading rhythm, token drift (polish)

## Persona Red Flags
- First-time SME owner: REF/FIG/line item properties do not say what she gains.
- Distracted mobile visitor from WhatsApp: 14k px, cut-off carousel not read as scrollable.
- Stressed scanner: 130px figure caption wrapping in three lines; display names breaking unevenly.

## Minor Observations
Gold Vision markers cluster on the right column; n8n dark plate on gray mount reads accidental; footer repeats the metaphor; wa.me link carries an extra `tipo` param.

## Questions
1. What if the catalog lived in only three gestures (REF tab, callouts, contact band)?
2. What if each project had its own spread composition?
3. Why is $8M → $130M not as large as "SawDust"?
