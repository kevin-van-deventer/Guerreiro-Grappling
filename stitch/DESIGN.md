# Design System Document

## 1. Overview & Creative North Star: "Kinetic Precision"
The Creative North Star for this design system is **Kinetic Precision**. In the world of Jiu-Jitsu, power is nothing without leverage, and movement is nothing without intent. This system rejects the static, "boxy" nature of traditional web grids in favor of a layout that feels like it’s in mid-transition—bending, twisting, and pivoting.

We achieve a high-end editorial feel by utilizing **Intentional Asymmetry**. By breaking the horizontal plane with diagonal shears and skewed containers, we mimic the "twist" of a submission hold. The experience should feel aggressive yet professional, using high-contrast typography and extreme whitespace to command authority. We are not just building a gym site; we are creating a digital dojo that feels as intense and disciplined as a black-belt rolling session.

---

## 2. Colors & Surface Logic
This palette is built on extreme tension: the void of pure black against the clinical clarity of white, punctuated by high-energy "strike" colors.

### The Palette (Material Design Mapping)
*   **Primary (Electric Blue):** `#0059bb` — Used for critical action paths and "flow" states.
*   **Secondary (Vibrant Red):** `#bc0100` — Used for high-intensity alerts, "live" sessions, and "combat" energy.
*   **Background:** `#f9f9f9` — A clean, high-performance canvas.
*   **Surface Tiers:** 
    *   `surface_container_lowest`: `#ffffff` (Pure white for floating elements)
    *   `surface_container`: `#eeeeee` (Subtle shift for sectioning)
    *   `surface_container_highest`: `#e2e2e2` (Deepest indentation)

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** To maintain a premium look, boundaries are defined by "The Shift." A new section is introduced by transitioning from `surface` to `surface_container_low`. Structural containment is achieved through value shifts, not outlines.

### Signature Textures: The "Torque" Gradient
For primary CTAs and Hero backgrounds, do not use flat colors. Use a linear gradient at a **15-degree angle** transitioning from `primary` (#0059bb) to `primary_container` (#0070ea). This creates a sense of "torque" and dimensional depth that feels custom-engineered.

---

## 3. Typography: Speed & Leverage
Our typography pairs the mechanical aggression of **Space Grotesk** with the functional clarity of **Manrope**.

*   **Display & Headlines (Space Grotesk):** These are your "Power Moves." Set these with tight letter-spacing (-0.02em) and heavy weights. They should feel like they are moving fast.
*   **Body (Manrope):** This is your "Technique." It provides the breath and legibility needed to balance the intensity of the headlines.
*   **Labels (Lexend):** Used for data points (class times, weight classes). Its geometric nature maintains the "Sporty" aesthetic even at small scales.

**Editorial Tip:** Use `display-lg` for large, cropped background text (e.g., "FLOW" or "SUBMIT") at 10% opacity behind content to create a layered, "z-axis" depth.

---

## 4. Elevation & Depth: Tonal Layering
In this system, "Up" is not indicated by shadows, but by **Brightness**.

*   **The Layering Principle:** Treat the UI as stacked mats. The `surface_container_lowest` (#ffffff) sits on top of `surface` (#f9f9f9). This "White-on-Off-White" layering creates a sophisticated, high-end feel without the clutter of drop shadows.
*   **The "Ghost Border" Fallback:** If you must define a hard edge (e.g., a search input), use the `outline_variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** For mobile navigation or floating filters, use a background of `surface_container_lowest` at 80% opacity with a **20px backdrop-blur**. This mimics the "flexibility" of the brand theme.

---

## 5. Components: The Sharp Edge
Components must reflect the "Bending & Twisting" theme. Avoid "standard" appearances at all costs.

### Buttons: The "Pivot" Variant
*   **Shape:** `0px` border radius (Sharp Edges Only).
*   **Style:** Buttons should use a **-3 degree CSS skew** on the X-axis. This makes the button look like it’s leaning into a sprint.
*   **Primary:** Skewed container using the "Torque" gradient. Text is `on_primary` (#ffffff).
*   **Tertiary:** No background. Underlined with a 4px bold stroke of `primary` that extends 10px beyond the text width.

### Cards: The "Angled Slice"
*   **Design:** Forbid divider lines. Separate content using `spacing.8` (1.75rem).
*   **Geometry:** Use a clip-path to shave off a tiny 15px corner of the card (top-right or bottom-left) to reinforce the "Sharp Edge" aesthetic.
*   **Nesting:** Place a `surface_container_lowest` card inside a `surface_container` section to create natural lift.

### Inputs & Fields
*   **Style:** Bottom-border only (2px thick). When focused, the border transforms into the `primary` Electric Blue.
*   **Labels:** Use `label-md` (Lexend) in all-caps to convey a professional, "spec-sheet" vibe.

### Signature Component: The "Combat Timeline"
A vertical list for class schedules. Instead of a straight line, the timeline "zig-zags" (twists) at each hour mark, using the `secondary` (Vibrant Red) for the current time indicator.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use the Spacing Scale `20` (4.5rem) and `24` (5.5rem) aggressively. Large gaps of white space make the "sharp" elements feel more intentional and premium.
*   **Do** skew images. Use a 2-5 degree tilt on hero photography to suggest motion.
*   **Do** use high-contrast pairings (Black text on White background).

### Don’t:
*   **Don’t use rounded corners.** Ever. The `roundedness` scale is strictly `0px`. Roundness suggests softness; this gym is about "Sharp Edges."
*   **Don’t use standard drop shadows.** If you need depth, use a 24px blur with 5% opacity tinted with `surface_tint`.
*   **Don’t use dividers.** Use the `surface` color shifts or the spacing scale to define the end of a thought. Lines are "clutter" in a high-performance environment.