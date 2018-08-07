import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Brewery {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  city: string

  @Column('float')
  latitude: number

  @Column('float')
  longitude: number
}

export { Brewery }
