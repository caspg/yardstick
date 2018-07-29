import 'reflect-metadata'
import { createConnection, getCustomRepository } from 'typeorm'

import { User } from './db/users/user.entity'
import { UserRepository } from './db/users/user.repository'

function connectDb() {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'yardstick_dev',
    synchronize: true, // TODO only for development
    logging: false,
    entities: [
      User,
    ],
  }).then(async (connection) => {
    // TODO(kacper) remove me
    const userRepo = getCustomRepository(UserRepository)

    const user = await userRepo.create({
      firstName: 'Yada',
      lastName: 'elo',
      email: 'email@elo.pl',
    })

    console.log('user created: ', user)

  }).catch((error) => {
    console.log(error)
  })
}

connectDb()
