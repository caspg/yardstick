import { configDev } from './config.dev'
import { configProd } from './config.prod'
import { configDefault } from './config.default'

interface ConfigValues {
  readonly projectName: string
  readonly port: number
}

class Config {
  static get isProd(): boolean {
    return process.env.NODE_ENV === 'production'
  }

  static get values(): ConfigValues {
    const currentEnvConfig = Config.isProd ? configProd : configDev
    return Object.assign({}, configDefault, currentEnvConfig)
  }

  static get port(): number {
    return Number(process.env.PORT) || Config.values.port
  }
}

export { Config }
