# Stylelint Config
Standard configuration for [Stylelint](https://stylelint.io).

**Why?** &mdash; We use Stylelint for quality control of our SCSS code.
The standard Stylelint configurations ensure that we use the same rules across
all our projects.

At the moment a single Stylelint configuration is provided by the package:

- [**`config/stylelint/default`**](#default) &mdash; Default Stylelint
  configuration.

Under the hood it matches the
[standard Stylelint config](https://github.com/stylelint/stylelint-config-standard)
with a few extra options to ignore some valid rules and selectors not known to
Stylelint: `@content`, `@extend`, `@for`, `@include`, `@mixin`, `:global`.

To use it, just create the following `.stylelintrc`:
```json
{
  "extends": "./node_modules/topcoder-react-utils/config/stylelint/default.json"
}
```

`.stylelintrc` allows you to further modify the standard configuration, but it
is not recommended without a very good and special reason.
