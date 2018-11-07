import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { BreweryModule as CoreBreweryModule } from '@app/core/brewery'

@Module({
  imports: [CoreBreweryModule],
  controllers: [AppController],
})
export class AppModule {}
