import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'

import { DbModule } from '@app/core/db'

import { HttpLogger } from './middlewares/http-logger.middleware'
import { AdminModule } from './modules/admin/breweries/breweries.module'

/**
 * Main module for a web app.
 */
@Module({
  imports: [
    DbModule,
    AdminModule,
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
