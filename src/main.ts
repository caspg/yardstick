import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { join } from 'path'

import { config } from '@app/config'

import { AppModule } from './app.module'

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)

  app.setBaseViewsDir(join(__dirname + '/modules/web_templates'))
  app.setViewEngine('hbs')

  await app.listen(PORT)
  Logger.log(`Server is running using http://0.0.0.0:${PORT}`, config.projectName)
}

bootstrap()
