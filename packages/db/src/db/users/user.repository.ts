import { EntityRepository, AbstractRepository } from 'typeorm'

import { User, UserInteface } from './user.entity'

@EntityRepository(User)
class UserRepository extends AbstractRepository<User> {
  async create(attrs: UserInteface): Promise<User> {
    const user = this.repository.create(attrs)
    await this.repository.save(user)

    return user
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ email })
  }

  delete(userOrId: User | number) {
    return this.repository.delete(userOrId)
  }
}

export { UserRepository }
