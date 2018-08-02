import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { join } from 'path'

import { config } from '@app/config'

import { WebModule } from 'lib/web/web.module'

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(WebModule)

  app.setBaseViewsDir(join(__dirname + '/lib/web/templates'))
  app.setViewEngine('hbs')

  await app.listen(PORT)
  Logger.log(`Server is running using http://0.0.0.0:${PORT}`, config.projectName)
}

bootstrap()
