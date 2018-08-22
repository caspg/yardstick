import {
  Controller,
  Get,
  Post,
  Body,
  Render,
  Param,
  Delete,
  Response,
  Put,
} from '@nestjs/common'

import { BreweryService } from '@app/core/brewery'

import { CreateBreweryDto } from '@app/core/brewery/create-brewery.dto'
import { UpdateBreweryDto } from '@app/core/brewery/update-brewery.dto'

@Controller('/admin/breweries')
class BreweriesController {
  constructor(private readonly breweryService: BreweryService) {}

  @Get()
  @Render('admin/breweries/index')
  async index() {
    const breweries = await this.breweryService.findAll()
    return { breweries }
  }

  @Get('new')
  @Render('admin/breweries/new')
  new() {
    return {}
  }

  @Get(':id')
  @Render('admin/breweries/show')
  async show(@Param() params) {
    const brewery = await this.breweryService.find(params.id)
    return { brewery }
  }

  @Get(':id/edit')
  @Render('admin/breweries/edit')
  async edit(@Param() params) {
    const brewery = await this.breweryService.find(params.id)
    return { brewery }
  }

  @Post()
  async create(@Body() createBreweryDto: CreateBreweryDto, @Response() res) {
    await this.breweryService.create(createBreweryDto)
    res.redirect('/admin/breweries')
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBreweryDto: UpdateBreweryDto,
    @Response() res,
  ) {
    await this.breweryService.update(id, updateBreweryDto)
    res.redirect('/admin/breweries')
  }

  @Delete(':id')
  async remove(@Param('id') id, @Response() res) {
    const result = await this.breweryService.delete(id)
    res.redirect('/admin/breweries')
    return { result }
  }
}

export { BreweriesController }
