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

Postgres database is created by docker-compose.

then run:

```bash
$ docker-compose -f ./docker/dev/docker-compose.yml up
```

You can run application in debugging mode with:

```bash
$ docker-compose -f ./docker/dev/docker-compose.yml run --rm --service-ports web yarn start:inspect
```

then open `about:inspect` in Chrome.

Opening bash inside docker:

```bash
docker-compose -f ./docker/dev/docker-compose.yml run --rm --service-ports web bash
```

To open bash inside container without using docker-compose:

```bash
docker exec -it CONTAINER_NAME_OR_ID bash
```

## Node.js debugging

```bash
yarn run start:debugg
```

https://nodejs.org/api/debugger.html

## Migrations

[http://typeorm.io/#/migrations](http://typeorm.io/#/migrations)

To create migration run:

```bash
yarn run create:migration migrationName
```

to run migrations:

```bash
yarn run migrations
```

to revert migrations:

```bash
yarn run migrations:revert

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
