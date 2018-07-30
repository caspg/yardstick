import { Module } from '@nestjs/common'

import { HelloModule } from './hello/hello.module'
import { PlanetsModule } from './planets/planets.module'

/**
 * Main module for a web component.
 * It is responsible for defining all web routes and related logic.
 */
@Module({
  imports: [
    HelloModule,
    PlanetsModule,
  ],
})

export class WebModule {}
