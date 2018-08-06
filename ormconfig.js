module.exports = {
  type: 'postgres',
  username: 'postgres',
  host: 'docker_postgres',  // this will work only inside docker, specified in docker-compose
  database: 'yardstick_dev', // TODO(kacper): maybe move to ENV vars
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'], // TODO(kacper): change it to correct path when moved to lib/core
  migrations: [__dirname + '/src/lib/web/migrations/*.ts'],
  cli: {
    migrationsDir: ['src/lib/web/migrations'],
  },
}
