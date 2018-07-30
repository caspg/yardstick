import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'

import { HelloModule } from './modules/hello/hello.module'
import { PlanetsModule } from './modules/planets/planets.module'

import { HttpLogger } from './middlewares/http-logger.middleware'

/**
 * Main module for a web app.
 */
@Module({
  imports: [
    HelloModule,
    PlanetsModule,
  ],
})
class WebModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLogger)
      .forRoutes('/')
  }
}

export { WebModule }