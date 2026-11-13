---
name: design
description: Create, design, build, and evaluate high-quality websites and user interfaces using diverse visual styles, professional color systems, typography, multimedia, responsive layouts, and functional interactions.
---

# Design — UI/UX Design System & Website Creation

## 1. Purpose

This skill provides a comprehensive design system and implementation methodology for creating professional, visually distinctive, modern, and functional digital experiences.

Use this skill when designing, building, redesigning, improving, or reviewing:

- Websites and landing pages.
- SaaS platforms and dashboards.
- Developer tools and documentation portals.
- Educational platforms and interactive tutorials.
- Portfolios and personal websites.
- Corporate and business websites.
- E-commerce interfaces.
- Creative and experimental websites.
- Product presentations and showcases.
- Multimedia experiences.
- Web applications and interactive interfaces.

The objective is not to impose one visual style on every project.

Instead, analyze the project, understand its purpose and audience, and select an appropriate visual direction.

Every design should have its own visual identity while following consistent principles of hierarchy, usability, accessibility, composition, and visual quality.

---

# 2. Core Design Philosophy

Follow these principles throughout the design and implementation process.

1. **Visual identity over generic templates.** Every project should have a recognizable and intentional design language.
2. **Content before decoration.** Visual elements must support the content rather than compete with it.
3. **Readability before complexity.** Typography, contrast, spacing, and hierarchy must remain clear.
4. **Purposeful color.** Colors should reinforce the identity and communicate meaningful information.
5. **Functional beauty.** Interactive elements must work as expected.
6. **Composition matters.** Use alignment, whitespace, proportions, and rhythm to create polished layouts.
7. **Consistency without monotony.** Components should share a visual language without making every section look identical.
8. **Responsive by design.** Every interface must work across desktop, tablet, and mobile.
9. **Multimedia with intention.** Images, illustrations, audio, and video should improve the experience when appropriate.
10. **Quality over visual effects.** Avoid unnecessary decoration, excessive gradients, and generic design trends.

---

# 3. Visual Design Directions

Select a visual direction based on the project's identity, audience, content, and purpose.

Do not automatically apply the same aesthetic to every project.

## 3.1 Minimalist

Characteristics:

- Clean and understated composition.
- Generous whitespace.
- Restrained color palette.
- Simple typography.
- Thin borders and subtle separators.
- Minimal decorative elements.
- Strong content hierarchy.

Best for:

- Documentation.
- Developer tools.
- Professional websites.
- Product pages.
- Technical platforms.

## 3.2 Editorial

Characteristics:

- Typography-driven composition.
- Large, expressive headlines.
- Strong text hierarchy.
- Asymmetric layouts.
- Magazine-inspired grids.
- Carefully selected imagery.
- Generous spacing.

Best for:

- Publications.
- Personal portfolios.
- Creative studios.
- Educational content.
- Storytelling websites.

## 3.3 Developer / Technical

Characteristics:

- Monospaced typography for technical content.
- Terminal and code demonstrations.
- Structured information layouts.
- Subtle borders.
- Dark or neutral surfaces.
- Syntax highlighting.
- Interactive configuration examples.

Best for:

- Developer tools.
- CLI applications.
- API documentation.
- Technical tutorials.
- Programming platforms.

## 3.4 Modern / Contemporary

Characteristics:

- Refined typography.
- Balanced layouts.
- Carefully controlled gradients.
- Soft surfaces.
- Modern component styling.
- Subtle motion.
- Clear visual hierarchy.

Best for:

- SaaS products.
- Startups.
- Modern applications.
- Technology companies.

## 3.5 Brutalist / Experimental

Characteristics:

- Strong typography.
- High contrast.
- Bold geometric compositions.
- Unconventional alignment.
- Distinctive grids.
- Expressive colors.
- Intentional visual tension.

Best for:

- Creative portfolios.
- Experimental projects.
- Design studios.
- Artistic experiences.

## 3.6 Corporate / Professional

Characteristics:

- Clear information architecture.
- Trustworthy visual language.
- Restrained colors.
- Consistent spacing.
- Professional typography.
- Structured content.
- Accessible components.

Best for:

- Business websites.
- Corporate platforms.
- Institutional websites.
- Professional services.

## 3.7 Creative / Visual

Characteristics:

- Image-led compositions.
- Expressive typography.
- Rich visual storytelling.
- Layered elements.
- Art-directed layouts.
- Controlled animations.
- Distinctive visual identity.

Best for:

- Agencies.
- Creative portfolios.
- Photography.
- Branding.
- Multimedia presentations.

## 3.8 Futuristic / Digital

Characteristics:

- Dark or high-contrast surfaces.
- Technical typography.
- Geometric elements.
- Controlled luminous accents.
- Subtle gradients.
- Data visualization.
- Carefully implemented animations.

Best for:

- AI products.
- Technology platforms.
- Digital products.
- Experimental interfaces.

### Important selection rule

These directions are references, not restrictive templates.

Combine compatible directions when appropriate, but maintain one coherent visual identity.

Do not mix unrelated aesthetics simply to make the interface look more elaborate.

---

# 4. Color Systems and Palettes

Color is a fundamental part of visual identity.

Every project should use a deliberate and cohesive color system.

Never rely on random colors or scattered hexadecimal values throughout the implementation.

Define colors through CSS custom properties and semantic design tokens.

## 4.1 Palette A — Midnight Developer

Dark, understated, technical.

```css
[data-theme="midnight"] {
  color-scheme: dark;
  --bg: #181818;
  --surface: #202020;
  --surface-muted: #292929;
  --text: #e6e6e6;
  --text-muted: #a0a0a0;
  --border: #343434;
  --accent: #7aa2f7;
  --accent-secondary: #7dcfff;
  --success: #9ece6a;
  --warning: #e0af68;
  --danger: #f7768e;
  --code-bg: #111111;
}
```

## 4.2 Palette B — Paper Editorial

Warm, clean, sophisticated.

```css
[data-theme="paper"] {
  color-scheme: light;
  --bg: #f8f8f5;
  --surface: #ffffff;
  --surface-muted: #efefe9;
  --text: #20211f;
  --text-muted: #686b65;
  --border: #d9dad3;
  --accent: #386b59;
  --accent-secondary: #285c91;
  --success: #26734d;
  --warning: #936414;
  --danger: #b33c37;
  --code-bg: #eeefe9;
}
```

## 4.3 Palette C — Warm Workshop

Earthy, comfortable, human.

```css
[data-theme="workshop"] {
  color-scheme: light;
  --bg: #f5f0e7;
  --surface: #fffaf1;
  --surface-muted: #eae1d3;
  --text: #302a24;
  --text-muted: #766a5c;
  --border: #d7c9b6;
  --accent: #a34e32;
  --accent-secondary: #355f83;
  --success: #47734b;
  --warning: #95601b;
  --danger: #ad3933;
  --code-bg: #eee5d7;
}
```

## 4.4 Palette D — Forest Terminal

Organic, technical, dark.

```css
[data-theme="forest"] {
  color-scheme: dark;
  --bg: #151b18;
  --surface: #1d2721;
  --surface-muted: #27352c;
  --text: #e1e9df;
  --text-muted: #a1b2a2;
  --border: #394c3d;
  --accent: #b6d67a;
  --accent-secondary: #8ccfc0;
  --success: #a7d987;
  --warning: #e4c778;
  --danger: #ee9288;
  --code-bg: #101612;
}
```

## 4.5 Palette E — Lavender Night

Soft, sophisticated, contemporary.

```css
[data-theme="lavender-night"] {
  color-scheme: dark;
  --bg: #1e1e2e;
  --surface: #242438;
  --surface-muted: #313149;
  --text: #cdd6f4;
  --text-muted: #a6adc8;
  --border: #45475a;
  --accent: #cba6f7;
  --accent-secondary: #89b4fa;
  --success: #a6e3a1;
  --warning: #f9e2af;
  --danger: #f38ba8;
  --code-bg: #181825;
}
```

## 4.6 Palette F — Ocean Blue

Professional, fresh, technology-oriented.

```css
[data-theme="ocean"] {
  color-scheme: light;
  --bg: #f3f7fb;
  --surface: #ffffff;
  --surface-muted: #e8f0f7;
  --text: #172b3a;
  --text-muted: #63798a;
  --border: #d2e0eb;
  --accent: #1769aa;
  --accent-secondary: #16a6a1;
  --success: #23865b;
  --warning: #b7791f;
  --danger: #c2414b;
  --code-bg: #e9f0f5;
}
```

## 4.7 Palette G — Sunset

Expressive, warm, creative.

```css
[data-theme="sunset"] {
  color-scheme: light;
  --bg: #fff8f3;
  --surface: #ffffff;
  --surface-muted: #f8e9df;
  --text: #38251f;
  --text-muted: #856b60;
  --border: #ead4c7;
  --accent: #d85b43;
  --accent-secondary: #bd7c36;
  --success: #55835b;
  --warning: #b7791f;
  --danger: #bc3945;
  --code-bg: #f4e8df;
}
```

## 4.8 Palette H — Graphite

Neutral, elegant, premium.

```css
[data-theme="graphite"] {
  color-scheme: dark;
  --bg: #121416;
  --surface: #1b1e21;
  --surface-muted: #252a2e;
  --text: #f0f0ed;
  --text-muted: #a1a5a8;
  --border: #363b40;
  --accent: #d6d6d0;
  --accent-secondary: #9daeb8;
  --success: #8bbf9a;
  --warning: #d7b477;
  --danger: #df8585;
  --code-bg: #0d0f11;
}
```

## 4.9 Palette I — Rose & Wine

Elegant, expressive, editorial.

```css
[data-theme="rose"] {
  color-scheme: light;
  --bg: #faf5f6;
  --surface: #ffffff;
  --surface-muted: #f2e7eb;
  --text: #35242d;
  --text-muted: #826c77;
  --border: #e5d4dc;
  --accent: #a34770;
  --accent-secondary: #7755a5;
  --success: #477c60;
  --warning: #a77936;
  --danger: #b83d52;
  --code-bg: #f1e8ec;
}
```

## 4.10 Palette J — High Contrast

Bold, modern, accessible.

```css
[data-theme="contrast"] {
  color-scheme: dark;
  --bg: #080808;
  --surface: #151515;
  --surface-muted: #242424;
  --text: #ffffff;
  --text-muted: #c1c1c1;
  --border: #555555;
  --accent: #f5e642;
  --accent-secondary: #65d9ff;
  --success: #83e28e;
  --warning: #ffcb69;
  --danger: #ff7373;
  --code-bg: #050505;
}
```

## 4.11 Palette selection rules

- Select the palette that best fits the project's identity.
- Treat the palettes as starting points, not mandatory choices.
- Create custom palettes when the project requires a distinctive identity.
- Support both light and dark interfaces when useful.
- Keep semantic colors consistent.
- Use accent colors selectively.
- Maintain sufficient text contrast.
- Avoid using too many saturated colors simultaneously.
- Ensure images, videos, terminal previews, and components integrate naturally with the selected palette.
- Do not force a dark interface simply because the project is technical.

When a theme selector is requested, implement a functional selector that updates the entire interface consistently.

---

# 5. Typography System

Typography establishes identity, hierarchy, and readability.

Choose fonts according to the project's visual direction.

## Sans-serif

Suggested families:

- Inter
- Geist
- Manrope
- DM Sans
- Plus Jakarta Sans
- IBM Plex Sans
- System UI
- Helvetica Neue

## Serif / Editorial

Suggested families:

- Playfair Display
- DM Serif Display
- Lora
- Source Serif 4
- Instrument Serif
- Cormorant Garamond

## Monospace / Technical

Suggested families:

- JetBrains Mono
- Fira Code
- IBM Plex Mono
- Geist Mono
- SF Mono
- Consolas

### Typography rules

- Use a coherent font combination.
- Avoid unnecessary font families.
- Establish a clear hierarchy.
- Use weight and size before color.
- Maintain comfortable line heights.
- Avoid excessively long paragraphs.
- Use responsive typography with `clamp()`.
- Reserve monospace for code and technical elements unless the design direction calls for more extensive use.
- Use serif typography when it strengthens an editorial identity.

Suggested foundation:

```css
:root {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-serif: "Instrument Serif", Georgia, serif;
  --font-mono: "JetBrains Mono", monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-display: clamp(2.5rem, 6vw, 5rem);
}
```

---

# 6. Layout and Composition

Use intentional layouts instead of relying on repetitive templates.

### General rules

- Establish a clear content hierarchy.
- Use consistent alignment.
- Apply a deliberate spacing scale.
- Create visual rhythm between sections.
- Use whitespace to separate information.
- Control paragraph width.
- Use grids only when they improve organization.
- Avoid unnecessary nested containers.
- Avoid excessive card-based layouts.
- Use asymmetry when appropriate.
- Maintain a consistent visual language.

### Suggested spacing foundation

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  --content-width: 76rem;
  --reading-width: 46rem;

  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.875rem;
}
```

Use the values as a consistent foundation, adjusting them to the project's visual identity.

---

# 7. Components and Interface Patterns

## Navigation

- Clear and predictable structure.
- Compact navigation when appropriate.
- Consistent active states.
- Accessible dropdowns.
- Mobile-friendly navigation.
- Avoid excessive navigation buttons and pills.

## Hero sections

- Communicate the project's purpose immediately.
- Use strong but appropriate headlines.
- Include concise supporting text.
- Provide clear primary actions.
- Use imagery, video, interactive demonstrations, or product previews when useful.
- Avoid generic hero layouts that make every website look identical.

## Cards and surfaces

- Use cards only when they provide meaningful grouping.
- Maintain consistent internal spacing.
- Use subtle borders and shadows.
- Avoid excessive rounding.
- Distinguish interactive surfaces from static content.

## Buttons

- Clear visual hierarchy.
- Consistent dimensions.
- Meaningful labels.
- Functional actions.
- Accessible states.
- Appropriate hover, focus, active, and disabled states.

## Forms

- Clear labels.
- Useful validation messages.
- Logical field grouping.
- Accessible input states.
- Appropriate error and success feedback.

## Tables and data

- Readable alignment.
- Consistent spacing.
- Appropriate column widths.
- Responsive overflow.
- Clear distinction between headings and values.

## Terminal and code

- Monospaced typography.
- Syntax highlighting.
- Readable line spacing.
- Authentic terminal presentation.
- Copy-to-clipboard functionality.
- Clearly differentiated commands and output.
- Horizontal scrolling for long content.

---

# 8. Multimedia and Visual Assets

Images, audio, videos, illustrations, and animations are permitted and encouraged when they improve the design or user experience.

The design must remain coherent regardless of which media formats are used.

Do not force multimedia into every project.

## 8.1 Images and photography

Use images when they provide visual information, establish atmosphere, explain a concept, or strengthen the project's identity.

Possible uses:

- Hero photography.
- Product screenshots.
- Interface previews.
- Editorial photography.
- Background imagery.
- Illustrations.
- Diagrams.
- Gallery layouts.
- Before-and-after comparisons.
- Educational visual references.

Rules:

- Prefer high-quality, relevant imagery.
- Preserve the selected color palette.
- Use consistent image treatments.
- Maintain appropriate aspect ratios.
- Avoid random stock photography.
- Avoid excessive decorative imagery.
- Use appropriate object positioning and cropping.
- Include meaningful alternative text.
- Use optimized image formats where possible.
- Provide fallbacks for unavailable images.

## 8.2 Video

Video may be used for:

- Product demonstrations.
- Tutorials.
- Hero backgrounds.
- Feature explanations.
- Educational content.
- Portfolio presentations.
- Interactive demonstrations.

Rules:

- Video must serve a clear purpose.
- Use responsive video containers.
- Preserve appropriate aspect ratios.
- Avoid unexpected audio playback.
- Provide accessible controls when users need to interact with the video.
- Use captions or transcripts where appropriate.
- Respect reduced-motion preferences.
- Avoid oversized videos that negatively affect performance.
- Provide poster images and fallback content.

Autoplay should generally be muted and used only when it improves the experience.

## 8.3 Audio

Audio may be incorporated into:

- Educational experiences.
- Podcasts.
- Music platforms.
- Language-learning interfaces.
- Interactive tutorials.
- Voice demonstrations.
- Multimedia presentations.

Rules:

- Use accessible playback controls.
- Display meaningful audio information.
- Provide progress and duration indicators.
- Include transcripts where appropriate.
- Never autoplay audio unexpectedly.
- Maintain visual consistency with the selected design system.

## 8.4 Illustrations and graphics

Use illustrations, diagrams, icons, and visual compositions when they communicate information more effectively than text.

Maintain:

- Consistent illustration style.
- Cohesive visual proportions.
- Appropriate color usage.
- Clear hierarchy.
- Consistent iconography.

Avoid mixing unrelated illustration styles.

## 8.5 Animation and motion

Motion can improve feedback, navigation, and visual storytelling.

Use:

- Subtle hover transitions.
- Interface state transitions.
- Loading indicators.
- Scroll-triggered reveals when appropriate.
- Small micro-interactions.
- Meaningful animated demonstrations.

Avoid:

- Excessive movement.
- Unnecessary parallax.
- Distracting background animations.
- Scroll hijacking.
- Animations that interfere with reading.
- Motion that cannot be disabled when necessary.

Always respect `prefers-reduced-motion`.

---

# 9. Interactive Experiences

Interactive components must have real functionality.

Possible patterns include:

- Tabs.
- Accordions.
- Dropdown menus.
- Theme selectors.
- Search and filtering.
- Interactive terminal demonstrations.
- CLI flag playgrounds.
- Code editors.
- Copy buttons.
- Image galleries.
- Video players.
- Audio players.
- Sliders.
- Comparisons.
- Configuration generators.
- Interactive charts.
- Data visualizations.

### Interaction rules

1. Every visible interactive element must work.
2. State changes must be visually clear.
3. Provide feedback after user actions.
4. Maintain keyboard accessibility.
5. Use semantic HTML.
6. Provide appropriate focus indicators.
7. Avoid unexpected layout shifts.
8. Do not simulate successful actions that did not happen.
9. Keep interactions predictable.
10. Ensure mobile usability.

---

# 10. Responsive Design

Every website must adapt to different screen sizes.

### Desktop

- Use the available horizontal space effectively.
- Maintain readable content widths.
- Use balanced grids.
- Avoid excessive empty space.

### Tablet

- Adjust column counts.
- Reduce unnecessary spacing.
- Preserve the visual hierarchy.
- Keep navigation usable.

### Mobile

- Stack split layouts.
- Simplify navigation.
- Maintain readable typography.
- Use comfortable touch targets.
- Avoid fixed-width elements.
- Handle long text and code correctly.
- Prevent unintended horizontal page overflow.

Test at:

- 320px.
- 375px.
- 768px.
- 1024px.
- 1440px and wider.

---

# 11. Accessibility

Accessibility is part of the design process, not an optional addition.

Requirements:

- Semantic HTML.
- Appropriate heading hierarchy.
- Keyboard navigation.
- Visible focus indicators.
- Accessible form labels.
- Meaningful image alternative text.
- Sufficient color contrast.
- Accessible media controls.
- Reduced-motion support.
- Proper ARIA usage when necessary.
- Avoid color-only communication.
- Ensure interactive elements are distinguishable.

Target WCAG 2.2 AA where applicable.

---

# 12. Design Tokens and Implementation

Use reusable design tokens to maintain consistency.

Example:

```css
:root {
  /* Typography */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Layout */
  --container-width: 76rem;
  --reading-width: 46rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Shape */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.875rem;

  /* Motion */
  --transition-fast: 140ms ease;
  --transition-normal: 220ms ease;
}
```

All theme-dependent colors should use semantic CSS variables.

Avoid hardcoding colors in individual components.

Example:

```css
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
}

.surface {
  background: var(--surface);
  border: 1px solid var(--border);
}

.muted {
  color: var(--text-muted);
}

a {
  color: var(--accent);
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

---

# 13. Implementation Workflow

When asked to create or improve a website, follow this workflow.

## Phase 1 — Understand

Analyze:

- Project purpose.
- Target audience.
- Content type.
- Existing branding.
- Functional requirements.
- Available assets.
- Existing project structure.
- Technology stack.
- Responsive requirements.

Do not invent unnecessary requirements.

## Phase 2 — Choose the visual direction

Select:

- Visual design direction.
- Main color palette.
- Typography combination.
- Layout structure.
- Component styling.
- Image and multimedia treatment.
- Interaction patterns.

Ensure all decisions support one cohesive identity.

## Phase 3 — Inspect the project

Before implementing:

- Inspect existing files.
- Identify the framework and dependencies.
- Understand existing conventions.
- Reuse useful components.
- Preserve existing functionality.
- Avoid unnecessary dependency installation.

## Phase 4 — Build

Implement:

- Complete page structure.
- Responsive layouts.
- Design tokens.
- Reusable components.
- Functional interactions.
- Appropriate multimedia.
- Accessible states.
- Consistent typography.
- Real content and examples.

Do not deliver a static mockup when a functional implementation is requested.

## Phase 5 — Refine

Review:

- Visual hierarchy.
- Spacing.
- Typography.
- Color consistency.
- Component alignment.
- Media proportions.
- Interactive feedback.
- Responsive behavior.
- Accessibility.

Remove unnecessary visual elements.

## Phase 6 — Verify

When tools permit, test:

- Navigation.
- Buttons.
- Forms.
- Theme switching.
- Copy actions.
- Interactive previews.
- Multimedia playback.
- Mobile layouts.
- Keyboard navigation.
- Console errors.
- Broken links.
- Horizontal overflow.

Report honestly which tests were completed and which could not be performed.

---

# 14. Design Quality Checklist

Before considering a project complete, verify:

### Visual identity

- The design has a coherent visual direction.
- The palette matches the project's purpose.
- Typography is consistent.
- Hierarchy is immediately understandable.
- Spacing and alignment are intentional.
- Components share a coherent visual language.
- The interface does not look like an unmodified generic template.

### Components

- Navigation works.
- Buttons perform their intended actions.
- Forms are usable.
- Components have appropriate interaction states.
- Content is organized logically.

### Multimedia

- Images are relevant and high quality.
- Videos are responsive.
- Audio controls work where applicable.
- Media does not interfere with readability.
- Appropriate fallbacks are provided.

### Technical quality

- Design tokens are consistently used.
- Layout works across screen sizes.
- Keyboard navigation works.
- Focus indicators are visible.
- Reduced-motion preferences are respected.
- No unintended horizontal overflow exists.
- No obvious console errors remain.

### Final delivery

- The implementation is complete.
- The project identity is preserved.
- Interactions have been tested.
- The requested output directory is respected.
- Remaining limitations are communicated honestly.

---

# 15. Final Design Philosophy

The goal of this skill is to create interfaces that feel intentionally designed rather than assembled from generic components.

Every project should have its own personality.

A developer tool may benefit from a restrained technical aesthetic. An editorial website may require expressive typography and photography. A creative portfolio may use experimental compositions. A professional platform may prioritize clarity and trust.

Do not force one visual direction, one color palette, one typography system, or one layout onto every project.

Use the appropriate design principles, visual assets, components, and interactions for the specific context.

**The final result must be visually distinctive, cohesive, accessible, responsive, functional, and professionally implemented.**