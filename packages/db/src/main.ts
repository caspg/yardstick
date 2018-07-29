import 'reflect-metadata'
import { createConnection, getCustomRepository } from 'typeorm'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

import { User } from './db/users/user.entity'
import { UserRepository } from './db/users/user.repository'

async function connectDb(opts: PostgresConnectionOptions): Promise<object> {
  // Only Db package should know about entities.
  const connectionOptions = Object.assign({}, opts, {
    entities: [
      User,
    ],
  })

  await createConnection(opts)

  const userRepo = getCustomRepository(UserRepository)

  return {
    userRepo,
  }
}

const opts: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'yardstick_dev',
  synchronize: true, // TODO only for development
  logging: false,
}

connectDb(opts)
  .then(async (db: any) => {
    const userAttrs = {
      firstName: 'Fred',
      lastName: 'Flinston',
      email: 'yada@yada.com',
    }

    const user = await db.userRepo.create(userAttrs)
    console.log('User created: ', user)
  })
