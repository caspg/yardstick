import { Module } from '@nestjs/common'
import { BreweriesController } from './breweries/breweries.controller'

@Module({
  imports: [BreweriesController],
})

export class AdminModule {}
