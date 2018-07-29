module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'yardstick_dev',
  logging: false,
  // TODO(kacper): in production we should point to .js files
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  // TODO(kacper): when in production we should point to `./dist/db/**/*.entity.js
  entities: ['./src/db/**/*.entity.ts'],
}
