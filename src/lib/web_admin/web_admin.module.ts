// TODO (pjoter)
// [x] web_admin module
// [x] breweries.module
// [x] breweries.controller
// [x] Read all records with GET
// [x] Read single record with GET
// [] Create record with POST
// [] Update record with PUT
// [] Remove record with DELETE
// [] Design admin panel
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AdminModule } from './modules/breweries.module'

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
