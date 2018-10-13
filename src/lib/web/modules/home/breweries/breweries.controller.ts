import { Controller, Get, Render, Res } from '@nestjs/common'

import { BreweryService } from '@app/core/brewery'

@Controller('/home/breweries')
class HomeBreweriesController {
  constructor(private readonly breweryService: BreweryService) {}

  @Get()
  async index(@Res() res) {
    const breweries = await this.breweryService.findAll()

    res.render('home/breweries/index', {
      breweries,
      breweriesJson: JSON.stringify(breweries),
      layout: 'layouts/home_layout',
    })
  }
}

export { HomeBreweriesController }
