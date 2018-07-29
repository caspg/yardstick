import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  email!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string
}

interface UserInteface {
  email: string
  firstName: string
  lastName: string
}

export { User, UserInteface }
