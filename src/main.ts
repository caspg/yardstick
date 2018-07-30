import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

import { config } from '@app/config'

import { AppModule } from './app.module'

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)

  await app.listen(PORT)
  Logger.log(`Server is running using http://0.0.0.0:${PORT}`, config.projectName)
}

bootstrap()
