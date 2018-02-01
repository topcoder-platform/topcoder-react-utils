# ESlint Configurations
Standard configurations for [ESLint](https://eslint.org/).

**Why?** &mdash; We use ESLint for quality control of our code. The standard ESLint configurations ensure that we use the same rules across all our projects.

This package provides the following ESLint configurations:
- [**config/eslint/default**](#default) &mdash; Default ESLint configuration;
- [**config/eslint/jest**](#jest) &mdash; Extends `config/eslint/default`
  to work inside folders with Jest tests.

To use them just create the following `.eslintrc` in your code:
```json
{
  "extends": "./node_modules/topcoder-react-utils/config/eslint/default.json"
}
```
`.eslintrc` allows you to further modify ESLint configuration, but it is not recommended without a very good and special reason.

### Configuration Details
- <a name="default">**`config/eslint/default`**</a>

  Under the hood it matches the standard
  [AirBnB ESLint](https://www.npmjs.com/package/eslint-config-airbnb) config,
  and just adds a few plugins to ensure that ESLint properly cooperates with
  Babel to understand JS and JSX constructs we use in our code.

- <a name="jest">**`config/eslint/jest`**</a>

  Extends `config/eslint/default` to work well in the folders with Jest tests.




