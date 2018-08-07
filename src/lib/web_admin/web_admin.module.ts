import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AdminModule } from '../web/modules/admin/breweries/breweries.module'

import { HttpLogger } from './middlewares/http-logger.middleware'

/**
 * Main module for a web app.
 */
@Module({
  imports: [
    AdminModule,
    TypeOrmModule.forRoot(),
  ],
})
class WebAdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLogger)
      .forRoutes('/admin/breweries/')
  }
}

export { WebAdminModule }
