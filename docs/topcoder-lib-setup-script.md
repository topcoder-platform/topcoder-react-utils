# `topcoder-lib-setup` script

NodeJS script that helps to install and upgrade `topcoder-react-utils` and other
similar NPM libraries maintained by Topcoder.

**Why?** &mdash; When library version is upgraded manually, it is difficult
to ensure the same versions of common dependencies are used by the upgraded
library and by its host codebase. In some situations the mismatch of exact
versions leads to odd issues, difficult to track. This script solves this
problem.

### Usage

From the host package's root directory call it as:
```sh
$ ./node_modules/.bin/topcoder-lib-setup [OPTION]... [LIBRARY]...
```
Where `[OPTIONS]...` is an optional, whitespace-separated list of options (see
below); and `[LIBRARY]...` is an optional, whitespace-separated list of libraries
to update. If no library names are given, `topcoder-react-utils` is assumed by
default.

For each `library` specified in the `[LIBRARY]...` list, this script does the
following:

- Installs the specified (if `library` contains `@x.y.z` semver suffix), or
  the latest (automatically appending `@latest` suffix to `library`) version
  of `library` as a regular dependency of the host code. Specifically, it does:
  ```bash
  $ npm install --save library
  ```

- Installs all dev dependencies of `library` into the host code as dev
  dependencies with exactly the same versions. Specifically, it generates
  a whitespace-separated list `devDeps` of dev dependencies, then executes
  ```bash
  $ npm install --save-dev devDeps
  ```

- Updates regular dependencies or the host package, that are also used by
  `library` to the same versions used by the library. Specifically, it generates
  a whitespace-separated list of dependencies, `deps`, which is an intersection
  of regular dependencies of `library` witht the set of regular dependencies of
  the host code; and the version of each dependency in the list is taken from
  the `library`'s `package.json`. Then it executes:
  ```bash
  $ npm install --save deps
  ```

Once the steps described above are completed for each library, the script
executes `$ npm install` to ensure that any packages removed temporarily
during those steps are installed back.

### Options
| Option | Alias | Description |
| --- | --- | --- |
| `--help` | `-h` | Prints to standard output the basic usage instructions.
