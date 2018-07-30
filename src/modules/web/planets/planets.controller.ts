import { Controller, Get } from '@nestjs/common'

@Controller('/planets')
class PlanetsController {
  @Get()
  getAll() {
    return [
      'Earth',
      'Mars',
    ]
  }

  @Get('/mars')
  getOne() {
    return 'Mars is red'
  }
}

export { PlanetsController }
