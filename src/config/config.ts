import { isProd } from '@app/config/helpers'

import { configDev } from './config.dev'
import { configProd } from './config.prod'

interface Config {
  readonly projectName: string
}

const configDefault = {
  projectName: 'Yardstick',
}

const currentEnvConfig = isProd() ? configProd : configDev

const config: Config = Object.assign({}, configDefault, currentEnvConfig)

export { config }
