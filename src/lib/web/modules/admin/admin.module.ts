import { Module } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { BreweriesModule } from './breweries/breweries.module'

@Module({
  imports: [BreweriesModule],
  controllers: [AdminController],
})
export class AdminModule {}
