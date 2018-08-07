import { Module } from '@nestjs/common'

import { BreweryModule } from '@app/core/brewery'

import { BreweriesController } from './breweries.controller'

@Module({
  imports: [
    BreweryModule
  ],
  controllers: [BreweriesController],
})

export class AdminModule {}
