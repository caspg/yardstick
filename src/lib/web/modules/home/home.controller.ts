import { Controller, Get, Render, Res, Param } from '@nestjs/common'

import { BreweryService } from '@app/core/brewery'

@Controller('/')
class HomeController {
  constructor(private readonly breweryService: BreweryService) {}

  @Get()
  async index(@Res() res) {
    const breweries = await this.breweryService.findAll()

    res.render('home/index', {
      breweries,
      breweriesJson: JSON.stringify(breweries),
      layout: 'layouts/home_layout',
    })
  }

  @Get(':id')
  async show(@Param() params, @Res() res) {
    const breweries = await this.breweryService.findAll()
    const brewery = await this.breweryService.find(params.id)

    res.render('home/show', {
      brewery,
      breweriesJson: JSON.stringify(breweries),
      layout: 'layouts/home_layout',
    })
  }
}

export { HomeController }
