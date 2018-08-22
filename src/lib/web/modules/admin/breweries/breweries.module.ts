import { Module } from '@nestjs/common'

import { BreweryModule as CoreBreweryModule } from '@app/core/brewery'

import { BreweriesController } from './breweries.controller'

@Module({
  imports: [CoreBreweryModule],
  controllers: [BreweriesController],
})
export class BreweriesModule {}
