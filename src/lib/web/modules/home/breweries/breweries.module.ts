import { Module } from '@nestjs/common'

import { BreweryModule as CoreBreweryModule } from '@app/core/brewery'

import { HomeBreweriesController } from './breweries.controller'

@Module({
  imports: [CoreBreweryModule],
  controllers: [HomeBreweriesController],
})
export class HomeBreweriesModule {}
