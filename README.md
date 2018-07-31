# yardstick

[Nest.js](https://docs.nestjs.com/) project.

## Description

description

## Prerequisites

* node v10.7
* PostgreSQL v10.3
* [Yarn v 1.5](https://yarnpkg.com/lang/en/)

## Installation

```bash
$ npm install
```

## Running the app [DOCKER style]

Make sure you have docker installed locally [click](https://www.docker.com/community-edition#/download)

then run:

```bash
$ docker-compose -f docker-compose.dev.yml up
```

You can run application in debugging mode with:

```bash
$ docker-compose -f docker-compose.dev.yml run --service-ports web yarn start:inspect
```

then open `about:inspect` in Chrome.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## TODO

* ENV variables

* create admin-web module

* create CRUD for breweries (Brewery)

* setup TravisCI
