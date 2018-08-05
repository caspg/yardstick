import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { join } from 'path'

import { Config } from '@app/config'

import { WebModule } from 'lib/web/web.module'

async function bootstrap() {
  const port = Config.port
  const app = await NestFactory.create(WebModule)

  app.setBaseViewsDir(join(__dirname + '/lib/web/templates'))
  app.setViewEngine('hbs')

  await app.listen(port)
  Logger.log(`Server is running using http://0.0.0.0:${port}`, Config.values.projectName)
}

bootstrap()
