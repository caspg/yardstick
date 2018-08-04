import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AdminController } from './breweries.controller'
import { Breweries } from './breweries.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Breweries])],
  controllers: [AdminController],
})

export class AdminModule {}
