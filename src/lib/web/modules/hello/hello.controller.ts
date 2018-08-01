import { Controller, Get, Render } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Breweries } from './breweries.entity'

@Controller('/')
class HelloController {
  constructor(
    @InjectRepository(Breweries)
    private readonly breweryRepository: Repository<Breweries>,
  ) {}

  @Get()
  @Render('hello/index')
  async hello() {
    const breweries = await this.breweryRepository.find()

    return { breweries }
  }
}

export { HelloController }
