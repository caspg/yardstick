import { Controller, Get, Render } from '@nestjs/common'

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
  @Render('planets/mars')
  getOne() {
    return { planet: 'Mars is red' }
  }
}

export { PlanetsController }
