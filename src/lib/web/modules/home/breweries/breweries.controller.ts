import { Controller, Get, Render, Res } from '@nestjs/common'

import { BreweryService } from '@app/core/brewery'

@Controller('/home/breweries')
class HomeBreweriesController {
  constructor(private readonly breweryService: BreweryService) {}

  // @Get()
  // @Render('home/breweries/index')
  // async index() {
  //   const breweries = await this.breweryService.findAll()
  //   return { breweries }
  // }

  @Get()
  async index(@Res() res) {
    res.render('home/breweries/index', {
      breweries: await this.breweryService.findAll(),
      layout: 'layouts/home_layout',
    })
  }
}

export { HomeBreweriesController }
