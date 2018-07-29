# Yardstick.Db

Database access layer

## Installation

```
$ yarn install
```

## Setting up

First you need to create database:

```bash
$ createdb yardstick_dev -U postgres
```

## Migrations

http://typeorm.io/#/migrations

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
migrations:revert
```

## Running the app

TODO:
