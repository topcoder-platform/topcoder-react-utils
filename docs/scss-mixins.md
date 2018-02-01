# SCSS Mixins
Collection of useful style mixins.

**Why?** &mdash; Some pieces of SCSS code are often reused in different
stylesheets of different apps, thus it is useful to have them all in one place,
and implmented in a standard way.

To use, import the main mixins file into your SCSS, e.g.:
```scss
@import "topcoder-react-utils/src/styles/mixins";
```

### Font Mixins
- **`@mixin font-family($name, $weight, $style, $url, $file);`**
  The `font-family` mixins generates a `@font-face` declaration for
  inclusion of the specified font into the app. The font is assumed
  to be provided in the following formats: EOT, WOFF, TTF, SVG.
  - **`$name`** Font name (to reference the loaded font from SCSS in
  the SCSS stylesheets);
  - **`$weight`** Font weight;
  - **`$style`** Font style, *normal* or *italic*;
  - **`$url`** Path to the font files (without the filename);
  - **`$file`** Name of the font files (without extension). It is
  supposed that all files related to the font have the same name,
  and differs only be their extensions.

- **`font-family-ttf($name, $weight, $style, $url);`**
  Similar to the `font-family` mixins, but loads only fonts in TTF
  format.
  - **`$name`** Font name (to reference the loaded font from SCSS in
  the SCSS stylesheets);
  - **`$weight`** Font weight;
  - **`$style`** Font style, *normal* or *italic*;
  - **`$url`** Path to the font file, including the filename (without
  file extension).
  
### Media Mixins
These mixins help to create conditional SCSS, responsive to the viewport size.

We consider five viewport sizes: extra-small (XS), small (SM), medium (MD),
large (LG), and extra-large (XL). It is assumed that mobile devices have SM
screen size; tablets have MD screens, and desktops have LG or XL screen size.
The actual break-points between these sizes are defined by four variables with
the following default values:
- **`$screen-xs`** — 320px;
- **`$screen-sm`** — 768px;
- **`$screen-md`** — 1024px;
- **`$screen-lg`** — 1280px.

Each of these variables set the maximal pixel size of the corresponding
viewport; i.e. XS viewport may have any width under `$screen-xs` (inclusive);
MD viewport may have a width from `$screen-sm` (exclusive) up to `$screen-md`
(inclusive); XL viewport may have any width above `$screen-lg` (exclusive).

Based on these variables, we provide two sets of media mixins:
- **`@mixin xs`**, **`@mixin sm`**, **`@mixin md`**, **`@mixin lg`**,
  **`@mixin xl`** &mdash; allow to apply styling to a single specified
  size of the viewport;
- **`@mixin xs-to-sm`**, **`@mixin xs-to-md`**, **`@mixin xs-to-lg`**,
  **`@mixin sm-to-md`**, **`@mixin sm-to-lg`**, **`@mixin sm-to-xl`**,
  **`@mixin md-to-lg`**, **`@mixin md-to-xl`**, **`@mixin lg-to-xl`** &mdash;
 allow to apply styling for a range of viewport sizes, from the first mentioned
 in the mixin name to the last one, both inclusive.

The both kinds of these mixins you can use the same way:
```scss
// style.scss

.someClass {
  // General style
  background: green;

  // The element will become red on the smallest screens (XS to SM), which means
  // any screen smaller than MD.
  @include xs-to-sm {
    background: red;
  }
}
```
