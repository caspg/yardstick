import { Controller, Get, Render } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { BreweryService } from '../../../core/modules/brewery/brewery.service'

@Controller('/')
class HelloController {
  constructor(private readonly breweryService: BreweryService) {}

  @Get()
  @Render('hello/index')
  hello() {
    debugger
    return { message: 'Hello, world!' }
  }
}

export { HelloController }
