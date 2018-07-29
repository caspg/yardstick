import 'reflect-metadata'
import { createConnection, getCustomRepository, getConnectionOptions } from 'typeorm'

import { UserRepository } from './db/users/user.repository'

async function connectDb(): Promise<object> {
  // read connection options from ormconfig.js file
  const opts = await getConnectionOptions()
  const connectionOptions = Object.assign({}, opts, {
    // TODO(kacper): when in production we should point to `./dist/db/**/*.entity.js
    entities: ['./src/db/**/*.entity.ts'],
  })

  await createConnection(connectionOptions)

  const userRepo = getCustomRepository(UserRepository)

  return {
    userRepo,
  }
}

/**
 * TODO(kacper):
 *  bellow lines are just example of usage of `connectDb`
 *  to remove
 */
connectDb()
  .then(async (db: any) => {
    const userAttrs = {
      firstName: 'Fred',
      lastName: 'Flinston',
      email: 'yada@yada.com',
    }

    const user = await db.userRepo.create(userAttrs)
    console.log('User created: ', user)
  })

export { connectDb }
