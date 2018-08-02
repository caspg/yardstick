import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Brewery } from './brewery.entity'
import { BreweryService } from './brewery.service'

@Module({
  imports: [TypeOrmModule.forFeature([Brewery])],
  providers: [BreweryService],
  exports: [BreweryService],
})
export class BreweryModule {}
