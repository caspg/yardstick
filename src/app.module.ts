import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'

import { HttpLogger } from './middlewares/http-logger.middleware'
import { WebModule } from './modules/web/web.module'

@Module({
  imports: [WebModule],
  controllers: [],
  providers: [],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLogger)
      .forRoutes('/')
  }
}

export { AppModule }
