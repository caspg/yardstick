import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'

import { HttpLogger } from './middlewares/http-logger.middleware'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLogger)
      .forRoutes('/')
  }
}

export { AppModule }
