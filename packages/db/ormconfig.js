module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'yardstick_dev',
  logging: false,
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  // TODO(kacper): when in production we should point to `./dist/db/**/*.entity.js
  entities: ['./src/db/**/*.entity.ts'],
}
