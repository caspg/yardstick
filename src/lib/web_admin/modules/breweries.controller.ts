import { Controller, Get, Post, Put, Delete, Body, Render, Param } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Breweries } from './breweries.entity'
import { CreateBreweryDto } from './create-brewery.dto'

@Controller('/admin/breweries/')
class AdminController {
  constructor(
    @InjectRepository(Breweries)
    private readonly breweryRepository: Repository<Breweries>,
  ) {}

  @Post()
  async create(@Body() createBreweryDto: CreateBreweryDto) {
    return await this.breweryRepository.create(createBreweryDto)
  }

  @Get()
  @Render('breweries/index')
  async find() {
    const breweries = await this.breweryRepository.find()
    return { breweries }
  }

  @Get('/:id')
  @Render('breweries/single')
  async findOne(@Param() params) {
    const brewery = await this.breweryRepository.findOne(params.id)
    return { brewery }
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

export { AdminController }
