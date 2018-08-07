import { Module } from '@nestjs/common'
import { BreweriesController } from './breweries/breweries.controller'
import { AdminController } from './admin.controller'

@Module({
  imports: [BreweriesController, AdminController],
})
export class AdminModule {}
