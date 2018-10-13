import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { join } from 'path'
import * as methodOverride from 'method-override'
import * as sassMiddleware from 'node-sass-middleware'
import * as hbs from 'hbs'

import { Config } from '@app/config'

import { WebModule } from 'lib/web/web.module'

async function bootstrap() {
  const port = Config.port
  const app = await NestFactory.create(WebModule)
  const publicPath = join(__dirname, '..', 'public')

  app.setViewEngine('hbs')
  app.setBaseViewsDir(join(__dirname + '/lib/web/templates'))
  app.set('view options', { layout: '/layouts/admin_layout' })
  hbs.registerPartials(__dirname + '/lib/web/templates/admin/partials')
  app.use(
    sassMiddleware({
      src: join(__dirname, '/lib/web/styles'),
      dest: join(__dirname, '../public'),
      indentedSyntax: false, // true = .sass and false = .scss
      sourceMap: true,
      debug: !Config.isProd,
      // prefix: '/public',
    }),
  )
  app.use(methodOverride('_method'))
  app.useStaticAssets(publicPath)

  await app.listen(port)
  Logger.log(
    `Server is running using http://0.0.0.0:${port}`,
    Config.values.projectName,
  )
}

bootstrap()
