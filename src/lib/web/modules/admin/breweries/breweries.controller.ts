import {
  Controller,
  Get,
  Post,
  Body,
  Render,
  Param,
  Delete,
  Response,
} from '@nestjs/common'

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

  // TODO(Piotr): GET /:id/edit action
  // load Brewery by id
  // pass brewery to template

  // @Put(':id')
  // update(@Param('id') id, @Body() updateBreweryDto) {
  //   return `This action updates a #${id} cat`
  // }

  @Delete(':id')
  async remove(@Param('id') id, @Response()	res) {
    const result = await this.breweryService.delete(id)
    res.redirect('/admin/breweries')
  }
}

export { BreweriesController }
