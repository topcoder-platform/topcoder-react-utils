# ESlint Configurations
Standard configurations for [ESLint](https://eslint.org/).

**Why?** &mdash; We use ESLint for quality control of our code. The standard ESLint configurations ensure that we use the same rules across all our projects.

At the moment, a single ESLint configuration is provided by this package:
- [**config/eslint/default**](#default) &mdash; Default ESLint configuration.

Under the hood it matches the standard [AirBnB ESLint](https://www.npmjs.com/package/eslint-config-airbnb) config, and just adds a few plugins to ensure that ESLint properly cooperates with Babel to understand JS and JSX constructs we use in our code.

To use it just create the following `.eslintrc`:
```json
{
  "extends": "topcoder-react-utils/config/eslint/default"
}
```

`.eslintrc` allows you to further modify ESLint configuration, but it is not recommended without a very good and special reason.
