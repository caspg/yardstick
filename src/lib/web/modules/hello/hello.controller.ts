import { Controller, Get, Render } from '@nestjs/common'

import { BreweryService } from '@app/core'

@Controller('/')
class HelloController {
  constructor(private readonly breweryService: BreweryService) {}

  @Get()
  @Render('hello/index')
  hello() {
    return { message: this.breweryService.yadaMessage() }
  }
}

export { HelloController }
