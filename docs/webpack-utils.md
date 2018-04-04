# Webpack
Various utils related to the Webpack bundling process.

**Why?** &mdash; Webpack is the backbone of our development; it is great, but
there are some tricky situations, that can be leveraged by functions provided
here.

### Reference
- **`requireWeak(module)`** &mdash; Requires specified `module` in the weak way:
the module is not bundled by Webpack, and it is required from the runtime
environment at the moment when this function is executed.
