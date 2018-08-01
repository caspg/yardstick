import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HelloController } from './hello.controller'
import { Breweries } from './breweries.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Breweries])],
  controllers: [HelloController],
})

export class HelloModule {}
