import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Brewery } from '@app/core/brewery/brewery.entity'
import { BreweryService } from '@app/core/brewery/brewery.service'

@Module({
  imports: [TypeOrmModule.forFeature([Brewery])],
  providers: [BreweryService],
  exports: [BreweryService],
})
export class BreweryModule {}
