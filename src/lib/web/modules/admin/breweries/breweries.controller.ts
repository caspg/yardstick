import { Controller, Get, Post, Body, Render, Param } from '@nestjs/common'

import { BreweryService } from '@app/core/brewery'

import { CreateBreweryDto } from '@app/core/brewery/create-brewery.dto'

@Controller('/admin/breweries')
class BreweriesController {
  constructor(private readonly breweryService: BreweryService) {}

  @Get('/')
  @Render('admin/breweries/index')
  async index() {
    const breweries = await this.breweryService.findAll()
    return { breweries }
  }

  @Get('/:id')
  @Render('admin/breweries/show')
  async show(@Param() params) {
    const brewery = await this.breweryService.find(params.id)
    return { brewery }
  }

  @Post('/')
  async create(@Body() createBreweryDto: CreateBreweryDto) {
    // return await this.breweryRepository.create(createBreweryDto)
    return {}
  }

  // @Put(':id')
  // update(@Param('id') id, @Body() updateBreweryDto) {
  //   return `This action updates a #${id} cat`
  // }

  // @Delete(':id')
  // remove(@Param('id') id) {
  //   return `This action removes a #${id} cat`
  // }
}

export { BreweriesController }
