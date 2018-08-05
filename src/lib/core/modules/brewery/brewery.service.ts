import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Brewery } from './brewery.entity'

@Injectable()
class BreweryService {
  constructor(
    @InjectRepository(Brewery)
    private readonly breweryRepository: Repository<Brewery>,
  ) {}

  async findAll(): Promise<Brewery[]> {
    return await this.breweryRepository.find()
  }

  yadaMessage(): string {
    return 'Yada yada'
  }
}

export { BreweryService }
