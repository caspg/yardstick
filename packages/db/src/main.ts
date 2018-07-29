import 'reflect-metadata'
import { createConnection, getCustomRepository } from 'typeorm'

import { UserRepository } from './db/users/user.repository'

async function connectDb(): Promise<object> {
  // reads connection options from ormconfig.js file
  await createConnection()

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

    try {
      const user = await db.userRepo.create(userAttrs)
      console.log('User created: ', user)
    } catch (error) {
      console.log('There was an error during saving to db')
    }
  })

export { connectDb }
