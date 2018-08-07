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
$ yarn install
```

## Running the app [DOCKER style]

Make sure you have docker installed an running locally [click](https://www.docker.com/community-edition#/download)

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

then open `about:inspect` in Chrome.

To run psql in docker copy the postreg container id:

```bash
$ docker container ls
```

And use it to run:

```bash
$ docker exec -it [CONTAINER ID] bash
```

Then run:

```bash
$ psql -U postgres
```
In psql you can:

```bash
# connect to database
$ \c yardstick_dev

# show table
$ \d breweries
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
