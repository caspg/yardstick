# YardStick


## Description

Monorepo project, written in Typescript and managed by [Lerna](https://github.com/lerna/lerna). This project consists of the following components:

* [db](packages/db) - Database access layer
* [core][packages/core] - Core business logic of the application


## Prerequisites

* node v9.11
* PostgreSQL v10.3
* [yarn v 1.5](https://yarnpkg.com/lang/en/)
* [lerna v 3.0](https://github.com/lerna/lerna)


## Creating new typescript package

Create new folder inside `./packages/` directory and then run:

```bash
$ yarn init
$ yarn add typescript@2.9.2
$ npx tsc --init # npx executes local binaries
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
