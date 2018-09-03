import { Module } from '@nestjs/common'
import { HomeController } from './home.controller'
import { HomeBreweriesModule } from './breweries/breweries.module'

@Module({
  imports: [HomeBreweriesModule],
  controllers: [HomeController],
})
export class HomeModule {}
