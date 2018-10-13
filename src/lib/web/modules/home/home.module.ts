import { Module } from '@nestjs/common'
import { HomeController } from './home.controller'
import { BreweryModule as CoreBreweryModule } from '@app/core/brewery'

@Module({
  imports: [CoreBreweryModule],
  controllers: [HomeController],
})
export class HomeModule {}
