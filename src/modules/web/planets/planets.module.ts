import { Module } from '@nestjs/common'

import { PlanetsController } from './planets.controller'

@Module({
  controllers: [PlanetsController],
})

export class PlanetsModule {}
