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
  
