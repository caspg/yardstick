# YardStick

## Description
---

Monorepo project, written in Typescript and managed by [Lerna](https://github.com/lerna/lerna).


## Prerequisites
---

* node v9.11
* [typescript v2.9](https://developer.atlassian.com/blog/2015/10/monorepos-in-git/)
* [yarn v 1.5](https://yarnpkg.com/lang/en/)
* [lerna v 3.0](https://github.com/lerna/lerna)


## Creating new typescript package
---

Create new folder inside `./packages/` directory and then run:

```bash
$ yarn init
$ yarn add typescript@2.9.2
$ npx tsc --init # Executes local binaries
```

this should result with following directory structure:

```
lerna.json
package.json
packages/
  package-a/
    package.json
    tsconfig.json
```
