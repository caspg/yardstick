import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Brewery } from '@app/core/brewery/brewery.entity'

@Injectable()
class BreweryService {
  constructor(
    @InjectRepository(Brewery)
    private readonly breweryRepository: Repository<Brewery>,
  ) {}

  findAll(): Promise<Brewery[]> {
    return this.breweryRepository.find()
  }

  find(id: number): Promise<Brewery> {
    return this.breweryRepository.findOne(id)
  }

  findBy(attrs: object): Promise<Brewery> {
    return this.breweryRepository.findOne(attrs)
  }
}

export { BreweryService }
