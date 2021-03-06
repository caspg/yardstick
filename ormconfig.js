module.exports = {
  type: 'postgres',
  username: 'postgres',
  host: 'docker_postgres',  // this will work only inside docker, specified in docker-compose
  database: 'yardstick_dev', // TODO(kacper): maybe move to ENV vars
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/lib/core/migrations/*.ts'],
  cli: {
    migrationsDir: ['src/lib/core/migrations'],
  },
  // only during dev run migartions automatically
  migrationsRun: process.env.NODE_ENV === 'development'
}
