import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, DeleteResult, UpdateResult } from 'typeorm'

import { Brewery } from '@app/core/brewery/brewery.entity'
import { CreateBreweryDto } from '@app/core/brewery/dtos/create-brewery.dto'
import { UpdateBreweryDto } from '@app/core/brewery/dtos/update-brewery.dto'

@Injectable()
class BreweryService {
  constructor(
    @InjectRepository(Brewery)
    private readonly breweryRepository: Repository<Brewery>,
  ) {}

  findAll(): Promise<Brewery[]> {
    return this.breweryRepository.find({
      order: { id: 'DESC' },
    })
  }

  find(id: number): Promise<Brewery> {
    return this.breweryRepository.findOne(id)
  }

  findBy(attrs: object): Promise<Brewery> {
    return this.breweryRepository.findOne(attrs)
  }

  delete(id: number): Promise<DeleteResult> {
    return this.breweryRepository.delete(id)
  }

  create(createBreweryDto: CreateBreweryDto): Promise<Brewery> {
    const newBrewery = this.breweryRepository.create(createBreweryDto)
    return this.breweryRepository.save(newBrewery)
  }

  update(
    id: number,
    updateBreweryDto: UpdateBreweryDto,
  ): Promise<UpdateResult> {
    return this.breweryRepository.update(id, updateBreweryDto)
  }
}

export { BreweryService }
