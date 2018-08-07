import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BreweriesController } from './breweries.controller'
import { Breweries } from './breweries.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Breweries])],
  controllers: [BreweriesController],
})

export class AdminModule {}
