import { Module } from '@nestjs/common'

import { BreweryModule } from '@app/core/brewery'

import { HelloController } from './hello.controller'

@Module({
  imports: [BreweryModule],
  controllers: [HelloController],
})

export class HelloModule {}
