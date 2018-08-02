import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { HelloController } from './hello.controller'
import { BreweryModule } from '../../../core/modules/brewery/brewery.module'

@Module({
  imports: [BreweryModule],
  controllers: [HelloController],
})

export class HelloModule {}
